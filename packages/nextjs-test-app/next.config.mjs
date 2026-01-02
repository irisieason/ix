/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import stencilSSR from '@stencil/ssr/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default stencilSSR({
  module: import('@irisieason/ix-react'),
  from: '@irisieason/ix-react',
  hydrateModule: import('@irisieason/ix/hydrate'),
  serializeShadowRoot: {
    default: 'declarative-shadow-dom',
  },
})(nextConfig);
