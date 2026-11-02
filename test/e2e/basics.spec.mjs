import { test, expect, openDemo } from './helpers.mjs';

for (const demo of ['hello-world', 'hello-world-react', 'hello-world-vue']) {
  test(`${demo}: read the greeting and reload on a narrow viewport`, async ({ page }) => {
    await openDemo(page, demo);
    await expect(page.getByText('Hello, World!', { exact: true })).toBeVisible();
    await page.setViewportSize({ width: 375, height: 700 });
    await expect(page.getByText('Hello, World!', { exact: true })).toBeVisible();
    await page.reload();
    await expect(page.getByText('Hello, World!', { exact: true })).toBeVisible();
  });
}
test('if: both presentations toggle together, then can be restored', async ({ page }) => {
  await openDemo(page, 'if');
  await expect(page.getByText('我显示出来啦！', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: '隐藏', exact: true }).first().click();
  await expect(page.getByText('我显示出来啦！', { exact: true })).toHaveCount(0);
  await expect(page.getByText('不见啦!', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: '显示', exact: true })).toBeVisible();
  await page.getByRole('button', { name: '显式', exact: true }).click();
  await expect(page.getByText('我显示出来啦！', { exact: true })).toBeVisible();
  await expect(page.getByText('出来啦！', { exact: true })).toBeVisible();
});
test('watch: each demo action produces its documented observation in the console', async ({
  page,
}) => {
  const logs = [];
  page.on('console', (msg) => {
    if (msg.type() === 'info') logs.push(msg.text());
  });
  await openDemo(page, 'watch');
  await page.getByRole('button', { name: 'Test1', exact: true }).click();
  await expect
    .poll(() => logs.some((s) => s.includes('boy1.children[0].name changed to: cc')))
    .toBe(true);
  await expect.poll(() => logs.some((s) => s.includes('boy1 deep notify.'))).toBe(true);
  await page.getByRole('button', { name: 'Test2', exact: true }).click();
  await expect.poll(() => logs.some((s) => s.includes('boy2.name changed to: ge'))).toBe(true);
  await expect.poll(() => logs.some((s) => s.includes('boy2 children changed'))).toBe(true);
  await page.getByRole('button', { name: 'Test3', exact: true }).click();
  await expect.poll(() => logs.some((s) => /state.n changed to:\s+11/.test(s))).toBe(true);
});
test('ref-and-life-cycle: call the exposed API, hide, remount, then call the new instance', async ({
  page,
}) => {
  const dialogs = [],
    logs = [];
  page.on('dialog', async (dialog) => {
    dialogs.push(dialog.message());
    await dialog.accept();
  });
  page.on('console', (msg) => {
    if (msg.type() === 'info') logs.push(msg.text());
  });
  await openDemo(page, 'ref-and-life-cycle');
  await expect(page.getByText('Hello, Everyone! My name is Bob_0!', { exact: true })).toBeVisible();
  await expect.poll(() => dialogs.length).toBe(1);
  await page.getByRole('button', { name: 'Call Api', exact: true }).click();
  await expect.poll(() => dialogs.length).toBe(2);
  expect(dialogs[1]).toContain('Bob_0');
  await page.getByRole('button', { name: 'Hide Boy', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Call Api' })).toHaveCount(0);
  await expect.poll(() => logs.filter((s) => s === 'before unmount 1').length).toBe(1);
  await expect.poll(() => logs.filter((s) => s === 'before unmount 2').length).toBe(1);
  await page.getByRole('button', { name: 'Show Boy', exact: true }).click();
  await expect(page.getByText('Hello, Everyone! My name is Bob_2!', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Call Api', exact: true }).click();
  await expect.poll(() => dialogs.length).toBe(3);
  expect(dialogs[2]).toContain('Bob_2');
  expect(logs.filter((s) => s === 'after mounted')).toHaveLength(2);
});
test('recursion-component: read the full tree hierarchy, including the deepest leaf', async ({
  page,
}) => {
  await openDemo(page, 'recursion-component');
  const nodes = page.locator('.tree-node');
  await expect(nodes).toHaveText([
    'root',
    'c-1',
    'c-1-1',
    'c-1-1-1',
    'c-1-2',
    'c-2',
    'c-2-1',
    'c-3',
  ]);
  await expect(nodes.filter({ hasText: /^c-1-1-1$/ })).toHaveCSS('padding-left', '60px');
  await expect(nodes.filter({ hasText: /^root$/ })).toHaveClass(/parent/);
  await expect(nodes.filter({ hasText: /^c-3$/ })).toHaveClass(/leaf/);
  await page.setViewportSize({ width: 375, height: 160 });
  await nodes.last().scrollIntoViewIfNeeded();
  await expect(nodes.last()).toBeInViewport();
  await page.reload();
  await expect(nodes).toHaveCount(8);
});
