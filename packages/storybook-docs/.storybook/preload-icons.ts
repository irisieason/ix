/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as ICONS from '@irisieason/ix-icons/icons';
import { addIcons } from '@irisieason/ix-icons';

// Preload icons to ensure they are available in the Storybook environment
export function preloadIcons() {
  addIcons(ICONS);
}

