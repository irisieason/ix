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
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-event-item-content', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/sflyaWPjnf2kFJ2N7dl1hv/codeconnect-iris?node-id=7268-47393&t=3sPUTqiuquNiLdWW-4',
    },
    docs: {
      description: {
        component: `
Event Item Content component provides a structured layout for displaying event information within event list items.

**Features:**
- Icon column for event type visualization
- Type section with header and additional info
- Device section with name and identifier
- Timestamp display
- Action buttons (share and create task)
- Responsive design with text overflow handling

**Layout Structure:**
- **Icon Column**: Event type icon (24px)
- **Type Section**: Event title and details (240px width)
- **Device Section**: Device name and info (240px width)
- **Time Section**: Timestamp (flexible width)
- **Actions Column**: Share and task buttons

**Design System:**
- Uses Siemens iX color tokens
- Typography follows ix-typography component
- Consistent spacing with design system variables
- Support for light and dark themes

This component is designed to be used within ix-event-list-item for optimal integration.
        `,
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    icon: 'distribution',
    typeHeader: 'Update available',
    headerInfo: 'V2.3 › V2.5',
    deviceName: 'robo1-net-sw17',
    deviceInfo: '172.19.65.8',
    timestamp: '2026-01-05, 08:51:21',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Create task'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default event item content with standard update information.',
      },
    },
  },
};

export const SystemError: Story = {
  args: {
    icon: 'error',
    typeHeader: 'Critical System Error',
    headerInfo: 'Database connection failed',
    deviceName: 'db-server-primary',
    deviceInfo: '192.168.1.10',
    timestamp: '2026-01-05, 16:22:10',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Create task'
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical error event with error icon and descriptive information.',
      },
    },
  },
};

export const NetworkEvent: Story = {
  args: {
    icon: 'network',
    typeHeader: 'Connection Lost',
    headerInfo: 'Timeout after 30 seconds',
    deviceName: 'switch-core-01',
    deviceInfo: '10.0.1.1',
    timestamp: '2026-01-05, 12:45:30',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Investigate'
  },
  parameters: {
    docs: {
      description: {
        story: 'Network connectivity event with network icon and timeout information.',
      },
    },
  },
};

export const MaintenanceEvent: Story = {
  args: {
    icon: 'maintenance',
    typeHeader: 'Maintenance Required',
    headerInfo: 'Scheduled maintenance',
    deviceName: 'pump-station-03',
    deviceInfo: '10.1.5.23',
    timestamp: '2026-01-06, 02:00:00',
    showShareButton: false,
    showCreateTaskButton: true,
    createTaskButtonText: 'Schedule'
  },
  parameters: {
    docs: {
      description: {
        story: 'Maintenance event with custom button text and hidden share button.',
      },
    },
  },
};

export const SecurityAlert: Story = {
  args: {
    icon: 'security',
    typeHeader: 'Security Alert',
    headerInfo: 'Unauthorized access attempt',
    deviceName: 'firewall-dmz',
    deviceInfo: '203.0.113.10',
    timestamp: '2026-01-05, 18:45:12',
    showShareButton: true,
    showCreateTaskButton: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Security event with share button only, no task creation.',
      },
    },
  },
};

export const SoftwareUpdate: Story = {
  args: {
    icon: 'download',
    typeHeader: 'Update Available',
    headerInfo: 'v3.1.0 › v3.2.0',
    deviceName: 'firmware-controller',
    deviceInfo: '172.16.0.50',
    timestamp: '2026-01-05, 09:15:45',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Install'
  },
  parameters: {
    docs: {
      description: {
        story: 'Software update event with version information and install action.',
      },
    },
  },
};

export const IoTSensorEvent: Story = {
  args: {
    icon: 'thermometer',
    typeHeader: 'Temperature Alert',
    headerInfo: '85°C detected',
    deviceName: 'temp-sensor-room-a',
    deviceInfo: '10.0.2.15',
    timestamp: '2026-01-05, 15:45:33',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Investigate'
  },
  parameters: {
    docs: {
      description: {
        story: 'IoT sensor event with temperature alert and investigation action.',
      },
    },
  },
};

export const LongText: Story = {
  args: {
    icon: 'warning',
    typeHeader: 'Very Long Event Title That Should Be Truncated',
    headerInfo: 'This is a very long description that should also be truncated when it exceeds the available space',
    deviceName: 'very-long-device-name-that-should-be-truncated',
    deviceInfo: 'very.long.domain.name.that.should.be.truncated.example.com',
    timestamp: '2026-01-05, 23:59:59',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Very Long Button Text'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with long text content to demonstrate text truncation behavior.',
      },
    },
  },
};

export const MinimalButtons: Story = {
  args: {
    icon: 'info',
    typeHeader: 'Information',
    headerInfo: 'System status update',
    deviceName: 'info-service',
    deviceInfo: 'localhost',
    timestamp: '2026-01-05, 12:00:00',
    showShareButton: false,
    showCreateTaskButton: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Event item with no action buttons for read-only information.',
      },
    },
  },
};

export const InEventList: Story = {
  args: {
    icon: 'check',
    typeHeader: 'Backup Completed',
    headerInfo: 'Full system backup',
    deviceName: 'backup-server',
    deviceInfo: '10.1.0.50',
    timestamp: '2026-01-05, 03:30:15',
    showShareButton: true,
    showCreateTaskButton: true,
    createTaskButtonText: 'Verify'
  },
  render: (args) => {
    const eventList = document.createElement('ix-event-list');
    eventList.setAttribute('item-height', 'L');
    eventList.style.width = '800px';

    const eventListItem = document.createElement('ix-event-list-item');
    eventListItem.setAttribute('item-color', 'color-success');

    const eventItemContent = document.createElement('ix-event-item-content');
    Object.keys(args).forEach(key => {
      if (key !== 'styles' && key !== 'defaultSlot' && key !== 'previewWidth') {
        const value = (args as any)[key];
        if (value !== undefined) {
          eventItemContent.setAttribute(key, String(value));
        }
      }
    });

    eventListItem.appendChild(eventItemContent);
    eventList.appendChild(eventListItem);

    const container = document.createElement('div');
    container.appendChild(eventList);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Event item content displayed within an event list with proper styling.',
      },
    },
  },
};

export const MultipleEvents: Story = {
  render: () => {
    const eventList = document.createElement('ix-event-list');
    eventList.setAttribute('item-height', 'L');
    eventList.setAttribute('animated', 'true');
    eventList.style.width = '900px';

    const events = [
      {
        color: 'color-alarm',
        icon: 'error',
        typeHeader: 'Critical Error',
        headerInfo: 'System failure detected',
        deviceName: 'main-server',
        deviceInfo: '192.168.1.10',
        timestamp: '2026-01-05, 16:22:10'
      },
      {
        color: 'color-warning',
        icon: 'warning',
        typeHeader: 'High CPU Usage',
        headerInfo: 'Usage at 85%',
        deviceName: 'app-server-01',
        deviceInfo: '10.0.1.25',
        timestamp: '2026-01-05, 15:45:33'
      },
      {
        color: 'color-info',
        icon: 'info',
        typeHeader: 'Maintenance Window',
        headerInfo: 'Scheduled for tonight',
        deviceName: 'load-balancer',
        deviceInfo: '172.16.0.1',
        timestamp: '2026-01-06, 02:00:00'
      },
      {
        color: 'color-success',
        icon: 'check',
        typeHeader: 'Backup Completed',
        headerInfo: 'Full system backup',
        deviceName: 'backup-server',
        deviceInfo: '10.1.0.50',
        timestamp: '2026-01-05, 03:30:15'
      }
    ];

    events.forEach(event => {
      const eventListItem = document.createElement('ix-event-list-item');
      eventListItem.setAttribute('item-color', event.color);

      const eventItemContent = document.createElement('ix-event-item-content');
      eventItemContent.setAttribute('icon', event.icon);
      eventItemContent.setAttribute('type-header', event.typeHeader);
      eventItemContent.setAttribute('header-info', event.headerInfo);
      eventItemContent.setAttribute('device-name', event.deviceName);
      eventItemContent.setAttribute('device-info', event.deviceInfo);
      eventItemContent.setAttribute('timestamp', event.timestamp);

      eventListItem.appendChild(eventItemContent);
      eventList.appendChild(eventListItem);
    });

    const container = document.createElement('div');
    container.appendChild(eventList);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple event items with different severity levels and color coding.',
      },
    },
  },
};
