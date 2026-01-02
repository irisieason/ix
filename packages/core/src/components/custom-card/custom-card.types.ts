/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { CardVariant } from '../card/card.types';

export interface ChartDataItem {
  label: string;
  values: {
    success: number;
    warning: number;
    alarm: number;
    critical: number;
  };
}

export interface CustomCardData {
  // Card properties
  variant?: CardVariant;
  selected?: boolean;
  passive?: boolean;

  // Custom card properties
  cardTitle?: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  chartData?: ChartDataItem[];
  xTickLabels?: string[];
  legendLabels?: string[];
  showNavigation?: boolean;
}
