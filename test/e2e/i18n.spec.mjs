import { test, expect, openDemo } from './helpers.mjs';

test('i18n: edits and button state survive locale changes including attribute translations', async ({
  page,
}) => {
  await openDemo(page, 'i18n');
  await expect(page.getByRole('heading', { name: '国际化示例', exact: true })).toBeVisible();
  await page.locator('input').first().fill('Alice');
  await page.getByRole('button', { name: '增加计数', exact: true }).click();
  await page.getByRole('button', { name: '点击我', exact: true }).click();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'i18n Demo', exact: true })).toBeVisible();
  await expect(page.getByText('Hello, Alice!', { exact: true })).toBeVisible();
  await expect(page.getByText('Current count: 4', { exact: true })).toBeVisible();
  await expect(page.getByText('Text with an explicit key: 4', { exact: true })).toBeVisible();
  await expect(page.getByPlaceholder('Please input your name', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Button clicked', exact: true })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByRole('button', { name: '中文', exact: true }).click();
  await expect(page.getByText('你好，Alice！', { exact: true })).toBeVisible();
  await expect(page.getByPlaceholder('请输入你的名字', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: '按钮已点击', exact: true })).toBeVisible();
});
test('i18n: translated rich-text link navigates to the details fragment', async ({ page }) => {
  await openDemo(page, 'i18n');
  await page.getByRole('button', { name: 'English', exact: true }).click();
  const link = page.getByRole('link', { name: 'here', exact: true });
  await expect(link).toHaveAttribute('href', '#details');
  await link.click();
  await expect(page).toHaveURL(/#details$/);
  await expect(page.getByRole('heading', { name: 'i18n Demo', exact: true })).toBeVisible();
});
