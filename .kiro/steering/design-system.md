---
inclusion: always
---

# Siemens iX Design System Rules

This document provides comprehensive guidelines for integrating Figma designs with the Siemens iX design system using the Figma MCP integration.

## Design System Structure

### Token Definitions

**Location**: `packages/core/scss/_common-variables.scss`

**Format**: SCSS variables with semantic naming

**Key Token Categories**:

```scss
/* Spacing System */
$x-large-space: 2rem;      // 32px
$large-space: 1.5rem;      // 24px  
$default-space: 1rem;      // 16px
$medium-space: 0.75rem;    // 12px
$small-space: 0.5rem;      // 8px
$tiny-space: 0.25rem;      // 4px

/* Control Heights */
$default-control-height: 2rem;    // 32px
$large-control-height: 2.5rem;    // 40px
$medium-control-height: 1.5rem;   // 24px

/* Icon Sizes */
$large-icon-size: 2rem;     // 32px
$default-icon-size: 1.5rem; // 24px
$small-icon-size: 1rem;     // 16px

/* Typography Scale */
$font-size-xs: 0.625rem;     // 10px
$font-size-s: 0.75rem;      // 12px
$font-size-caption: 0.75rem; // 12px
$font-size-default: 0.875rem; // 14px
$font-size-l: 1rem;         // 16px
$font-size-xl: 1.375rem;    // 22px

/* Border Radius */
$default-border-radius: 0.25rem; // 4px
```

**Token Transformation**: No automated transformation system - tokens are directly used in SCSS files.

### Component Library

**Location**: `packages/core/src/components/`

**Architecture**: Stencil.js Web Components with TypeScript

**Structure Pattern**:
```
component-name/
├── component-name.tsx      # Main component logic
├── component-name.scss     # Component styles
├── component-name.types.ts # TypeScript interfaces
└── test/                   # Component tests
```

**Key Components Available**:
- **Layout**: `application`, `content`, `pane-layout`, `css-grid`
- **Navigation**: `menu`, `breadcrumb`, `tabs`, `pagination`
- **Forms**: `button`, `input`, `select`, `checkbox`, `radio`, `toggle`
- **Data Display**: `card`, `table`, `key-value`, `typography`
- **Feedback**: `modal`, `toast`, `message-bar`, `spinner`
- **Charts**: `device-status-chart`, `status-history-chart`

**Component Documentation**: Available via Storybook (`npm run storybook`)

### Frameworks & Libraries

**Core Framework**: Stencil.js (Web Components)
**Build System**: Stencil compiler with Rollup
**Styling**: SCSS with CSS Custom Properties
**Testing**: Playwright + Jest

**Framework Integrations**:
- **React**: `@irisieason/ix-react` package
- **Angular**: `@irisieason/ix-angular` package  
- **Vue**: `@irisieason/ix-vue` package

**Package Structure**:
```
packages/
├── core/           # Stencil Web Components
├── react/          # React wrappers
├── angular/        # Angular wrappers
├── vue/            # Vue wrappers
└── documentation/  # Storybook docs
```

### Asset Management

**Icons**: External dependency `@irisieason/ix-icons`
**Assets Storage**: `packages/core/src/assets/` (if any)
**Build Output**: `packages/core/dist/`
**CSS Distribution**: 
- `dist/siemens-ix/siemens-ix.css` (complete)
- `dist/siemens-ix/siemens-ix-core.css` (core only)

**Theme Assets**:
- `dist/siemens-ix/theme/classic-dark.css`
- `dist/siemens-ix/theme/classic-light.css`

### Icon System

**Package**: `@irisieason/ix-icons` (peer dependency)
**Usage Pattern**: 
```tsx
// In components
@Prop() icon?: string;

// In templates
<ix-icon name={this.icon}></ix-icon>
```

**Icon Naming**: Kebab-case convention (e.g., `arrow-right`, `user-profile`)

### Styling Approach

**Methodology**: Component-scoped SCSS with CSS Custom Properties
**Global Styles**: `packages/core/scss/ix.scss` and `packages/core/scss/ix-core.scss`
**Theme System**: CSS Custom Properties with theme-specific overrides

**Component Styling Pattern**:
```scss
// Component-specific variables
:host {
  --ix-component-property: value;
}

// BEM-like class structure
.component {
  &__element {
    // styles
  }
  
  &--modifier {
    // modifier styles
  }
}
```

**Responsive Design**: Utility classes and mixins in `packages/core/scss/mixins/`

### Project Structure

**Monorepo**: pnpm workspace with Turbo for build orchestration
**Package Manager**: pnpm (>=9.x.x)
**Node Version**: 22.19.0

**Key Directories**:
```
├── packages/
│   ├── core/                    # Main component library
│   ├── react/                   # React integration
│   ├── angular/                 # Angular integration
│   ├── vue/                     # Vue integration
│   ├── documentation/           # Storybook
│   └── *-test-app/             # Framework test applications
├── scripts/                     # Build and utility scripts
└── tooling/                     # Development tooling
```

## Figma Integration Guidelines

### Code Generation Rules

1. **Component Mapping**: Map Figma components to existing iX components when possible
2. **Token Usage**: Replace Tailwind utilities with iX design tokens
3. **Styling Approach**: Use SCSS with iX variables instead of inline styles
4. **Framework Target**: Generate Stencil.js components for core, React wrappers for React projects

### Token Replacement Mapping

**Spacing (Tailwind → iX)**:
```scss
// Tailwind: p-4, m-2, gap-6
// iX: Use spacing variables
padding: $default-space;
margin: $small-space;
gap: $large-space;
```

**Typography (Tailwind → iX)**:
```scss
// Tailwind: text-sm, text-lg, font-bold
// iX: Use typography variables
font-size: $font-size-s;
font-size: $font-size-l;
font-weight: $font-weight-bold;
```

**Colors**: Use CSS Custom Properties from theme system
**Border Radius**: Use `$default-border-radius` (0.25rem)

### Component Reuse Priority

1. **Existing iX Components**: Always prefer existing components
2. **Component Composition**: Combine existing components for complex layouts
3. **Custom Components**: Only create new components when no suitable iX component exists

### Validation Requirements

1. **Visual Parity**: Generated components must match Figma designs visually
2. **Accessibility**: Ensure ARIA attributes and keyboard navigation
3. **Theme Compatibility**: Components must work with both light and dark themes
4. **Responsive Behavior**: Follow iX responsive patterns

### File Organization

**New Components**: Follow iX component structure in `packages/core/src/components/`
**React Integration**: Auto-generate React wrappers in `packages/react/`
**Documentation**: Include component documentation and usage examples
