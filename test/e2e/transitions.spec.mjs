import { test, expect, openDemo } from './helpers.mjs';

test('transition: appear visibly animates on first entry', async ({ page }) => {
  await openDemo(page, 'transition');
  const appearing = page.locator('body > .flex').nth(1).locator('p');
  await expect
    .poll(() => appearing.evaluate((el) => Number(getComputedStyle(el).opacity)))
    .toBeGreaterThan(0);
  await expect
    .poll(() => appearing.evaluate((el) => Number(getComputedStyle(el).opacity)))
    .toBeLessThan(1);
  await expect(appearing).toHaveCSS('opacity', '1');
});
test('transition: hide and restore opacity while retaining the original element', async ({
  page,
}) => {
  await openDemo(page, 'transition');
  const row = page.locator('body > .flex').nth(0);
  const message = row.locator('p');
  const original = await message.elementHandle();
  await row.getByRole('button', { name: 'Hide', exact: true }).click();
  await expect(message).toHaveCSS('opacity', '0');
  await expect(message).toHaveCount(1);
  await row.getByRole('button', { name: 'Show', exact: true }).click();
  await expect(message).toHaveCSS('opacity', '1');
  expect(await original.evaluate((el) => el.isConnected)).toBe(true);
});
test('transition: after-leave destruction removes and then recreates content', async ({ page }) => {
  await openDemo(page, 'transition');
  const row = page.locator('body > .flex').nth(2);
  const message = row.locator('p');
  const original = await message.elementHandle();
  await row.getByRole('button', { name: 'Hide', exact: true }).click();
  await expect(message).toHaveCount(0);
  expect(await original.evaluate((el) => el.isConnected)).toBe(false);
  await row.getByRole('button', { name: 'Show', exact: true }).click();
  await expect(message).toHaveText('Hello, World!');
  await expect(message).toHaveCSS('opacity', '1');
});
test('transition: delete a list row after its leave animation and add a new row', async ({
  page,
}) => {
  await openDemo(page, 'transition');
  const group = page.locator('body > .flex').nth(3);
  const rows = group.locator(':scope > .flex');
  await expect(rows).toHaveCount(4);
  await rows.first().getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(rows).toHaveCount(3);
  await expect(rows.locator(':scope > div')).toHaveText(['2', '3', '4']);
  await page.getByRole('button', { name: 'Add Item', exact: true }).click();
  await expect(rows).toHaveCount(4);
  await expect(rows.last()).toHaveCSS('opacity', '1');
});
