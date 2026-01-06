---
'@irisieason/ix': minor
'@irisieason/ix-react': minor
'@irisieason/ix-vue': minor
'@irisieason/ix-angular': minor
---

**EventItemContent组件API更新和结构优化**

重大变更：
- 将 `icon` 属性重命名为 `typeIcon`，更准确地描述其用途

结构优化（基于Figma设计）：
- 优化布局尺寸和间距，精确匹配Figma设计规范
- 改进时间戳显示：支持自动分离日期和时间为两行显示
- 调整图标列、内容区域和操作列的精确尺寸
- 优化响应式布局和紧凑模式支持

子组件属性暴露：
- **分享按钮（ix-icon-button）完整属性暴露**：
  - `shareButtonVariant`: 按钮样式变体
  - `shareButtonDisabled`: 禁用状态
  - `shareButtonLoading`: 加载状态
  - `shareButtonIcon`: 图标名称（默认'share'）
  - `shareButtonSize`: 图标尺寸（'24'|'16'|'12'）
  - `shareButtonOval`: 椭圆形状
  - `shareButtonIconColor`: 图标颜色
  - `shareButtonType`: 按钮类型

- **创建任务按钮（ix-button）完整属性暴露**：
  - `createTaskButtonVariant`: 按钮样式变体
  - `createTaskButtonDisabled`: 禁用状态
  - `createTaskButtonLoading`: 加载状态
  - `createTaskButtonType`: 按钮类型
  - `createTaskButtonIcon`: 左侧图标
  - `createTaskButtonIconRight`: 右侧图标
  - `createTaskButtonAriaLabel`: ARIA标签
  - `createTaskButtonForm`: 关联表单ID

时间戳格式支持：
- 逗号分隔: `"2026-01-05, 08:51:21"` → 两行显示
- 空格分隔: `"2026-01-05 08:51:21"` → 两行显示
- 单行格式: `"2026-01-05"` → 单行显示

迁移指南：
```html
<!-- 旧写法 -->
<ix-event-item-content icon="distribution" />

<!-- 新写法 -->
<ix-event-item-content type-icon="distribution" />

<!-- 完整的按钮自定义 -->
<ix-event-item-content
  type-icon="warning"
  share-button-variant="subtle-primary"
  share-button-icon="export"
  create-task-button-variant="primary"
  create-task-button-icon="calendar"
/>
```

这些更改提供了对子组件的完整控制能力，允许开发者完全自定义按钮的所有原生属性。
