/**
 * 组件功能测试脚本
 * 用于验证 DeviceStatusChart 和 StatusHistoryChart 组件的核心功能
 */

// 测试结果收集器
const testResults = {
  deviceStatusChart: {
    componentDefinition: false,
    defaultRendering: false,
    dataUpdate: false,
    propValidation: false,
    shadowDom: false
  },
  statusHistoryChart: {
    componentDefinition: false,
    defaultRendering: false,
    dataUpdate: false,
    propValidation: false,
    shadowDom: false,
    svgRendering: false
  }
};

// 测试工具函数
function logTest(component, test, result, message = '') {
  const status = result ? '✅' : '❌';
  console.log(`${status} ${component} - ${test}: ${message}`);
  return result;
}

// 等待元素渲染完成
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element && element.shadowRoot) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector);
      if (element && element.shadowRoot) {
        obs.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

// 测试 DeviceStatusChart
async function testDeviceStatusChart() {
  console.log('\n=== DeviceStatusChart 测试开始 ===');

  // 1. 测试组件定义
  const isDeviceChartDefined = customElements.get('ix-device-status-chart') !== undefined;
  testResults.deviceStatusChart.componentDefinition = logTest(
    'DeviceStatusChart',
    '组件定义',
    isDeviceChartDefined,
    isDeviceChartDefined ? '组件已正确定义' : '组件未定义'
  );

  if (!isDeviceChartDefined) {
    console.log('❌ DeviceStatusChart 组件未定义，跳过后续测试');
    return;
  }

  // 创建测试元素
  const testChart = document.createElement('ix-device-status-chart');
  testChart.id = 'test-device-chart';
  document.body.appendChild(testChart);

  try {
    // 等待组件渲染
    await waitForElement('#test-device-chart');

    // 2. 测试默认渲染
    const hasContent = testChart.shadowRoot && testChart.shadowRoot.children.length > 0;
    testResults.deviceStatusChart.defaultRendering = logTest(
      'DeviceStatusChart',
      '默认渲染',
      hasContent,
      hasContent ? '组件内容已渲染' : '组件内容未渲染'
    );

    // 3. 测试 Shadow DOM
    const hasShadowRoot = testChart.shadowRoot !== null;
    testResults.deviceStatusChart.shadowDom = logTest(
      'DeviceStatusChart',
      'Shadow DOM',
      hasShadowRoot,
      hasShadowRoot ? 'Shadow DOM 已创建' : 'Shadow DOM 未创建'
    );

    // 4. 测试属性验证
    const defaultTitle = testChart.chartTitle;
    const defaultYLabel = testChart.yAxisLabel;
    const defaultXLabel = testChart.xAxisLabel;

    const propsValid = defaultTitle === 'Device status' &&
                      defaultYLabel === 'IP Range' &&
                      defaultXLabel === 'Device';

    testResults.deviceStatusChart.propValidation = logTest(
      'DeviceStatusChart',
      '属性验证',
      propsValid,
      propsValid ? `标题: "${defaultTitle}", Y轴: "${defaultYLabel}", X轴: "${defaultXLabel}"` : '默认属性不正确'
    );

    // 5. 测试数据更新
    const originalData = testChart.data;
    const testData = {
      'Test Range': { online: 50, maintenance: 10, error: 5, offline: 2 }
    };

    testChart.data = JSON.stringify(testData);

    // 等待数据更新
    await new Promise(resolve => setTimeout(resolve, 100));

    const dataUpdated = testChart.data !== originalData;
    testResults.deviceStatusChart.dataUpdate = logTest(
      'DeviceStatusChart',
      '数据更新',
      dataUpdated,
      dataUpdated ? '数据更新成功' : '数据更新失败'
    );

  } catch (error) {
    console.log(`❌ DeviceStatusChart 测试过程中出错: ${error.message}`);
  } finally {
    // 清理测试元素
    document.body.removeChild(testChart);
  }
}

// 测试 StatusHistoryChart
async function testStatusHistoryChart() {
  console.log('\n=== StatusHistoryChart 测试开始 ===');

  // 1. 测试组件定义
  const isStatusChartDefined = customElements.get('ix-status-history-chart') !== undefined;
  testResults.statusHistoryChart.componentDefinition = logTest(
    'StatusHistoryChart',
    '组件定义',
    isStatusChartDefined,
    isStatusChartDefined ? '组件已正确定义' : '组件未定义'
  );

  if (!isStatusChartDefined) {
    console.log('❌ StatusHistoryChart 组件未定义，跳过后续测试');
    return;
  }

  // 创建测试元素
  const testChart = document.createElement('ix-status-history-chart');
  testChart.id = 'test-status-chart';
  document.body.appendChild(testChart);

  try {
    // 等待组件渲染
    await waitForElement('#test-status-chart');

    // 2. 测试默认渲染
    const hasContent = testChart.shadowRoot && testChart.shadowRoot.children.length > 0;
    testResults.statusHistoryChart.defaultRendering = logTest(
      'StatusHistoryChart',
      '默认渲染',
      hasContent,
      hasContent ? '组件内容已渲染' : '组件内容未渲染'
    );

    // 3. 测试 Shadow DOM
    const hasShadowRoot = testChart.shadowRoot !== null;
    testResults.statusHistoryChart.shadowDom = logTest(
      'StatusHistoryChart',
      'Shadow DOM',
      hasShadowRoot,
      hasShadowRoot ? 'Shadow DOM 已创建' : 'Shadow DOM 未创建'
    );

    // 4. 测试 SVG 渲染
    const svg = testChart.shadowRoot ? testChart.shadowRoot.querySelector('svg') : null;
    const hasSvg = svg !== null;
    testResults.statusHistoryChart.svgRendering = logTest(
      'StatusHistoryChart',
      'SVG 渲染',
      hasSvg,
      hasSvg ? `SVG 元素已创建 (${svg.tagName})` : 'SVG 元素未找到'
    );

    // 5. 测试属性验证
    const defaultTitle = testChart.chartTitle;
    const propsValid = defaultTitle === 'Status history';

    testResults.statusHistoryChart.propValidation = logTest(
      'StatusHistoryChart',
      '属性验证',
      propsValid,
      propsValid ? `标题: "${defaultTitle}"` : '默认属性不正确'
    );

    // 6. 测试数据更新
    const originalData = testChart.data;
    const testData = {
      'Test1': { online: 5, maintenance: -10, error: -5, offline: -50 },
      'Test2': { online: 0, maintenance: -20, error: -10, offline: -60 }
    };

    testChart.data = JSON.stringify(testData);

    // 等待数据更新
    await new Promise(resolve => setTimeout(resolve, 100));

    const dataUpdated = testChart.data !== originalData;
    testResults.statusHistoryChart.dataUpdate = logTest(
      'StatusHistoryChart',
      '数据更新',
      dataUpdated,
      dataUpdated ? '数据更新成功' : '数据更新失败'
    );

  } catch (error) {
    console.log(`❌ StatusHistoryChart 测试过程中出错: ${error.message}`);
  } finally {
    // 清理测试元素
    document.body.removeChild(testChart);
  }
}

// 生成测试报告
function generateTestReport() {
  console.log('\n=== 测试报告 ===');

  let totalTests = 0;
  let passedTests = 0;

  // DeviceStatusChart 报告
  console.log('\n📊 DeviceStatusChart:');
  Object.entries(testResults.deviceStatusChart).forEach(([test, result]) => {
    totalTests++;
    if (result) passedTests++;
    console.log(`  ${result ? '✅' : '❌'} ${test}`);
  });

  // StatusHistoryChart 报告
  console.log('\n📈 StatusHistoryChart:');
  Object.entries(testResults.statusHistoryChart).forEach(([test, result]) => {
    totalTests++;
    if (result) passedTests++;
    console.log(`  ${result ? '✅' : '❌'} ${test}`);
  });

  // 总体报告
  const successRate = ((passedTests / totalTests) * 100).toFixed(1);
  console.log(`\n📋 总体结果:`);
  console.log(`  总测试数: ${totalTests}`);
  console.log(`  通过测试: ${passedTests}`);
  console.log(`  成功率: ${successRate}%`);

  if (passedTests === totalTests) {
    console.log('\n🎉 所有测试通过！两个组件功能正常。');
  } else {
    console.log('\n⚠️ 部分测试失败，请检查组件实现。');
  }

  return { totalTests, passedTests, successRate };
}

// 主测试函数
async function runTests() {
  console.log('🚀 开始组件功能测试...');

  try {
    // 等待组件定义完成
    await Promise.all([
      customElements.whenDefined('ix-device-status-chart').catch(() => {}),
      customElements.whenDefined('ix-status-history-chart').catch(() => {})
    ]);

    // 运行测试
    await testDeviceStatusChart();
    await testStatusHistoryChart();

    // 生成报告
    const report = generateTestReport();

    // 返回测试结果供外部使用
    return {
      success: report.passedTests === report.totalTests,
      results: testResults,
      summary: report
    };

  } catch (error) {
    console.error('❌ 测试运行失败:', error);
    return {
      success: false,
      error: error.message,
      results: testResults
    };
  }
}

// 如果在浏览器环境中，自动运行测试
if (typeof window !== 'undefined') {
  // 等待页面加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTests);
  } else {
    // 延迟执行，确保组件已加载
    setTimeout(runTests, 1000);
  }
}

// 导出测试函数供外部调用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runTests, testResults };
}
