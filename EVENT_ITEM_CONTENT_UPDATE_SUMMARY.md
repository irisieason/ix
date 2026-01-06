# EventItemContent 组件更新总结

## 更新日期
2026-01-05

## 更新内容

### 1. 属性重命名
- **`icon`** → **`typeIcon`**
  - 更准确地描述该属性的用途（事件类型图标）
  - 避免与子组件的icon属性混淆

### 2. 结构优化（基于Figma设计）
根据Figma设计规范进行了精确的结构优化：

#### 布局尺寸调整
- **容器高度**: 80px（5rem）
- **内边距**: 4px 8px 4px 4px（精确匹配Figma）
- **元素间距**: 4px和16px（匹配设计规范）

#### 图标列优化
- **尺寸**: 32px宽度，包含24px图标
- **内边距**: 14px 4px 6px 4px
- **对齐**: 左上角对齐（匹配Figma）

#### 内容区域优化
- **类型和设备区域**: 精确240px宽度
- **时间区域**: 弹性布局，自适应剩余空间
- **字体规范**: 14px，行高1.429（匹配设计系统）

#### 时间戳显示改进
- **自动分离**: 支持日期和时间分两行显示
- **格式支持**:
  - 逗号分隔: `"2026-01-05, 08:51:21"` → 两行
  - 空格分隔: `"2026-01-05 08:51:21"` → 两行
  - 单行格式: `"2026-01-05"` → 单行

### 3. 分享按钮（IconButton）完整属性暴露
直接暴露ix-icon-button子组件的所有原生属性：

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `shareButtonVariant` | `'subtle-primary' \| 'subtle-secondary' \| 'subtle-tertiary'` | `'subtle-tertiary'` | 按钮样式变体 |
| `shareButtonDisabled` | `boolean` | `false` | 禁用状态 |
| `shareButtonLoading` | `boolean` | `false` | 加载状态 |
| `shareButtonIcon` | `string` | `'share'` | 图标名称 |
| `shareButtonSize` | `'24' \| '16' \| '12'` | `'24'` | 图标尺寸 |
| `shareButtonOval` | `boolean` | `false` | 椭圆形状 |
| `shareButtonIconColor` | `string` | - | 图标颜色 |
| `shareButtonType` | `'button' \| 'submit'` | `'button'` | 按钮类型 |

### 4. 创建任务按钮（Button）完整属性暴露
直接暴露ix-button子组件的所有原生属性：

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `createTaskButtonVariant` | `string` | `'secondary'` | 按钮样式变体 |
| `createTaskButtonDisabled` | `boolean` | `false` | 禁用状态 |
| `createTaskButtonLoading` | `boolean` | `false` | 加载状态 |
| `createTaskButtonType` | `'button' \| 'submit'` | `'button'` | 按钮类型 |
| `createTaskButtonIcon` | `string` | - | 左侧图标 |
| `createTaskButtonIconRight` | `string` | - | 右侧图标 |
| `createTaskButtonAriaLabel` | `string` | - | ARIA标签 |
| `createTaskButtonForm` | `string` | - | 关联表单ID |

## 更新的文件

### 核心组件文件
- ✅ `packages/core/src/components/event-item-content/event-item-content.tsx`
- ✅ `packages/core/src/components/event-item-content/event-item-content.types.ts`
- ✅ `packages/core/src/components/event-item-content/README.md`
- ✅ `packages/core/src/components/event-item-content/usage-example.html`

### 框架集成文件
- ✅ `packages/angular/src/components.ts`
- ✅ `packages/angular/standalone/src/components.ts`
- ✅ `packages/vue/src/components.ts`
- ✅ `packages/react/src/components.ts`
- ✅ `packages/react/src/components.server.ts`

### 文档和示例
- ✅ `packages/storybook-docs/src/stories/event-item-content.stories.ts`

### 变更日志
- ✅ `.changeset/event-item-content-api-update.md`

## 使用示例

### 基本用法（属性重命名）
```html
<!-- 旧写法 -->
<ix-event-item-content icon="distribution" />

<!-- 新写法 -->
<ix-event-item-content type-icon="distribution" />
```

### 自定义按钮样式
```html
<ix-event-item-content
  type-icon="warning"
  type-header="System Alert"
  share-button-variant="subtle-primary"
  create-task-button-variant="primary"
  create-task-button-icon="calendar"
/>
```

### 按钮状态控制
```html
<ix-event-item-content
  type-icon="processing"
  type-header="Processing Update"
  share-button-disabled="true"
  create-task-button-loading="true"
  create-task-button-text="Processing..."
/>
```

### 带图标的按钮
```html
<ix-event-item-content
  type-icon="maintenance"
  type-header="Maintenance Required"
  create-task-button-icon="calendar"
  create-task-button-text="Schedule"
  create-task-button-variant="primary"
/>
```

## 迁移指南

### 对于现有代码
1. 将所有 `icon` 属性替换为 `type-icon`
2. 如果需要自定义按钮样式或状态，添加相应的新属性

### 搜索和替换
```bash
# 在HTML文件中
icon="  →  type-icon="

# 在TypeScript/JavaScript文件中
icon:  →  typeIcon:
```

## 兼容性说明

这是一个**破坏性变更**（Breaking Change）：
- 旧的 `icon` 属性已被移除
- 必须更新为 `typeIcon` 才能正常工作
- 建议在主版本更新时进行此迁移

## 优势

1. **更清晰的API**: `typeIcon` 更准确地描述了属性的用途
2. **更强的控制力**: 可以完全控制子组件按钮的外观和状态
3. **更好的用户体验**: 支持加载状态、禁用状态等交互反馈
4. **更灵活的设计**: 可以根据不同场景自定义按钮样式

## 测试建议

1. 验证所有使用 EventItemContent 的地方都已更新属性名
2. 测试新的按钮属性在不同状态下的表现
3. 确保在所有框架（React、Vue、Angular）中都能正常工作
4. 检查Storybook文档是否正确显示所有新属性

## 后续工作

- [ ] 更新相关的单元测试（如果存在）
- [ ] 更新端到端测试
- [ ] 在发布说明中突出显示这个破坏性变更
- [ ] 考虑提供代码迁移工具或脚本
