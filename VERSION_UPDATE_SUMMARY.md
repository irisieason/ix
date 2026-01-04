# Version Update Summary

## 版本更新概述

由于添加了新的 `EventItemContent` 组件，我们将版本号从 `4.2.2` 更新到 `4.3.0`。这是一个 minor 版本更新，因为我们添加了新功能但保持了向后兼容性。

## 更新的包

### 主要包版本更新

| 包名 | 旧版本 | 新版本 | 更新原因 |
|------|--------|--------|----------|
| `@irisieason/ix` | 4.2.2 | **4.3.0** | 添加了 EventItemContent 组件 |
| `@irisieason/ix-react` | 4.2.2 | **4.3.0** | 跟随核心包版本 |
| `@irisieason/ix-vue` | 4.2.0 | **4.3.0** | 跟随核心包版本 |
| `@irisieason/ix-angular` | 4.2.0 | **4.3.0** | 跟随核心包版本 |
| `@irisieason/ix-docs` | 4.2.0 | **4.3.0** | 跟随核心包版本 |

### 依赖关系更新

| 包名 | 依赖 | 旧版本 | 新版本 |
|------|------|--------|--------|
| `@irisieason/ix-react` | `@irisieason/ix` | ~4.2.2 | **~4.3.0** |
| `@irisieason/ix-vue` | `@irisieason/ix` | ~4.2.0 | **~4.3.0** |
| `@irisieason/ix-angular` | `@irisieason/ix` | ~4.2.0 | **~4.3.0** |
| `@irisieason/ix-aggrid` | `@irisieason/ix` | ^4.2.0 | **^4.3.0** |

## 新功能

### EventItemContent 组件 (v4.3.0)

- **组件标签**: `ix-event-item-content`
- **用途**: 在事件列表项中显示结构化的事件信息
- **设计基础**: 基于 Figma 设计实现
- **集成**: 与现有的 `ix-event-list` 和 `ix-event-list-item` 组件完美集成

#### 主要特性
- 图标显示
- 类型信息展示
- 设备信息显示
- 时间戳显示
- 可配置的操作按钮
- 响应式设计
- 完整的 TypeScript 支持

## 版本控制策略

### 语义化版本控制 (SemVer)

我们遵循语义化版本控制规范：

- **MAJOR** (主版本): 不兼容的 API 更改
- **MINOR** (次版本): 向后兼容的新功能
- **PATCH** (补丁版本): 向后兼容的错误修复

### 本次更新分类

**类型**: MINOR 版本更新 (4.2.x → 4.3.0)

**原因**: 
- ✅ 添加了新的 `EventItemContent` 组件
- ✅ 保持了完全的向后兼容性
- ✅ 没有破坏性更改
- ✅ 现有 API 保持不变

## 发布说明

### 新增功能 (v4.3.0)

#### EventItemContent 组件
```html
<ix-event-list>
  <ix-event-list-item>
    <ix-event-item-content
      icon="distribution"
      type-header="Update available"
      header-info="V2.3 › V2.5"
      device-name="robo1-net-sw17"
      device-info="172.19.65.8"
      timestamp="2026-01-05, 08:51:21"
    ></ix-event-item-content>
  </ix-event-list-item>
</ix-event-list>
```

#### 支持的属性
- `icon`: 事件类型图标
- `typeHeader`: 事件主标题
- `headerInfo`: 事件详细信息
- `deviceName`: 设备名称
- `deviceInfo`: 设备信息
- `timestamp`: 时间戳
- `showShareButton`: 显示分享按钮
- `showCreateTaskButton`: 显示创建任务按钮
- `createTaskButtonText`: 任务按钮文本

## 迁移指南

### 从 4.2.x 升级到 4.3.0

由于这是一个 MINOR 版本更新，**不需要任何迁移步骤**。

#### 自动兼容
- ✅ 所有现有代码继续正常工作
- ✅ 现有组件 API 保持不变
- ✅ 样式和行为保持一致
- ✅ 可以立即使用新的 EventItemContent 组件

#### 可选升级
如果您想使用新的 EventItemContent 组件：

1. 更新包版本到 4.3.0
2. 开始使用新组件（可选）
3. 现有的事件列表代码无需更改

## 测试状态

### ✅ 验证完成
- 组件构建成功
- TypeScript 类型检查通过
- Storybook 文档生成
- 示例页面正常工作
- 所有现有功能保持正常

### 📋 测试覆盖
- 单元测试：组件基本功能
- 集成测试：与事件列表组件集成
- 视觉测试：Figma 设计一致性
- 响应式测试：不同屏幕尺寸
- 浏览器兼容性测试

## 下一步计划

### 即将发布 (v4.3.1)
- 可能的错误修复
- 性能优化
- 文档改进

### 未来版本 (v4.4.0)
- 更多新组件
- 增强的可访问性功能
- 新的设计系统特性

## 联系信息

如有问题或建议，请通过以下方式联系：

- **GitHub Issues**: https://github.com/irisieason/ix/issues
- **文档**: https://ix.siemens.io
- **更新日志**: 查看 CHANGELOG.md

---

**发布日期**: 2025-01-05  
**发布版本**: 4.3.0  
**发布类型**: Minor Release  
**兼容性**: 向后兼容
