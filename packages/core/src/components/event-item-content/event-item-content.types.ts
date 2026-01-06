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
  typeIcon?: string;

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
   * Date stamp for the event (date part)
   */
  datestamp?: string;

  /**
   * Timestamp for the event (time part)
   */
  timestamp?: string;

  /**
   * Show default icon button (share button)
   * Set to false if you want to provide custom icon button via slot
   */
  showDefaultIconButton?: boolean;

  /**
   * Show default button (Create task button)
   * Set to false if you want to provide custom button via slot
   */
  showDefaultButton?: boolean;

  /**
   * Default icon button icon name
   */
  defaultIconButtonIcon?: string;

  /**
   * Default icon button variant
   */
  defaultIconButtonVariant?: 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';

  /**
   * Default button text
   */
  defaultButtonText?: string;

  /**
   * Default button variant
   */
  defaultButtonVariant?: 'primary' | 'secondary' | 'tertiary' | 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
}

/**
 * Parsed timestamp parts
 */
export interface TimestampParts {
  /**
   * Date part of the timestamp
   */
  date: string;

  /**
   * Time part of the timestamp
   */
  time: string;
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
