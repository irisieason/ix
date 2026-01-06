/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@irisieason/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxEventItemContent;

const meta = {
  title: 'Example/EventItemContent',
  tags: [],
  render: (args) => genericRender('ix-event-item-content', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-event-item-content', {
    // 基本信息属性
    typeIcon: {
      table: { category: 'Basic Info' }
    },
    typeHeader: {
      table: { category: 'Basic Info' }
    },
    headerInfo: {
      table: { category: 'Basic Info' }
    },
    deviceName: {
      table: { category: 'Basic Info' }
    },
    deviceInfo: {
      table: { category: 'Basic Info' }
    },
    datestamp: {
      table: { category: 'Basic Info' }
    },
    timestamp: {
      table: { category: 'Basic Info' }
    },

    // 控制属性
    showIconButton: {
      table: { category: 'Control' }
    },
    showButton: {
      table: { category: 'Control' }
    },

    // Icon Button 相关属性
    iconButtonIcon: {
      control: { type: 'select' },
      options: [
        'share', 'star', 'heart', 'warning', 'error', 'info', 'check',
        'calendar', 'download', 'upload', 'edit', 'delete', 'search',
        'settings', 'home', 'user', 'shield', 'lock', 'unlock',
        'refresh', 'sync', 'pause', 'play', 'stop', 'arrow-right',
        'arrow-left', 'chevron-up', 'chevron-down', 'plus', 'minus'
      ],
      description: 'Icon button icon name (native property)',
      table: { category: 'Icon Button' }
    },
    iconButtonVariant: {
      control: { type: 'select' },
      options: ['subtle-primary', 'subtle-secondary', 'subtle-tertiary', 'primary', 'secondary', 'tertiary', 'danger-primary', 'danger-secondary', 'danger-tertiary'],
      description: 'Icon button variant (native property)',
      table: { category: 'Icon Button' }
    },
    iconButtonDisabled: {
      control: { type: 'boolean' },
      description: 'Icon button disabled state (native property)',
      table: { category: 'Icon Button' }
    },

    // Button 相关属性
    buttonVariant: {
      table: { category: 'Button' }
    },
    buttonDisabled: {
      control: { type: 'boolean' },
      description: 'Button disabled state (native property)',
      table: { category: 'Button' }
    },
    buttonIcon: {
      control: { type: 'select' },
      options: [
        '', 'download', 'upload', 'edit', 'delete', 'search', 'settings',
        'refresh', 'sync', 'save', 'copy', 'paste', 'cut', 'print',
        'export', 'import', 'share', 'link', 'unlink', 'eye', 'eye-off',
        'lock', 'unlock', 'shield', 'key', 'wrench', 'gear', 'cog'
      ],
      description: 'Button icon name (native property)',
      table: { category: 'Button' }
    },
    buttonText: {
      table: { category: 'Button' }
    }
  }),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/sflyaWPjnf2kFJ2N7dl1hv/codeconnect-iris?node-id=7268-47393&t=3sPUTqiuquNiLdWW-4',
    },
    docs: {
      description: {
        component: 'Event Item Content component with native properties. Button text can be controlled via buttonText property or button-text slot.',
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    typeIcon: 'distribution',
    typeHeader: 'Update available',
    headerInfo: 'V2.3 › V2.5',
    deviceName: 'robo1-net-sw17',
    deviceInfo: '172.19.65.8',
    datestamp: '2026-01-05',
    timestamp: '08:51:21',
    showIconButton: true,
    showButton: true,
    iconButtonIcon: 'share',
    iconButtonVariant: 'subtle-tertiary',
    iconButtonDisabled: false,
    buttonVariant: 'primary',
    buttonDisabled: false,
    buttonIcon: undefined,
    buttonText: 'Create task'
  },
};

export const SystemError: Story = {
  args: {
    typeIcon: 'error',
    typeHeader: 'Critical System Error',
    headerInfo: 'Database connection failed',
    deviceName: 'db-server-primary',
    deviceInfo: '192.168.1.10',
    datestamp: '2026-01-05',
    timestamp: '16:22:10',
    showIconButton: true,
    showButton: true,
    iconButtonIcon: 'warning',
    iconButtonVariant: 'danger-primary',
    iconButtonDisabled: false,
    buttonVariant: 'danger-primary',
    buttonDisabled: false,
    buttonIcon: 'wrench',
    buttonText: 'Fix Issue'
  },
};

export const OnlyIconButton: Story = {
  args: {
    typeIcon: 'maintenance',
    typeHeader: 'Maintenance Scheduled',
    headerInfo: 'System will be offline',
    deviceName: 'main-server',
    deviceInfo: '10.0.0.1',
    datestamp: '2026-01-06',
    timestamp: '02:00:00',
    showIconButton: true,
    showButton: false,
    iconButtonIcon: 'calendar',
    iconButtonVariant: 'primary',
    iconButtonDisabled: false
  },
};

export const CustomButtonText: Story = {
  args: {
    typeIcon: 'download',
    typeHeader: 'Download Ready',
    headerInfo: 'Report generated successfully',
    deviceName: 'report-server',
    deviceInfo: '192.168.1.25',
    datestamp: '2026-01-05',
    timestamp: '10:30:00',
    showIconButton: true,
    showButton: true,
    iconButtonIcon: 'export',
    iconButtonVariant: 'secondary',
    iconButtonDisabled: false,
    buttonVariant: 'primary',
    buttonDisabled: false,
    buttonIcon: 'download',
    buttonText: 'Download Report'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing custom button text via buttonText property.',
      },
    },
  },
};

export const HiddenComponents: Story = {
  args: {
    typeIcon: 'info',
    typeHeader: 'Information Only',
    headerInfo: 'No actions required',
    deviceName: 'info-server',
    deviceInfo: '192.168.1.100',
    datestamp: '2026-01-05',
    timestamp: '12:00:00',
    // Test hiding components
    showIconButton: false,
    showButton: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Test showing/hiding components with showIconButton and showButton properties.',
      },
    },
  },
};
