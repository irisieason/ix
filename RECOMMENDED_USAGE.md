# 推荐的组件使用方式

## 🎯 组件架构分析

### ix-card-content 的作用
`ix-card-content` 是一个重要的布局组件，提供：
- 标准内边距（1rem）
- Flex 布局（垂直方向，gap: 0.5rem）
- 溢出处理和高度管理
- 确保卡片内容的一致性

### custom-card 的价值重新定位
经过分析，`custom-card` 组件的价值在于：
1. **图表类型统一管理** - 提供不同图表类型的切换
2. **配置集中化** - 统一管理图表相关的配置
3. **尺寸自适应** - 根据图表类型自动调整容器尺寸

## 📋 推荐的使用方式

### 1. 直接使用图表组件（推荐用于自定义布局）

```html
<!-- 在标准卡片中使用 -->
<ix-card variant="outline">
  <ix-card-content>
    <ix-typography format="h4">设备状态监控</ix-typography>
    <ix-device-status-chart 
      chart-title="当前设备状态"
      y-axis-label="IP 范围"
      x-axis-label="设备数量">
    </ix-device-status-chart>
  </ix-card-content>
</ix-card>

<!-- 状态历史图表 -->
<ix-card variant="outline">
  <ix-card-content>
    <ix-typography format="h4">历史趋势分析</ix-typography>
    <ix-status-history-chart 
      chart-title="状态变化趋势">
    </ix-status-history-chart>
  </ix-card-content>
</ix-card>
```

### 2. 使用 custom-card（推荐用于快速部署）

```html
<!-- 设备状态卡片 -->
<ix-custom-card 
  chart-type="device-status"
  chart-title="设备状态监控"
  variant="outline">
</ix-custom-card>

<!-- 状态历史卡片 -->
<ix-custom-card 
  chart-type="status-history"
  chart-title="状态历史趋势"
  variant="filled">
</ix-custom-card>
```

### 3. 混合使用（推荐用于复杂场景）

```html
<!-- 带有额外信息的卡片 -->
<ix-card variant="outline">
  <ix-card-content>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <ix-typography format="h4">系统监控面板</ix-typography>
      <ix-button variant="secondary" size="small">刷新</ix-button>
    </div>
    
    <!-- 直接嵌入图表组件 -->
    <ix-device-status-chart 
      chart-title="实时设备状态"
      data='{"服务器": {"online": 45, "maintenance": 3, "error": 1, "offline": 1}}'>
    </ix-device-status-chart>
    
    <ix-typography format="caption" text-color="soft">
      最后更新：2025-01-02 15:30:00
    </ix-typography>
  </ix-card-content>
</ix-card>
```

## 🔄 重构后的优势

### custom-card 组件的新定位：
1. **移除了 ix-card-content** - 图表组件自己管理布局和内边距
2. **更清晰的职责** - 专注于图表类型管理和容器尺寸适配
3. **更好的性能** - 减少了一层不必要的包装

### 使用场景建议：

| 场景 | 推荐方案 | 原因 |
|------|----------|------|
| 快速原型 | `ix-custom-card` | 配置简单，开箱即用 |
| 标准业务卡片 | `ix-card` + `ix-card-content` + 图表组件 | 布局标准，扩展性好 |
| 复杂交互 | 直接使用图表组件 | 最大灵活性 |
| 仪表板 | `ix-custom-card` | 统一尺寸，整齐排列 |

## 📊 组件层次结构

```
ix-custom-card (图表容器，管理类型和尺寸)
├── ix-card (基础卡片样式和交互)
└── ix-device-status-chart / ix-status-history-chart (图表内容)

vs.

ix-card (基础卡片)
├── ix-card-content (标准布局容器)
└── 任意内容 (图表、文本、按钮等)
```

## 🎨 样式和布局

### custom-card 的样式特点：
- 图表组件直接放在 `ix-card` 中，跳过 `ix-card-content`
- 图表组件自己管理内边距（16px）
- 容器尺寸根据图表类型自动调整

### 标准卡片的样式特点：
- 使用 `ix-card-content` 提供标准布局
- 内边距由 `ix-card-content` 管理（1rem）
- 支持多种内容类型的混合布局

## 🚀 迁移建议

如果你已经在使用旧版本的 `custom-card`，迁移很简单：

```html
<!-- 旧版本 -->
<ix-custom-card card-title="设备状态"></ix-custom-card>

<!-- 新版本 -->
<ix-custom-card chart-title="设备状态"></ix-custom-card>
```

主要变化：
- `cardTitle` → `chartTitle`
- 移除了 `ix-card-content` 包装
- 图表组件直接管理自己的布局
