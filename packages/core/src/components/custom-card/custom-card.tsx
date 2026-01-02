/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import type { CardVariant } from '../card/card.types';
import type { ChartData } from '../device-status-chart/device-status-chart.types';

@Component({
  tag: 'ix-custom-card',
  styleUrl: 'custom-card.scss',
  shadow: true,
})
export class CustomCard {
  /**
   * Card variant
   */
  @Prop() variant: CardVariant = 'outline';

  /**
   * Show card in selected state
   */
  @Prop() selected: boolean = false;

  /**
   * If true, disables hover and active styles and changes cursor to default
   */
  @Prop() passive: boolean = false;

  /**
   * Card title
   */
  @Prop() cardTitle: string = 'Device status';

  /**
   * Y-axis label
   */
  @Prop() yAxisLabel: string = 'IP Range';

  /**
   * X-axis label
   */
  @Prop() xAxisLabel: string = 'Device';

  /**
   * Chart data as JSON string or object
   * Format: {"10.x": {"online": 60, "maintenance": 0, "error": 0, "offline": 0}, ...}
   */
  @Prop() data: string | ChartData = JSON.stringify({
    '10.x': { online: 60, maintenance: 0, error: 0, offline: 0 },
    '192.x': { online: 250, maintenance: 0, error: 20, offline: 15 },
    '172.x': { online: 180, maintenance: 30, error: 0, offline: 0 }
  });

  render() {
    return (
      <Host>
        <ix-card
          variant={this.variant}
          selected={this.selected}
          passive={this.passive}
        >
          <ix-card-content>
            <ix-device-status-chart
              chartTitle={this.cardTitle}
              yAxisLabel={this.yAxisLabel}
              xAxisLabel={this.xAxisLabel}
              data={this.data}
            ></ix-device-status-chart>
          </ix-card-content>
        </ix-card>
      </Host>
    );
  }
}
