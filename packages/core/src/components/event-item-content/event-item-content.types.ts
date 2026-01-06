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
   * Legacy combined timestamp property (can be single line or comma-separated date and time)
   * Examples: "2026-01-05, 08:51:21" or "2026-01-05 08:51:21"
   * @deprecated Use datestamp and timestamp instead
   */
  legacyTimestamp?: string;

  // ShareIconButton directory - contains IconButton native properties
  /**
   * IconButton variant (native IconButton.variant)
   */
  shareVariant?: 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';

  /**
   * Button in oval shape (native IconButton.oval)
   */
  oval?: boolean;

  /**
   * Icon name (native IconButton.icon)
   */
  shareIcon?: string;

  /**
   * Size of icon in button (native IconButton.size)
   */
  shareSize?: '24' | '16' | '12';

  /**
   * Color of icon in button (native IconButton.iconColor)
   */
  shareIconColor?: string;

  /**
   * IconButton disabled state (native IconButton.disabled)
   */
  shareDisabled?: boolean;

  /**
   * Type of the button (native IconButton.type)
   */
  shareType?: 'button' | 'submit';

  /**
   * IconButton loading state (native IconButton.loading)
   */
  shareLoading?: boolean;

  /**
   * IconButton Instance - contains iXIcons component (fallback for shareIcon)
   */
  instance?: {
    iXIcons?: {
      icon?: {
        name?: string;
      };
    };
  };

  // Button directory - contains ix-button native properties
  /**
   * ARIA label for button (native Button.ariaLabelButton)
   */
  ariaLabelButton?: string;

  /**
   * Button variant (native Button.variant)
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';

  /**
   * Button disabled state (native Button.disabled)
   */
  disabled?: boolean;

  /**
   * Button type (native Button.type)
   */
  type?: 'button' | 'submit';

  /**
   * Button loading state (native Button.loading)
   */
  loading?: boolean;

  /**
   * Form element ID (native Button.form)
   */
  form?: string;

  /**
   * Button icon name (native Button.icon)
   */
  icon?: string;

  /**
   * Button right icon name (native Button.iconRight)
   */
  iconRight?: string;

  /**
   * Button alignment (native Button.alignment)
   */
  alignment?: 'center' | 'start';

  /**
   * Button icon size (native Button.iconSize)
   */
  iconSize?: '12' | '16' | '24';

  /**
   * Button link URL (native Button.href)
   */
  href?: string;

  /**
   * Link target (native Button.target)
   */
  target?: '_self' | '_blank' | '_parent' | '_top';

  /**
   * Link relationship (native Button.rel)
   */
  rel?: string;
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
