/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-event-item-content',
  styleUrl: 'event-item-content.scss',
  shadow: true,
})
export class EventItemContent {
  @Element() hostElement!: HTMLIxEventItemContentElement;

  @Prop() typeIcon: string = 'distribution';
  @Prop() typeHeader: string = 'Update available';
  @Prop() headerInfo: string = 'V2.3 › V2.5';
  @Prop() deviceName: string = 'robo1-net-sw17';
  @Prop() deviceInfo: string = '172.19.65.8';
  @Prop() datestamp: string = '2026-01-05';
  @Prop() timestamp: string = '08:51:21';

  // Control visibility
  @Prop() showIconButton: boolean = true;
  @Prop() showButton: boolean = true;

  // Icon Button Properties (完全对应原生属性)
  @Prop() iconButtonIcon?: string = 'share';
  @Prop() iconButtonVariant: 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary' = 'subtle-tertiary';
  @Prop() iconButtonDisabled: boolean = false;

  // Button Properties (完全对应原生属性)
  @Prop() buttonVariant: 'primary' | 'secondary' | 'tertiary' | 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary' = 'primary';
  @Prop() buttonDisabled: boolean = false;
  @Prop() buttonIcon?: string;

  // Button text content (便利属性，控制默认slot内容)
  @Prop() buttonText: string = 'Create task';

  render() {
    return (
      <Host>
        <div class="event-item-content">
          {/* Icon Column */}
          <div class="icon-column">
            <ix-icon name={this.typeIcon} size="24"></ix-icon>
          </div>

          {/* Content */}
          <div class="content">
            {/* Type Section */}
            <div class="type-section">
              <ix-typography format="label" text-color="std">
                {this.typeHeader}
              </ix-typography>
              <ix-typography format="body" text-color="soft">
                {this.headerInfo}
              </ix-typography>
            </div>

            {/* Device Section */}
            <div class="device-section">
              <ix-typography format="label" text-color="std">
                {this.deviceName}
              </ix-typography>
              <ix-typography format="body" text-color="soft">
                {this.deviceInfo}
              </ix-typography>
            </div>

            {/* Time Section */}
            <div class="time-section">
              <ix-typography format="label" text-color="std">
                {this.datestamp}
              </ix-typography>
              <ix-typography format="body" text-color="soft">
                {this.timestamp}
              </ix-typography>
            </div>
          </div>

          {/* Actions Column */}
          <div class="actions-column">
            {/* Icon Button - 混合方式：slot + 默认子组件 */}
            <slot name="icon-button">
              {this.showIconButton && (
                <ix-icon-button
                  icon={this.iconButtonIcon}
                  variant={this.iconButtonVariant}
                  disabled={this.iconButtonDisabled}
                ></ix-icon-button>
              )}
            </slot>

            {/* Button - 混合方式：slot + 默认子组件 */}
            <slot name="button">
              {this.showButton && (
                <ix-button
                  variant={this.buttonVariant}
                  disabled={this.buttonDisabled}
                  icon={this.buttonIcon}
                >
                  <slot name="button-text">{this.buttonText}</slot>
                </ix-button>
              )}
            </slot>

            {/* Additional actions slot */}
            <slot name="additional-actions"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
