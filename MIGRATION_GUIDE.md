# Custom Card 组件移除迁移指南

## 🎯 为什么移除 custom-card？

经过分析，`ix-custom-card` 组件实际上只是一个简单的包装器，没有提供实质性的价值：
- 它只是在 `ix-card` 和图表组件之间添加了一层包装
- 用户可以直接使用 `ix-card` + 图表组件获得相同的功能
- 移除后可以简化架构，提高灵活性

## 🔄 迁移方案

### 方案 1：使用标准卡片布局（推荐）

```html
<!-- 旧代码 -->
<ix-custom-card 
  chart-type="device-status"
  chart-title="设备状态"
  variant="outline">
</ix-custom-card>

<!-- 新代码 -->
<ix-card variant="outline">
  <ix-card-content>
    <ix-device-status-chart 
      chart-title="设备状态">
    </ix-device-status-chart>
  </ix-card-content>
</ix-card>
```

### 方案 2：直接嵌入图表（适用于全屏图表）

```html
<!-- 旧代码 -->
<ix-custom-card 
  chart-type="status-history"
  chart-title="状态历史">
</ix-custom-card>

<!-- 新代码 -->
<ix-card variant="outline">
  <ix-status-history-chart 
    chart-title="状态历史">
  </ix-status-history-chart>
</ix-card>
```

### 方案 3：混合内容布局（新的可能性）

```html
<!-- 现在可以轻松添加其他内容 -->
<ix-card variant="outline">
  <ix-card-content>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <ix-typography format="h4">系统监控</ix-typography>
      <ix-button variant="secondary" size="small">刷新</ix-button>
    </div>
    
    <ix-device-status-chart chart-title="实时状态"></ix-device-status-chart>
    
    <ix-typography format="caption" text-color="soft">
      最后更新：2025-01-02 15:30:00
    </ix-typography>
  </ix-card-content>
</ix-card>
```

## 📋 属性映射表

| custom-card 属性 | 新的使用方式 |
|------------------|--------------|
| `chart-type="device-status"` | 直接使用 `<ix-device-status-chart>` |
| `chart-type="status-history"` | 直接使用 `<ix-status-history-chart>` |
| `chart-title` | 传递给具体图表组件的 `chart-title` |
| `variant` | 传递给 `ix-card` 的 `variant` |
| `selected` | 传递给 `ix-card` 的 `selected` |
| `passive` | 传递给 `ix-card` 的 `passive` |
| `data` | 传递给 `ix-device-status-chart` 的 `data` |
| `status-history-data` | 传递给 `ix-status-history-chart` 的 `data` |

## 🎨 样式调整

### 如果需要无内边距的图表（类似原 custom-card）：

```html
<ix-card variant="outline">
  <!-- 不使用 ix-card-content，图表自己管理布局 -->
  <ix-status-history-chart chart-title="状态历史"></ix-status-history-chart>
</ix-card>
```

### 如果需要标准内边距：

```html
<ix-card variant="outline">
  <ix-card-content>
    <ix-status-history-chart chart-title="状态历史"></ix-status-history-chart>
  </ix-card-content>
</ix-card>
```

## ✅ 迁移检查清单

- [ ] 替换所有 `<ix-custom-card>` 使用
- [ ] 更新属性名称（`chart-title` 等）
- [ ] 选择合适的布局方案（是否使用 `ix-card-content`）
- [ ] 测试样式和功能
- [ ] 更新相关文档

## 🚀 迁移后的优势

1. **更灵活的布局**：可以在卡片中添加任意内容
2. **更简单的架构**：减少组件层次
3. **更好的可维护性**：遵循单一职责原则
4. **更符合设计系统**：使用标准的卡片组件

## 📞 需要帮助？

如果在迁移过程中遇到问题，可以参考：
- `packages/core/src/components/status-history-chart/usage-example.html`
- 各个图表组件的 README 文档
- Siemens iX 官方文档中的卡片使用示例
