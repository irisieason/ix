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

type Element = Components.IxDeviceStatusChart;

const meta = {
  title: 'Example/DeviceStatusChart',
  tags: [],
  render: (args) => genericRender('ix-device-status-chart', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-device-status-chart', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/28KqFfu4KzvQolti3h88L5/AI-iiot-server?node-id=6951-18123&t=bx9JKKGAyOgQUed3-4',
    },
    docs: {
      description: {
        component: `
Device Status Chart component displays a dynamic horizontal bar chart showing device status across different categories.

**Features:**
- Dynamic size: 474×332px base size with responsive height
- Dynamic horizontal bars representing any number of categories
- Color-coded status indicators (Online: Green, Maintenance: Yellow, Error: Red, Offline: Orange)
- Auto-generated grid system with dynamic X-axis and Y-axis scales
- Navigation buttons in header
- Legend with color indicators

**Dynamic Features:**
- Y-axis labels are generated from data keys
- X-axis scale is auto-calculated based on data values
- Grid lines adjust to match scale
- Supports any number of categories
- Auto-scaling bar widths based on values

**Data Format:**
\`\`\`json
{
  "Category1": { "online": 60, "maintenance": 10, "error": 5, "offline": 2 },
  "Category2": { "online": 120, "maintenance": 15, "error": 8, "offline": 3 }
}
\`\`\`

This component is designed to be used within ix-card-content or standalone.
        `,
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    chartTitle: 'Device status',
    yAxisLabel: 'IP Range',
    xAxisLabel: 'Device',
    data: JSON.stringify({
      '10.x': { online: 60, maintenance: 0, error: 0, offline: 0 },
      '192.x': { online: 250, maintenance: 0, error: 26, offline: 15 },
      '172.x': { online: 180, maintenance: 49, error: 0, offline: 0 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Default device status chart with systematic bar rendering approach.',
      },
    },
  },
};

export const MultipleRanges: Story = {
  args: {
    chartTitle: 'Network Status - 5 Ranges',
    yAxisLabel: 'Network Range',
    xAxisLabel: 'Device Count',
    data: JSON.stringify({
      '10.x': { online: 30, maintenance: 5, error: 2, offline: 1 },
      '192.x': { online: 120, maintenance: 15, error: 8, offline: 3 },
      '172.x': { online: 80, maintenance: 10, error: 5, offline: 2 },
      '203.x': { online: 45, maintenance: 8, error: 3, offline: 1 },
      '169.x': { online: 25, maintenance: 3, error: 1, offline: 0 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with 5 different IP ranges showing dynamic Y-axis generation.',
      },
    },
  },
};

export const ServerTypes: Story = {
  args: {
    chartTitle: 'Server Status',
    yAxisLabel: 'Server Type',
    xAxisLabel: 'Count',
    data: JSON.stringify({
      'Web Servers': { online: 15, maintenance: 2, error: 1, offline: 0 },
      'Database Servers': { online: 8, maintenance: 1, error: 0, offline: 1 },
      'Cache Servers': { online: 12, maintenance: 0, error: 0, offline: 0 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Example using server types instead of IP ranges.',
      },
    },
  },
};

export const HighVolumeData: Story = {
  args: {
    chartTitle: 'Regional Status',
    yAxisLabel: 'Region',
    xAxisLabel: 'Device Count',
    maxValue: 3000,
    data: JSON.stringify({
      'Region A': { online: 1500, maintenance: 200, error: 50, offline: 25 },
      'Region B': { online: 2200, maintenance: 150, error: 75, offline: 30 },
      'Region C': { online: 1800, maintenance: 300, error: 100, offline: 45 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with large numbers and fixed maxValue for consistent scaling.',
      },
    },
  },
};

export const MinimalData: Story = {
  args: {
    chartTitle: 'Small Scale Status',
    yAxisLabel: 'System',
    xAxisLabel: 'Count',
    data: JSON.stringify({
      'System A': { online: 5, maintenance: 1, error: 0, offline: 0 },
      'System B': { online: 8, maintenance: 2, error: 1, offline: 0 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with minimal data values to test small bar rendering and auto-scaling.',
      },
    },
  },
};

export const ChineseLabels: Story = {
  args: {
    chartTitle: '设备状态',
    yAxisLabel: 'IP 范围',
    xAxisLabel: '设备数量',
    data: JSON.stringify({
      '办公网络': { online: 60, maintenance: 5, error: 2, offline: 1 },
      '生产网络': { online: 250, maintenance: 20, error: 10, offline: 5 },
      '测试网络': { online: 80, maintenance: 15, error: 3, offline: 1 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with Chinese labels to test internationalization and dynamic categories.',
      },
    },
  },
};

export const SingleCategory: Story = {
  args: {
    chartTitle: 'Single System Status',
    yAxisLabel: 'System',
    xAxisLabel: 'Device Count',
    data: JSON.stringify({
      'Main System': { online: 150, maintenance: 25, error: 10, offline: 5 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with only one category to test single-row rendering.',
      },
    },
  },
};
