# Event Item Content - Slot-Based API

The `ix-event-item-content` component now supports a slot-based API that allows you to use native `ix-icon-button` and `ix-button` components with their full native properties, avoiding the need for prefixed property names.

## Basic Usage

### Default Components
By default, the component shows both an icon button (share) and a main button (Create task):

```html
<ix-event-item-content
  type-icon="distribution"
  type-header="Update available"
  header-info="V2.3 › V2.5"
  device-name="robo1-net-sw17"
  device-info="172.19.65.8"
  datestamp="2026-01-05"
  timestamp="08:51:21">
</ix-event-item-content>
```

### Customizing Default Components
You can customize the default components using the new properties:

```html
<ix-event-item-content
  type-icon="error"
  type-header="System Error"
  header-info="Critical failure"
  device-name="server-01"
  device-info="192.168.1.10"
  datestamp="2026-01-05"
  timestamp="16:22:10"
  default-icon-button-icon="warning"
  default-icon-button-variant="danger-primary"
  default-button-text="Investigate"
  default-button-variant="danger-primary">
</ix-event-item-content>
```

## Slot-Based API

### Using Custom Icon Button
To use a custom icon button with full native properties, set `show-default-icon-button="false"` and provide your own:

```html
<ix-event-item-content
  type-icon="maintenance"
  type-header="Maintenance Required"
  header-info="Scheduled downtime"
  device-name="web-server"
  device-info="10.0.0.5"
  datestamp="2026-01-06"
  timestamp="02:00:00"
  show-default-icon-button="false">
  
  <!-- Custom icon button with native properties -->
  <ix-icon-button 
    slot="icon-button"
    icon="calendar"
    variant="primary"
    size="24"
    disabled="false"
    loading="false"
    oval="true"
    icon-color="#ff6b35">
  </ix-icon-button>
</ix-event-item-content>
```

### Using Custom Button
To use a custom button with full native properties, set `show-default-button="false"` and provide your own:

```html
<ix-event-item-content
  type-icon="security"
  type-header="Security Alert"
  header-info="Unauthorized access attempt"
  device-name="firewall-01"
  device-info="172.16.0.1"
  datestamp="2026-01-05"
  timestamp="14:30:45"
  show-default-button="false">
  
  <!-- Custom button with native properties -->
  <ix-button 
    slot="button"
    variant="danger-primary"
    icon="shield"
    icon-right="arrow-right"
    disabled="false"
    loading="false"
    type="button"
    alignment="center">
    Block IP Address
  </ix-button>
</ix-event-item-content>
```

### Using Both Custom Components
You can customize both components simultaneously:

```html
<ix-event-item-content
  type-icon="network"
  type-header="Network Issue"
  header-info="Connection timeout"
  device-name="router-main"
  device-info="192.168.0.1"
  datestamp="2026-01-05"
  timestamp="11:15:30"
  show-default-icon-button="false"
  show-default-button="false">
  
  <!-- Custom icon button -->
  <ix-icon-button 
    slot="icon-button"
    icon="export"
    variant="secondary"
    size="16">
  </ix-icon-button>
  
  <!-- Custom button -->
  <ix-button 
    slot="button"
    variant="tertiary"
    icon="refresh"
    loading="false">
    Restart Connection
  </ix-button>
</ix-event-item-content>
```

## Benefits of Slot-Based API

### ✅ **Native Property Access**
- Use all native `ix-icon-button` and `ix-button` properties directly
- No need to remember prefixed property names
- Full TypeScript support and IntelliSense

### ✅ **Consistent API**
- Properties work exactly as documented in the individual components
- No learning curve for existing iX users
- Consistent behavior across all usage scenarios

### ✅ **Flexibility**
- Mix and match default and custom components
- Full control over component behavior
- Easy to migrate existing code

### ✅ **Maintainability**
- Changes to base components automatically available
- No need to maintain property mappings
- Reduced complexity in component implementation

## Migration Guide

### From Old API to New API

**Old way (with prefixed properties):**
```html
<ix-event-item-content
  icon-button-icon="star"
  icon-button-variant="primary"
  icon-button-disabled="false"
  button-variant="secondary"
  button-loading="true">
</ix-event-item-content>
```

**New way (with slots):**
```html
<ix-event-item-content
  show-default-icon-button="false"
  show-default-button="false">
  
  <ix-icon-button 
    slot="icon-button"
    icon="star"
    variant="primary"
    disabled="false">
  </ix-icon-button>
  
  <ix-button 
    slot="button"
    variant="secondary"
    loading="true">
    Action
  </ix-button>
</ix-event-item-content>
```

## Properties Reference

### Component Properties
- `show-default-icon-button`: boolean (default: true) - Show/hide default icon button
- `show-default-button`: boolean (default: true) - Show/hide default button
- `default-icon-button-icon`: string (default: 'share') - Default icon button icon
- `default-icon-button-variant`: IconButtonVariant (default: 'subtle-tertiary') - Default icon button variant
- `default-button-text`: string (default: 'Create task') - Default button text
- `default-button-variant`: ButtonVariant (default: 'primary') - Default button variant

### Available Slots
- `icon-button`: For custom `ix-icon-button` component
- `button`: For custom `ix-button` component

This slot-based approach provides the best of both worlds: simple defaults for quick usage, and full customization power when needed.