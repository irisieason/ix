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

type Element = Components.IxCustomCard;

const meta = {
  title: 'Example/CustomCard',
  tags: [],
  render: (args) => genericRender('ix-custom-card', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-custom-card', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/28KqFfu4KzvQolti3h88L5/AI-iiot-server?node-id=6880-17567&t=bx9JKKGAyOgQUed3-4',
    },
    docs: {
      description: {
        component: `
Custom Card component with responsive design that adapts to different screen sizes:

**Responsive Breakpoints:**
- Mobile (≤768px): 100% width, min 320px, auto height (min 280px)
- Tablet (769-1024px): 420×300px
- Desktop (1025-1440px): 474×332px (original design)
- Large Desktop (≥1441px): 520×360px

**Features:**
- Device status chart with stacked bar visualization
- Navigation buttons, axis labels, legend
- Exposes Card base properties (variant, selected, passive)
- Dark theme optimized
        `,
      },
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    variant: 'outline',
    selected: false,
    passive: false,
    cardTitle: 'Device status',
    yAxisLabel: 'IP Range',
    xAxisLabel: 'Device',
    data: JSON.stringify({
      '10.x': { online: 60, maintenance: 0, error: 0, offline: 0 },
      '192.x': { online: 250, maintenance: 0, error: 26, offline: 15 },
      '172.x': { online: 180, maintenance: 49, error: 0, offline: 0 }
    })
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    selected: true,
  },
};

export const Passive: Story = {
  args: {
    ...Default.args,
    passive: true,
  },
};

export const FilledVariant: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
};

export const PrimaryVariant: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const CustomLabels: Story = {
  args: {
    cardTitle: '服务器状态',
    yAxisLabel: '服务器类型',
    xAxisLabel: '数量',
    variant: 'outline',
    selected: false,
    passive: false,
    data: JSON.stringify({
      'Web服务器': { online: 15, maintenance: 2, error: 1, offline: 0 },
      '数据库服务器': { online: 8, maintenance: 1, error: 0, offline: 1 },
      '缓存服务器': { online: 12, maintenance: 0, error: 0, offline: 0 }
    })
  },
};

export const ResponsiveDemo: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        largeDesktop: {
          name: 'Large Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    docs: {
      description: {
        story: 'Use the viewport controls in Storybook to test responsive behavior across different screen sizes.',
      },
    },
  },
};
