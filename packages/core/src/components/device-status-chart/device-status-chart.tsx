/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop, Watch, State } from '@stencil/core';
import type { DeviceStatusChartData } from './device-status-chart.types';

@Component({
  tag: 'ix-device-status-chart',
  styleUrl: 'device-status-chart.scss',
  shadow: true,
})
export class DeviceStatusChart {
  /**
   * Chart title
   */
  @Prop() chartTitle: string = 'Device status';

  /**
   * Y-axis label
   */
  @Prop() yAxisLabel: string = 'IP Range';

  /**
   * X-axis label
   */
  @Prop() xAxisLabel: string = 'Device';

  /**
   * Maximum value for scaling bars (auto-calculated if not provided)
   */
  @Prop() maxValue?: number;

  /**
   * Chart data as JSON string or object
   */
  @Prop() data: string | DeviceStatusChartData = {
    '10.x': { online: 60, maintenance: 0, error: 0, offline: 0 },
    '192.x': { online: 250, maintenance: 0, error: 26, offline: 15 },
    '172.x': { online: 180, maintenance: 49, error: 0, offline: 0 }
  };

  @State() private chartData: DeviceStatusChartData = {
    '10.x': { online: 60, maintenance: 0, error: 0, offline: 0 },
    '192.x': { online: 250, maintenance: 0, error: 26, offline: 15 },
    '172.x': { online: 180, maintenance: 49, error: 0, offline: 0 }
  };

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

  private get maxDataValue(): number {
    if (this.maxValue) return this.maxValue;

    let max = 0;
    Object.values(this.chartData).forEach(item => {
      const total = item.online + item.maintenance + item.error + item.offline;
      max = Math.max(max, total);
    });
    return max || 300;
  }

  private get categories(): string[] {
    return Object.keys(this.chartData);
  }

  private get xAxisScale(): number[] {
    const max = this.maxDataValue;
    const steps = 6;
    const stepSize = Math.ceil(max / steps);
    return Array.from({ length: steps + 1 }, (_, i) => i * stepSize);
  }

  private get containerHeight(): number {
    const rowCount = this.categories.length;
    const rowHeight = 38;
    const lineHeight = 1;
    return rowCount * rowHeight + (rowCount + 1) * lineHeight;
  }

  private renderBars(category: string) {
    const data = this.chartData[category];

    if (!data) {
      return <div class="bar bar-empty" style={{ width: '10px', height: '26px', backgroundColor: '#666', display: 'inline-block' }} title="No data"></div>;
    }

    const maxValue = this.maxDataValue;
    const barWidth = 280;
    const bars: any[] = [];

    const statuses = [
      { key: 'online' as keyof typeof data, color: '#01d65a', label: 'Online', class: 'bar-online' },
      { key: 'maintenance' as keyof typeof data, color: '#ffd732', label: 'Maintenance', class: 'bar-maintenance' },
      { key: 'error' as keyof typeof data, color: '#ff2640', label: 'Error', class: 'bar-error' },
      { key: 'offline' as keyof typeof data, color: '#7d8099', label: 'Offline', class: 'bar-offline' }
    ];

    statuses.forEach((status, index) => {
      const value = data[status.key];
      if (value > 0) {
        const width = Math.max(4, (value / maxValue) * barWidth);

        bars.push(
          <div
            key={`${category}-${status.key}-${index}`}
            class={`bar ${status.class}`}
            style={{
              width: `${width}px`,
              height: '26px',
              backgroundColor: status.color,
              display: 'inline-block'
            }}
            title={`${status.label}: ${value}`}
          ></div>
        );
      }
    });

    // 如果没有数据，返回空条形图
    if (bars.length === 0) {
      return <div class="bar bar-empty" style={{ width: '10px', height: '26px', backgroundColor: '#666', display: 'inline-block' }} title="Empty data"></div>;
    }

    // 返回Fragment包装的条形图
    return bars;
  }

  render() {
    return (
      <Host>
        <div class="chart-container">
          {/* Header with title and navigation */}
          <div class="header">
            <div class="title">
              <ix-typography format="h5">{this.chartTitle}</ix-typography>
            </div>
            <div class="navigation">
              <ix-icon-button icon="chevron-left-small" variant="tertiary"></ix-icon-button>
              <ix-icon-button icon="chevron-right-small" variant="tertiary"></ix-icon-button>
            </div>
          </div>

          {/* Y-axis label */}
          <div class="y-axis-label">
            <ix-typography format="h5">{this.yAxisLabel}</ix-typography>
          </div>

          {/* Main chart grid */}
          <div class="chart-grid">
            <div class="grid-container" style={{ height: `${this.containerHeight}px` }}>
              {/* Y-axis scale labels */}
              <div class="y-axis-scale">
                {this.categories.map(label => (
                  <div class="y-scale-item" key={`y-${label}`}>
                    <ix-typography format="label">{label}</ix-typography>
                  </div>
                ))}
              </div>

              {/* Chart area with grid and bars */}
              <div class="chart-area">
                {/* Vertical grid lines */}
                <div class="vertical-grid">
                  {this.xAxisScale.map((_, index) => <div class="grid-line" key={`grid-${index}`}></div>)}
                </div>

                {/* Chart rows with horizontal lines and bars */}
                <div class="chart-rows">
                  {this.categories.map(category => (
                    <div class="chart-row" key={category}>
                      <div class="horizontal-line"></div>
                      <div class="bar-container">
                        {this.renderBars(category)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom horizontal line */}
                <div class="bottom-line"></div>
              </div>
            </div>

            {/* X-axis scale */}
            <div class="x-axis-scale">
              {this.xAxisScale.map((value, index) => (
                <div class="x-scale-item" key={`x-${index}`}>
                  <ix-typography format="label">{value}</ix-typography>
                </div>
              ))}
            </div>
          </div>

          {/* X-axis label */}
          <div class="x-axis-label">
            <ix-typography format="h5">{this.xAxisLabel}</ix-typography>
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
