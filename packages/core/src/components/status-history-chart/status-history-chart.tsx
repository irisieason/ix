/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop, Watch, State } from '@stencil/core';
import type { StatusHistoryData, ChartPoint, StatusType } from './status-history-chart.types';

@Component({
  tag: 'ix-status-history-chart',
  styleUrl: 'status-history-chart.scss',
  shadow: true,
})
export class StatusHistoryChart {
  /**
   * Chart title
   */
  @Prop() chartTitle: string = 'Status history';

  /**
   * Chart data as JSON string or object
   * Format: {"Jan": {"online": 10, "maintenance": 0, "error": 0, "offline": -100}, ...}
   */
  @Prop() data: string | StatusHistoryData = JSON.stringify({
    'Jan': { online: 10, maintenance: 0, error: 0, offline: -100 },
    'Feb': { online: 5, maintenance: -5, error: 0, offline: -40 },
    'Mar': { online: -10, maintenance: -60, error: -20, offline: -40 },
    'Apr': { online: -25, maintenance: -40, error: -25, offline: -80 },
    'May': { online: 0, maintenance: 0, error: 0, offline: -40 },
    'Jun': { online: 0, maintenance: 0, error: 0, offline: -40 }
  });

  @State() private chartData: StatusHistoryData = {};
  @State() private chartWidth: number = 602;
  @State() private chartHeight: number = 186;

  @Watch('data')
  onDataChange() {
    this.updateChartData();
  }

  componentWillLoad() {
    this.updateChartData();
  }

  private updateChartData() {
    if (typeof this.data === 'string') {
      try {
        this.chartData = JSON.parse(this.data);
      } catch (e) {
        console.warn('Invalid JSON data:', this.data);
        this.chartData = {};
      }
    } else {
      this.chartData = this.data;
    }
  }

  private get timeLabels(): string[] {
    return Object.keys(this.chartData);
  }

  private get yAxisLabels(): number[] {
    // 平均分布7个水平线，从10到-100
    const minValue = -100;
    const maxValue = 10;
    const steps = 6; // 7个标签需要6个间隔
    const stepSize = (maxValue - minValue) / steps;

    return Array.from({ length: 7 }, (_, i) => {
      return Math.round(maxValue - (i * stepSize));
    });
  }

  private getYPosition(value: number): number {
    // Map value range [-100, 10] to chart height [0, 186]
    const minValue = -100;
    const maxValue = 10;
    const normalizedValue = (value - minValue) / (maxValue - minValue);
    return this.chartHeight - (normalizedValue * this.chartHeight);
  }

  private getXPosition(index: number): number {
    const totalLabels = this.timeLabels.length;
    if (totalLabels <= 1) return this.chartWidth / 2; // 单个数据点居中
    return (index / (totalLabels - 1)) * this.chartWidth;
  }

  private generatePathForStatus(status: StatusType): string {
    const points: ChartPoint[] = [];

    this.timeLabels.forEach((timeLabel, index) => {
      const dataPoint = this.chartData[timeLabel];
      if (dataPoint && dataPoint[status] !== undefined) {
        points.push({
          x: this.getXPosition(index),
          y: this.getYPosition(dataPoint[status]),
          value: dataPoint[status],
          status,
          timeLabel
        });
      }
    });

    if (points.length === 0) return '';

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }

    return path;
  }

  private generatePointsForStatus(status: StatusType): ChartPoint[] {
    const points: ChartPoint[] = [];

    this.timeLabels.forEach((timeLabel, index) => {
      const dataPoint = this.chartData[timeLabel];
      if (dataPoint && dataPoint[status] !== undefined) {
        points.push({
          x: this.getXPosition(index),
          y: this.getYPosition(dataPoint[status]),
          value: dataPoint[status],
          status,
          timeLabel
        });
      }
    });

    return points;
  }

  private getStatusColor(status: StatusType): string {
    const colors = {
      online: 'var(--theme-color-success)',
      maintenance: 'var(--theme-color-warning)',
      error: 'var(--theme-color-alarm)',
      offline: 'var(--theme-color-soft-text)'
    };
    return colors[status];
  }

  private renderGridLines() {
    const horizontalLines = this.yAxisLabels.map(value => {
      const y = this.getYPosition(value);
      return (
        <line
          x1="0"
          y1={y}
          x2={this.chartWidth}
          y2={y}
          stroke="var(--theme-chart-grid-lines, rgba(255, 255, 255, 0.1))"
          stroke-width="1"
        />
      );
    });

    // Vertical lines aligned with data points and month labels
    const verticalLines = this.timeLabels.map((_, index) => {
      const x = this.getXPosition(index);
      return (
        <line
          x1={x}
          y1="0"
          x2={x}
          y2={this.chartHeight}
          stroke="var(--theme-chart-grid-lines, rgba(255, 255, 255, 0.1))"
          stroke-width="1"
        />
      );
    });

    return [...horizontalLines, ...verticalLines];
  }

  private renderYAxisTicks() {
    return this.yAxisLabels.map(value => {
      const y = this.getYPosition(value);
      return (
        <line
          x1="-5"
          y1={y}
          x2="-1"
          y2={y}
          stroke="var(--theme-chart-axes, rgba(255, 255, 255, 0.3))"
          stroke-width="1"
        />
      );
    });
  }

  render() {
    const statuses: StatusType[] = ['error', 'maintenance', 'offline', 'online'];

    return (
      <Host>
        <div class="chart-container">
          {/* Header */}
          <div class="header">
            <div class="title">
              <ix-typography format="h5">{this.chartTitle}</ix-typography>
            </div>
            <div class="navigation">
              <ix-icon-button icon="chevron-left-small" variant="tertiary"></ix-icon-button>
              <ix-icon-button icon="chevron-right-small" variant="tertiary"></ix-icon-button>
            </div>
          </div>

          {/* Chart Area */}
          <div class="chart-area">
            <div class="chart-wrapper">
              {/* Y-axis labels */}
              <div class="y-axis-labels">
                {this.yAxisLabels.map(value => (
                  <div
                    class="y-label"
                    style={{ top: `${this.getYPosition(value)}px` }}
                    key={`y-${value}`}
                  >
                    <ix-typography format="label">{value}</ix-typography>
                  </div>
                ))}
              </div>

              {/* Chart SVG */}
              <div class="chart-svg-container">
                <svg
                  width={this.chartWidth}
                  height={this.chartHeight}
                  class="chart-svg"
                >
                  {/* Grid lines */}
                  <g class="grid-lines">
                    {this.renderGridLines()}
                  </g>

                  {/* Y-axis ticks */}
                  <g class="y-axis-ticks">
                    {this.renderYAxisTicks()}
                  </g>

                  {/* Chart lines */}
                  {statuses.map(status => {
                    const path = this.generatePathForStatus(status);
                    if (!path) return null;

                    return (
                      <path
                        key={`line-${status}`}
                        d={path}
                        stroke={this.getStatusColor(status)}
                        stroke-width="2"
                        fill="none"
                      />
                    );
                  })}

                  {/* Chart points */}
                  {statuses.map(status => {
                    const points = this.generatePointsForStatus(status);
                    return points.map((point, index) => (
                      <circle
                        key={`point-${status}-${index}`}
                        cx={point.x}
                        cy={point.y}
                        r="1.5"
                        fill={this.getStatusColor(status)}
                      />
                    ));
                  })}
                </svg>
              </div>
            </div>

            {/* X-axis labels */}
            <div class="x-axis-labels">
              {this.timeLabels.map((label, index) => {
                const xPosition = this.getXPosition(index);
                return (
                  <div
                    class="x-label"
                    style={{
                      position: 'absolute',
                      left: `${xPosition}px`,
                      transform: 'translateX(-50%)'
                    }}
                    key={`x-${label}`}
                  >
                    <ix-typography format="label">{label}</ix-typography>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div class="legend">
            <div class="legend-item">
              <div class="legend-color legend-online"></div>
              <ix-typography format="label">Online</ix-typography>
            </div>
            <div class="legend-item">
              <div class="legend-color legend-maintenance"></div>
              <ix-typography format="label">Maintenance</ix-typography>
            </div>
            <div class="legend-item">
              <div class="legend-color legend-error"></div>
              <ix-typography format="label">Error</ix-typography>
            </div>
            <div class="legend-item">
              <div class="legend-color legend-offline"></div>
              <ix-typography format="label">Offline</ix-typography>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
