/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@irisieason/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';
import { action } from 'storybook/actions';

type Element = Components.IxIconButton & {
  styles?: Record<string, string>;
};

const meta = {
  title: 'Example/Icon Button',
  tags: [],
  render: (args) => genericRender('ix-icon-button', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-icon-button', {
    styles: {
      control: { type: 'object' },
    },
  }),
  args: {
    icon: 'star',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Primary: Story = {
  args: {
    icon: 'star',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: 'heart',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    icon: 'settings',
    variant: 'tertiary',
  },
};

export const SubtlePrimary: Story = {
  args: {
    icon: 'home',
    variant: 'subtle-primary',
  },
};

export const SubtleSecondary: Story = {
  args: {
    icon: 'user',
    variant: 'subtle-secondary',
  },
};

export const SubtleTertiary: Story = {
  args: {
    icon: 'search',
    variant: 'subtle-tertiary',
  },
};

export const DangerPrimary: Story = {
  args: {
    icon: 'delete',
    variant: 'danger-primary',
  },
};

export const DangerSecondary: Story = {
  args: {
    icon: 'warning',
    variant: 'danger-secondary',
  },
};

export const DangerTertiary: Story = {
  args: {
    icon: 'close',
    variant: 'danger-tertiary',
  },
};

export const Size12: Story = {
  args: {
    icon: 'star',
    size: '12',
    variant: 'primary',
  },
};

export const Size16: Story = {
  args: {
    icon: 'star',
    size: '16',
    variant: 'primary',
  },
};

export const Size24: Story = {
  args: {
    icon: 'star',
    size: '24',
    variant: 'primary',
  },
};

export const Oval: Story = {
  args: {
    icon: 'user',
    oval: true,
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    icon: 'star',
    disabled: true,
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    icon: 'star',
    loading: true,
    variant: 'primary',
  },
};

export const CustomIconColor: Story = {
  args: {
    icon: 'star',
    iconColor: '#ff6b35',
    variant: 'tertiary',
  },
};

export const TypeSubmit: Story = {
  render: (args) => {
    const iconButton = genericRender('ix-icon-button', args);
    const form = document.createElement('form');
    form.appendChild(iconButton);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      action('Form submitted')();
    });

    return form;
  },
  args: {
    icon: 'check',
    type: 'submit',
    variant: 'primary',
  },
};

export const WithClickHandler: Story = {
  render: (args) => {
    const iconButton = genericRender('ix-icon-button', args);
    const button = iconButton.querySelector('ix-icon-button');

    if (button) {
      button.addEventListener('click', () => {
        action('Icon button clicked')();
      });
    }

    return iconButton;
  },
  args: {
    icon: 'star',
    variant: 'primary',
  },
};
