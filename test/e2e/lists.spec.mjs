import { test, expect, openDemo } from './helpers.mjs';

test('list-rendering: keyed rows carry user input through reversal and sorting', async ({
  page,
}) => {
  await openDemo(page, 'list-rendering');
  const rows = page.locator('ul.list > li');
  const apple = rows.filter({ has: page.locator('.name', { hasText: /^苹果$/ }) });
  await apple.locator('input').fill('Remember this apple');
  await page.getByRole('button', { name: '反转', exact: true }).click();
  await expect(rows.locator('.name')).toHaveText(['土豆', '胡萝卜', '香蕉', '苹果']);
  await expect(apple.locator('input')).toHaveValue('Remember this apple');
  await expect(rows.locator('.idx')).toHaveText(['0', '1', '2', '3']);
  await page.getByRole('button', { name: '按名称排序', exact: true }).click();
  await expect(apple.locator('input')).toHaveValue('Remember this apple');
  await expect(page.locator('.groups .group')).toHaveCount(2);
  await expect(page.locator('.tags li')).toHaveText(['jinge', 'mvvm', 'proxy']);
});
test('list-rendering: unkeyed input stays in its visible slot when data reverses', async ({
  page,
}) => {
  await openDemo(page, 'list-rendering');
  await page.getByRole('button', { name: '当前：keyed', exact: true }).click();
  const rows = page.locator('ul.list > li');
  await rows.first().locator('input').fill('First slot');
  await page.getByRole('button', { name: '反转', exact: true }).click();
  await expect(rows.first().locator('.name')).toHaveText('土豆');
  await expect(rows.first().locator('input')).toHaveValue('First slot');
  await expect(rows.last().locator('input')).toHaveValue('');
});
test('list-rendering: add/measure, remove every row, then recover from the empty state', async ({
  page,
}) => {
  await openDemo(page, 'list-rendering');
  const rows = page.locator('ul.list > li');
  await page.getByRole('button', { name: '添加并测量', exact: true }).click();
  await expect(rows).toHaveCount(5);
  await expect(page.locator('.measure')).toContainText('await nextTick() 后 5 个。');
  while (await rows.count()) {
    const count = await rows.count();
    await rows.first().getByRole('button', { name: '删除', exact: true }).click();
    await expect(rows).toHaveCount(count - 1);
  }
  await expect(page.locator('.empty')).toHaveText('列表为空');
  await page.getByRole('button', { name: '添加并测量', exact: true }).click();
  await expect(rows).toHaveCount(1);
  await expect(page.locator('.empty')).toHaveCount(0);
});
