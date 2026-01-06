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
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxEventItemContent & {
  defaultSlot: string;
};

// Custom render function for EventItemContent to handle complex object properties
const renderEventItemContent = (args: any) => {
  const element = document.createElement('ix-event-item-content');

  // Set all properties, handling complex objects specially
  Object.keys(args).forEach(key => {
    if (key === 'instance') {
      // Set complex object property directly on the element
      (element as any).instance = args[key];
    } else if (key === 'defaultSlot') {
      // Handle defaultSlot as slot content
      if (args[key]) {
        const slotElement = document.createElement('span');
        slotElement.setAttribute('slot', 'button-text');
        slotElement.textContent = args[key];
        element.appendChild(slotElement);
      }
    } else if (typeof args[key] === 'boolean') {
      // Set boolean attributes only if true
      if (args[key]) {
        element.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), 'true');
      }
    } else if (args[key] !== undefined && args[key] !== null) {
      // Set other properties as attributes with kebab-case conversion
      element.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(args[key]));
    }
  });

  const container = document.createElement('div');
  container.style.width = '800px';
  container.style.border = '1px solid #ccc';
  container.style.padding = '10px';
  container.appendChild(element);

  return container;
};

const meta = {
  title: 'Example/EventItemContent',
  tags: [],
  render: renderEventItemContent,
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-event-item-content', {
    typeIcon: {
      control: {
        type: 'select'
      },
      options: [
        'distribution',
        'error',
        'warning',
        'info',
        'check',
        'network',
        'download',
        'maintenance',
        'security',
        'thermometer',
        'processing',
        'calendar',
        'shield',
        'export',
        'share',
        'clock',
        'sync',
        'battery',
        'power',
        'wifi',
        'ethernet',
        'pause',
        'report'
      ],
      description: 'Icon name for the event type'
    },
    // ShareIconButton directory - ix-icon-button native properties (directly exposed)
    iconButtonA11yLabel: {
      control: { type: 'text' },
      description: 'ARIA label for icon button (native IconButton.a11yLabel)',
      table: { category: 'ShareIconButton' }
    },
    iconButtonVariant: {
      control: {
        type: 'select'
      },
      options: ['subtle-primary', 'subtle-secondary', 'subtle-tertiary', 'primary', 'secondary', 'tertiary', 'danger-primary', 'danger-secondary', 'danger-tertiary'],
      description: 'IconButton variant (native IconButton.variant)',
      table: { category: 'ShareIconButton' }
    },
    oval: {
      control: { type: 'boolean' },
      description: 'Button in oval shape (native IconButton.oval)',
      table: { category: 'ShareIconButton' }
    },
    iconButtonIcon: {
      control: { type: 'text' },
      description: 'Icon name (native IconButton.icon)',
      table: { category: 'ShareIconButton' }
    },
    iconButtonSize: {
      control: {
        type: 'select'
      },
      options: ['24', '16', '12'],
      description: 'Size of icon in button (native IconButton.size)',
      table: { category: 'ShareIconButton' }
    },
    iconColor: {
      control: { type: 'text' },
      description: 'Color of icon in button (native IconButton.iconColor)',
      table: { category: 'ShareIconButton' }
    },
    iconButtonDisabled: {
      control: { type: 'boolean' },
      description: 'IconButton disabled state (native IconButton.disabled)',
      table: { category: 'ShareIconButton' }
    },
    iconButtonType: {
      control: {
        type: 'select'
      },
      options: ['button', 'submit'],
      description: 'Type of the button (native IconButton.type)',
      table: { category: 'ShareIconButton' }
    },
    iconButtonLoading: {
      control: { type: 'boolean' },
      description: 'IconButton loading state (native IconButton.loading)',
      table: { category: 'ShareIconButton' }
    },
    // Button directory - ix-button native properties
    ariaLabelButton: {
      control: { type: 'text' },
      description: 'ARIA label for button (native Button.ariaLabelButton)',
      table: { category: 'Button' }
    },
    buttonVariant: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'tertiary', 'subtle-primary', 'subtle-secondary', 'subtle-tertiary', 'danger-primary', 'danger-secondary', 'danger-tertiary'],
      description: 'Button variant (native Button.variant)',
      table: { category: 'Button' }
    },
    buttonDisabled: {
      control: { type: 'boolean' },
      description: 'Button disabled state (native Button.disabled)',
      table: { category: 'Button' }
    },
    buttonType: {
      control: {
        type: 'select'
      },
      options: ['button', 'submit'],
      description: 'Button type (native Button.type)',
      table: { category: 'Button' }
    },
    buttonLoading: {
      control: { type: 'boolean' },
      description: 'Button loading state (native Button.loading)',
      table: { category: 'Button' }
    },
    form: {
      control: { type: 'text' },
      description: 'Form element ID (native Button.form)',
      table: { category: 'Button' }
    },
    buttonIcon: {
      control: { type: 'text' },
      description: 'Button icon name (native Button.icon)',
      table: { category: 'Button' }
    },
    iconRight: {
      control: { type: 'text' },
      description: 'Button right icon name (native Button.iconRight)',
      table: { category: 'Button' }
    },
    alignment: {
      control: {
        type: 'select'
      },
      options: ['center', 'start'],
      description: 'Button alignment (native Button.alignment)',
      table: { category: 'Button' }
    },
    iconSize: {
      control: {
        type: 'select'
      },
      options: ['12', '16', '24'],
      description: 'Button icon size (native Button.iconSize)',
      table: { category: 'Button' }
    },
    href: {
      control: { type: 'text' },
      description: 'Button link URL (native Button.href)',
      table: { category: 'Button' }
    },
    target: {
      control: {
        type: 'select'
      },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Link target (native Button.target)',
      table: { category: 'Button' }
    },
    rel: {
      control: { type: 'text' },
      description: 'Link relationship (native Button.rel)',
      table: { category: 'Button' }
    },
    defaultSlot: {
      control: { type: 'text' },
      description: 'Button text content (slot content)',
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
        component: 'Event Item Content component provides a structured layout for displaying event information within event list items. Features include icon column, type section, device section, timestamp display, and action buttons. Button uses ix-button defaults, text content controlled via slot.',
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
    // ShareIconButton directory - using IconButton native property structure
    iconButtonVariant: 'subtle-tertiary',
    oval: false,
    iconButtonIcon: 'share',
    iconButtonSize: '24',
    iconColor: undefined,
    iconButtonDisabled: false,
    iconButtonType: 'button',
    iconButtonLoading: false,
    // Button directory - ix-button native properties
    ariaLabelButton: 'Create task button',
    buttonVariant: 'primary',
    buttonDisabled: false,
    buttonType: 'button',
    buttonLoading: false,
    form: undefined,
    buttonIcon: undefined,
    iconRight: undefined,
    alignment: 'center',
    iconSize: '24',
    href: undefined,
    target: '_self',
    rel: undefined,
    defaultSlot: 'Create task'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default event item content with standard update information.',
      },
    },
  },
};

export const SimpleTest: Story = {
  args: {
    typeIcon: 'info',
    typeHeader: 'Test Event',
    headerInfo: 'Test Info',
    deviceName: 'test-device',
    deviceInfo: 'test-info',
    datestamp: '2026-01-05',
    timestamp: '12:00:00',
    defaultSlot: 'Test Button',
    buttonVariant: 'secondary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple test to verify component rendering.',
      },
    },
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
    // ShareIconButton directory
    iconButtonVariant: 'subtle-tertiary',
    oval: false,
    iconButtonIcon: 'share',
    iconButtonSize: '24',
    iconButtonDisabled: false,
    iconButtonType: 'button',
    iconButtonLoading: false,
    // Button directory
    defaultSlot: 'Investigate',
    buttonVariant: 'danger-primary',
    ariaLabelButton: 'Investigate error button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical error event with error icon and descriptive information.',
      },
    },
  },
};
