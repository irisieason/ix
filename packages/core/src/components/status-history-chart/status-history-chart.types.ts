/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface StatusHistoryDataPoint {
  online: number;
  maintenance: number;
  error: number;
  offline: number;
}

export interface StatusHistoryData {
  [timeLabel: string]: StatusHistoryDataPoint;
}

export type StatusType = 'online' | 'maintenance' | 'error' | 'offline';

export interface ChartPoint {
  x: number;
  y: number;
  value: number;
  status: StatusType;
  timeLabel: string;
}
