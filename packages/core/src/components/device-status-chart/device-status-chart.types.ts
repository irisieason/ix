/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface ChartDataItem {
  online: number;
  maintenance: number;
  error: number;
  offline: number;
}

export interface ChartData {
  [key: string]: ChartDataItem;
}

export interface BarConfiguration {
  type: string;
  class: string;
  width: number;
  value: number;
  label: string;
  color: string;
}
