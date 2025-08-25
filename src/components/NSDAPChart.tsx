'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

interface ElectionData {
  year: string;
  date: string;
  percentage: number;
}

const electionData: ElectionData[] = [
  { year: '1928', date: 'May 1928', percentage: 2.6 },
  { year: '1930', date: 'Sep 1930', percentage: 18.3 },
  { year: '1932 Jul', date: 'Jul 1932', percentage: 37.4 },
  { year: '1932 Nov', date: 'Nov 1932', percentage: 33.1 },
  { year: '1933', date: 'Mar 1933', percentage: 43.9 }
];

export default function NSDAPChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.bottom - margin.top;

    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scalePoint()
      .domain(electionData.map(d => d.year))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, 50])
      .range([height, 0]);

    // Line generator
    const line = d3.line<ElectionData>()
      .x(d => xScale(d.year)!)
      .y(d => yScale(d.percentage))
      .curve(d3.curveMonotoneX);

    // Add grid lines
    g.selectAll('.grid-line')
      .data(yScale.ticks(5))
      .enter()
      .append('line')
      .attr('class', 'grid-line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', d => yScale(d))
      .attr('y2', d => yScale(d))
      .attr('stroke', '#e5e7eb')
      .attr('stroke-width', 1)
      .attr('opacity', 0.5);

    // Add axes
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('font-size', '12px')
      .style('font-weight', '500')
      .style('fill', '#374151');

    g.append('g')
      .call(d3.axisLeft(yScale).tickFormat(d => `${d}%`))
      .selectAll('text')
      .style('font-size', '12px')
      .style('font-weight', '500')
      .style('fill', '#374151');

    // Add axis labels
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left)
      .attr('x', 0 - (height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .style('font-weight', '600')
      .style('fill', '#1f2937')
      .text('Vote Share (%)');

    g.append('text')
      .attr('transform', `translate(${width / 2}, ${height + margin.bottom - 10})`)
      .style('text-anchor', 'middle')
      .style('font-size', '14px')
      .style('font-weight', '600')
      .style('fill', '#1f2937')
      .text('Election Year');

    // Add the line path
    const path = g.append('path')
      .datum(electionData)
      .attr('fill', 'none')
      .attr('stroke', '#dc2626')
      .attr('stroke-width', 3)
      .attr('d', line);

    // Animate the line
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);

    // Add data points
    const circles = g.selectAll('.data-point')
      .data(electionData)
      .enter()
      .append('circle')
      .attr('class', 'data-point')
      .attr('cx', d => xScale(d.year)!)
      .attr('cy', d => yScale(d.percentage))
      .attr('r', 0)
      .attr('fill', '#dc2626')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2);

    // Animate circles appearing
    circles
      .transition()
      .delay((d, i) => i * 400 + 500)
      .duration(300)
      .attr('r', 6);

    // Add percentage labels
    const labels = g.selectAll('.percentage-label')
      .data(electionData)
      .enter()
      .append('text')
      .attr('class', 'percentage-label')
      .attr('x', d => xScale(d.year)!)
      .attr('y', d => yScale(d.percentage) - 15)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('font-weight', '600')
      .style('fill', '#dc2626')
      .style('opacity', 0)
      .text(d => `${d.percentage}%`);

    // Animate labels
    labels
      .transition()
      .delay((d, i) => i * 400 + 800)
      .duration(300)
      .style('opacity', 1);

    // Add hover effects
    circles
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', 8);
        
        // Show tooltip
        const tooltip = g.append('g')
          .attr('class', 'tooltip')
          .attr('transform', `translate(${xScale(d.year)!}, ${yScale(d.percentage) - 30})`);
        
        const rect = tooltip.append('rect')
          .attr('x', -40)
          .attr('y', -25)
          .attr('width', 80)
          .attr('height', 20)
          .attr('fill', '#1f2937')
          .attr('rx', 4)
          .attr('opacity', 0.9);
        
        tooltip.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', -10)
          .style('font-size', '11px')
          .style('font-weight', '600')
          .style('fill', 'white')
          .text(`${d.date}: ${d.percentage}%`);
      })
      .on('mouseout', function() {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', 6);
        
        g.select('.tooltip').remove();
      });

  }, [isVisible]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg
        ref={svgRef}
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
