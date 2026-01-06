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

  // Button text content comes from slot, no custom property needed

  // Button directory - ix-button native properties
  @Prop({ reflect: true }) ariaLabelButton?: string;
  @Prop({ reflect: true }) buttonVariant: 'primary' | 'secondary' | 'tertiary' | 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary' = 'primary';
  @Prop({ reflect: true }) buttonDisabled: boolean = false;
  @Prop({ reflect: true }) buttonType: 'button' | 'submit' = 'button';
  @Prop({ reflect: true }) buttonLoading: boolean = false;
  @Prop({ reflect: true }) form?: string;
  @Prop({ reflect: true }) buttonIcon?: string;
  @Prop({ reflect: true }) iconRight?: string;
  @Prop({ reflect: true }) alignment: 'center' | 'start' = 'center';
  @Prop({ reflect: true }) iconSize: '12' | '16' | '24' = '24';
  @Prop({ reflect: true }) href?: string;
  @Prop({ reflect: true }) target?: '_self' | '_blank' | '_parent' | '_top' = '_self';
  @Prop({ reflect: true }) rel?: string;

  // ShareIconButton directory - ix-icon-button native properties (directly exposed)
  @Prop({ reflect: true }) iconButtonA11yLabel?: string;
  @Prop({ reflect: true }) iconButtonVariant: 'subtle-primary' | 'subtle-secondary' | 'subtle-tertiary' | 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary' = 'subtle-tertiary';
  @Prop({ reflect: true }) oval: boolean = false;
  @Prop({ reflect: true }) iconButtonIcon?: string = 'share';
  @Prop({ reflect: true }) iconButtonSize: '24' | '16' | '12' = '24';
  @Prop({ reflect: true }) iconColor?: string;
  @Prop({ reflect: true }) iconButtonDisabled: boolean = false;
  @Prop({ reflect: true }) iconButtonType: 'button' | 'submit' = 'button';
  @Prop({ reflect: true }) iconButtonLoading: boolean = false;

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
            <ix-icon-button
              a11yLabel={this.iconButtonA11yLabel}
              icon={this.iconButtonIcon}
              variant={this.iconButtonVariant}
              oval={this.oval}
              size={this.iconButtonSize}
              iconColor={this.iconColor}
              disabled={this.iconButtonDisabled}
              type={this.iconButtonType}
              loading={this.iconButtonLoading}
            ></ix-icon-button>

            <ix-button
              ariaLabelButton={this.ariaLabelButton}
              variant={this.buttonVariant}
              disabled={this.buttonDisabled}
              type={this.buttonType}
              loading={this.buttonLoading}
              form={this.form}
              icon={this.buttonIcon}
              iconRight={this.iconRight}
              alignment={this.alignment}
              iconSize={this.iconSize}
              href={this.href}
              target={this.target}
              rel={this.rel}
            >
              <slot name="button-text">Create task</slot>
            </ix-button>
          </div>
        </div>
      </Host>
    );
  }
}
