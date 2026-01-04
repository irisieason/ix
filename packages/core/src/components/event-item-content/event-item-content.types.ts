/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Event item content data interface
 */
export interface EventItemContentData {
  /**
   * Icon name for the event type
   */
  icon?: string;

  /**
   * Main header text for the event type
   */
  typeHeader?: string;

  /**
   * Additional information for the event type
   */
  headerInfo?: string;

  /**
   * Device name
   */
  deviceName?: string;

  /**
   * Device information (e.g., IP address)
   */
  deviceInfo?: string;

  /**
   * Timestamp for the event
   */
  timestamp?: string;

  /**
   * Show share button
   */
  showShareButton?: boolean;

  /**
   * Show create task button
   */
  showCreateTaskButton?: boolean;

  /**
   * Text for the create task button
   */
  createTaskButtonText?: string;
}

/**
 * Event item content configuration
 */
export interface EventItemContentConfig {
  /**
   * Enable responsive layout
   */
  responsive?: boolean;

  /**
   * Compact mode for smaller heights
   */
  compact?: boolean;

  /**
   * Custom width for type and device sections
   */
  sectionWidth?: string;
}
