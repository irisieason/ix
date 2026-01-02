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

type Element = Components.IxCard & {
  defaultSlot: string;
};

const meta = {
  title: 'Example/Card',
  tags: [],
  render: (args) => genericRender('ix-card', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-card', {}),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=card-component',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    defaultSlot: 'This is a basic card',
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    defaultSlot: 'This is a filled card',
    variant: 'filled',
  },
};

export const Primary: Story = {
  args: {
    defaultSlot: 'This is a primary card',
    variant: 'primary',
  },
};

export const Selected: Story = {
  args: {
    defaultSlot: 'This card is selected',
    variant: 'outline',
    selected: true,
  },
};

