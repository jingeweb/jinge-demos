import { test, expect, openDemo } from './helpers.mjs';

test('dynamic-components: tab changes discard counter state and profile input', async ({
  page,
}) => {
  await openDemo(page, 'dynamic-components');
  await page.getByRole('button', { name: '+', exact: true }).click();
  await page.getByRole('button', { name: '+', exact: true }).click();
  await expect(page.locator('.count')).toHaveText('2');
  await page.getByRole('button', { name: '个人信息', exact: true }).click();
  await page.getByPlaceholder('随便输入点什么').fill('Temporary profile');
  await page.getByRole('button', { name: '计数器', exact: true }).click();
  await expect(page.locator('.count')).toHaveText('0');
  await expect(page.locator('.panel')).toContainText('当前实例：#2');
  await page.getByRole('button', { name: '个人信息', exact: true }).click();
  await expect(page.getByPlaceholder('随便输入点什么')).toHaveValue('');
});
test('dynamic-components: async tab shows loading before the real loaded panel', async ({
  page,
}) => {
  await openDemo(page, 'dynamic-components');
  await page.getByRole('button', { name: '异步面板', exact: true }).click();
  await expect(page.locator('.panel')).toContainText('组件加载中（800ms）...');
  await expect(page.locator('.panel .ok')).toHaveText('加载完成。');
  await expect(page.locator('.panel h3')).toHaveText('异步面板');
});
test('dynamic-components: leaving a loading tab does not overwrite the selected tab', async ({
  page,
}) => {
  await openDemo(page, 'dynamic-components');
  const chunk = page.waitForResponse((response) => /lazy-panel-[^/]+\.js/.test(response.url()));
  await page.getByRole('button', { name: '异步面板', exact: true }).click();
  await expect(page.locator('.panel')).toContainText('组件加载中');
  await page.getByRole('button', { name: '个人信息', exact: true }).click();
  await page.getByPlaceholder('随便输入点什么').fill('Keep this visible');
  await (await chunk).finished();
  await page.getByPlaceholder('随便输入点什么').press('End');
  await expect(page.locator('.panel h3')).toHaveText('个人信息');
  await expect(page.getByPlaceholder('随便输入点什么')).toHaveValue('Keep this visible');
  await page.getByRole('button', { name: '异步面板', exact: true }).click();
  await expect(page.locator('.panel .ok')).toHaveText('加载完成。');
});
test('integrated-with-echarts: render, inspect a chart tooltip, then render again', async ({
  page,
}) => {
  await openDemo(page, 'integrated-with-echarts');
  await expect(page.locator('canvas')).toHaveCount(0);
  await page.getByRole('button', { name: 'Render Chart', exact: true }).click();
  await expect(page.locator('canvas')).toHaveCount(1);
  await expect(page.locator('canvas')).toBeVisible();
  const canvas = page.locator('canvas');
  // Keep the pointer near the foot of the first bar as the real chart animates.
  // Retry user pointer movement until its visible tooltip appears.
  const box = await canvas.boundingBox();
  let movement = 0;
  await expect
    .poll(async () => {
      await page.mouse.move(box.x + 83 + (movement++ % 2), box.y + box.height - 80);
      return page.getByText('shirt', { exact: true }).isVisible();
    })
    .toBe(true);
  await expect(page.locator('body')).toContainText('Sales');
  await page.getByRole('button', { name: 'Render Chart', exact: true }).click();
  await expect(page.locator('canvas')).toHaveCount(1);
});
