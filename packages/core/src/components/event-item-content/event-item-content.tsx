/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-event-item-content',
  styleUrl: 'event-item-content.scss',
  shadow: true,
})
export class EventItemContent {
  /**
   * Icon name for the event type
   */
  @Prop() icon: string = 'distribution';

  /**
   * Main header text for the event type
   */
  @Prop() typeHeader: string = 'Update available';

  /**
   * Additional information for the event type
   */
  @Prop() headerInfo: string = 'V2.3 › V2.5';

  /**
   * Device name
   */
  @Prop() deviceName: string = 'robo1-net-sw17';

  /**
   * Device information (e.g., IP address)
   */
  @Prop() deviceInfo: string = '172.19.65.8';

  /**
   * Timestamp for the event
   */
  @Prop() timestamp: string = '2026-01-05, 08:51:21';

  /**
   * Show share button
   */
  @Prop() showShareButton: boolean = true;

  /**
   * Show create task button
   */
  @Prop() showCreateTaskButton: boolean = true;

  /**
   * Text for the create task button
   */
  @Prop() createTaskButtonText: string = 'Create task';

  render() {
    return (
      <Host>
        <div class="event-item-content">
          {/* Icon Column */}
          <div class="icon-column">
            <ix-icon name={this.icon} size="24"></ix-icon>
          </div>

          {/* Content */}
          <div class="content">
            {/* Type Information */}
            <div class="type-section">
              <ix-typography format="body" class="type-header">
                {this.typeHeader}
              </ix-typography>
              <ix-typography format="body" text-color="soft" class="header-info">
                {this.headerInfo}
              </ix-typography>
            </div>

            {/* Device Information */}
            <div class="device-section">
              <ix-typography format="body" class="device-name">
                {this.deviceName}
              </ix-typography>
              <ix-typography format="body" text-color="soft" class="device-info">
                {this.deviceInfo}
              </ix-typography>
            </div>

            {/* Time Information */}
            <div class="time-section">
              <ix-typography format="body" text-color="soft" class="timestamp">
                {this.timestamp}
              </ix-typography>
            </div>
          </div>

          {/* Actions Column */}
          <div class="actions-column">
            {this.showShareButton && (
              <ix-icon-button
                icon="share"
                variant="subtle-tertiary"
                size="24"
              ></ix-icon-button>
            )}
            {this.showCreateTaskButton && (
              <ix-button variant="secondary" size="small">
                {this.createTaskButtonText}
              </ix-button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
