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

type Element = Components.IxStatusHistoryChart;

const meta = {
  title: 'Example/StatusHistoryChart',
  tags: [],
  render: (args) => genericRender('ix-status-history-chart', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-status-history-chart', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/28KqFfu4KzvQolti3h88L5/AI-iiot-server?node-id=7116-17728&t=bx9JKKGAyOgQUed3-4',
    },
    docs: {
      description: {
        component: `
Status History Chart component displays a line chart showing the trend of different status types over time.

**Features:**
- Dynamic size: 674×332px optimized for trend visualization
- Multi-line chart with four status types (Online, Maintenance, Error, Offline)
- SVG-based rendering for crisp graphics
- Support for negative values (Y-axis range: -100 to 10)
- Auto-generated grid system with time-based X-axis
- Navigation buttons in header
- Color-coded legend with status indicators

**Status Types:**
- **Online** (Green #01d65a): Positive trend values
- **Maintenance** (Yellow #ffd732): Planned maintenance periods
- **Error** (Red #ff2640): Error occurrences
- **Offline** (Orange #ff9000): System downtime

**Data Format:**
\`\`\`json
{
  "TimeLabel1": { "online": 10, "maintenance": 0, "error": -5, "offline": -100 },
  "TimeLabel2": { "online": 5, "maintenance": -10, "error": -15, "offline": -40 }
}
\`\`\`

**Y-Axis Range:** -100 (worst) to +10 (best)
**Time Labels:** Any string (Jan, Q1, Week 1, etc.)

This component is designed to show status trends over time and works best within ix-card-content.
        `,
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    chartTitle: 'Status history',
    data: JSON.stringify({
      'Jan': { online: 10, maintenance: 0, error: 0, offline: -100 },
      'Feb': { online: 5, maintenance: -5, error: 0, offline: -40 },
      'Mar': { online: -10, maintenance: -60, error: -20, offline: -40 },
      'Apr': { online: -25, maintenance: -40, error: -25, offline: -80 },
      'May': { online: 0, maintenance: 0, error: 0, offline: -40 },
      'Jun': { online: 0, maintenance: 0, error: 0, offline: -40 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Default status history chart showing monthly trends with mixed positive and negative values.',
      },
    },
  },
};

export const QuarterlyTrends: Story = {
  args: {
    chartTitle: 'Quarterly Network Status',
    data: JSON.stringify({
      'Q1 2024': { online: 15, maintenance: -10, error: -5, offline: -80 },
      'Q2 2024': { online: 8, maintenance: -20, error: -15, offline: -60 },
      'Q3 2024': { online: -5, maintenance: -35, error: -30, offline: -45 },
      'Q4 2024': { online: 5, maintenance: -15, error: -10, offline: -70 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Quarterly view showing longer-term trends with clear seasonal patterns.',
      },
    },
  },
};

export const WeeklyMonitoring: Story = {
  args: {
    chartTitle: 'Weekly System Performance',
    data: JSON.stringify({
      'Week 1': { online: 20, maintenance: 0, error: -2, offline: -90 },
      'Week 2': { online: 12, maintenance: -8, error: -8, offline: -65 },
      'Week 3': { online: 0, maintenance: -25, error: -20, offline: -50 },
      'Week 4': { online: 8, maintenance: -12, error: -5, offline: -75 },
      'Week 5': { online: 15, maintenance: -5, error: -3, offline: -85 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Weekly monitoring data showing short-term fluctuations and recovery patterns.',
      },
    },
  },
};

export const ServerRecovery: Story = {
  args: {
    chartTitle: 'Server Recovery Timeline',
    data: JSON.stringify({
      '00:00': { online: -50, maintenance: 0, error: -80, offline: -100 },
      '06:00': { online: -30, maintenance: -20, error: -60, offline: -90 },
      '12:00': { online: -10, maintenance: -40, error: -30, offline: -70 },
      '18:00': { online: 5, maintenance: -20, error: -10, offline: -50 },
      '24:00': { online: 10, maintenance: -5, error: -2, offline: -30 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Hourly recovery timeline showing system restoration after an incident.',
      },
    },
  },
};

export const MaintenanceWindow: Story = {
  args: {
    chartTitle: 'Planned Maintenance Impact',
    data: JSON.stringify({
      'Pre-Maintenance': { online: 8, maintenance: 0, error: -2, offline: -20 },
      'Maintenance Start': { online: -20, maintenance: -60, error: 0, offline: -80 },
      'Mid-Maintenance': { online: -40, maintenance: -80, error: -5, offline: -90 },
      'Maintenance End': { online: -10, maintenance: -30, error: 0, offline: -50 },
      'Post-Maintenance': { online: 10, maintenance: 0, error: 0, offline: -15 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Maintenance window timeline showing planned downtime and recovery phases.',
      },
    },
  },
};

export const CriticalIncident: Story = {
  args: {
    chartTitle: 'Critical Incident Response',
    data: JSON.stringify({
      'Normal': { online: 5, maintenance: 0, error: -5, offline: -30 },
      'Incident': { online: -60, maintenance: 0, error: -90, offline: -100 },
      'Response': { online: -40, maintenance: -20, error: -70, offline: -95 },
      'Recovery': { online: -10, maintenance: -40, error: -30, offline: -60 },
      'Resolved': { online: 8, maintenance: -10, error: -5, offline: -25 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical incident timeline showing impact, response, and recovery phases.',
      },
    },
  },
};

export const ChineseLabels: Story = {
  args: {
    chartTitle: '系统状态历史',
    data: JSON.stringify({
      '一月': { online: 10, maintenance: 0, error: -5, offline: -80 },
      '二月': { online: 5, maintenance: -10, error: -8, offline: -60 },
      '三月': { online: -5, maintenance: -30, error: -20, offline: -50 },
      '四月': { online: 0, maintenance: -20, error: -10, offline: -70 },
      '五月': { online: 8, maintenance: -5, error: -3, offline: -40 },
      '六月': { online: 12, maintenance: 0, error: -2, offline: -35 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Chinese labels example showing internationalization support.',
      },
    },
  },
};

export const MinimalData: Story = {
  args: {
    chartTitle: 'Simple Trend',
    data: JSON.stringify({
      'Start': { online: 0, maintenance: 0, error: 0, offline: -50 },
      'End': { online: 5, maintenance: -5, error: -2, offline: -30 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal data example with only two time points to test basic line rendering.',
      },
    },
  },
};

export const ExtendedTimeline: Story = {
  args: {
    chartTitle: 'Extended Performance Timeline',
    data: JSON.stringify({
      'Jan': { online: 10, maintenance: 0, error: 0, offline: -100 },
      'Feb': { online: 5, maintenance: -5, error: 0, offline: -40 },
      'Mar': { online: -10, maintenance: -60, error: -20, offline: -40 },
      'Apr': { online: -25, maintenance: -40, error: -25, offline: -80 },
      'May': { online: 0, maintenance: 0, error: 0, offline: -40 },
      'Jun': { online: 0, maintenance: 0, error: 0, offline: -40 },
      'Jul': { online: 5, maintenance: -10, error: -5, offline: -50 },
      'Aug': { online: 8, maintenance: -5, error: -3, offline: -45 },
      'Sep': { online: 3, maintenance: -15, error: -8, offline: -55 },
      'Oct': { online: -5, maintenance: -25, error: -15, offline: -65 },
      'Nov': { online: 2, maintenance: -8, error: -5, offline: -48 },
      'Dec': { online: 7, maintenance: -3, error: -2, offline: -42 }
    })
  },
  parameters: {
    docs: {
      description: {
        story: 'Full year timeline showing how the chart handles many data points.',
      },
    },
  },
};

export const InCard: Story = {
  args: {
    chartTitle: 'Status History Trends',
    data: JSON.stringify({
      'Q1': { online: 15, maintenance: -10, error: -5, offline: -80 },
      'Q2': { online: 8, maintenance: -20, error: -15, offline: -60 },
      'Q3': { online: -5, maintenance: -35, error: -30, offline: -45 },
      'Q4': { online: 5, maintenance: -15, error: -10, offline: -70 }
    })
  },
  render: (args) => {
    const cardElement = document.createElement('ix-card');
    cardElement.setAttribute('variant', 'outline');
    cardElement.style.width = '700px';

    const cardContent = document.createElement('ix-card-content');

    const chartElement = document.createElement('ix-status-history-chart');
    Object.keys(args).forEach(key => {
      if (key !== 'styles' && key !== 'defaultSlot' && key !== 'previewWidth') {
        const value = (args as any)[key];
        if (value !== undefined) {
          chartElement.setAttribute(key, String(value));
        }
      }
    });

    cardContent.appendChild(chartElement);
    cardElement.appendChild(cardContent);

    const container = document.createElement('div');
    container.appendChild(cardElement);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Status history chart displayed within an ix-card with ix-card-content for proper layout.',
      },
    },
  },
};
