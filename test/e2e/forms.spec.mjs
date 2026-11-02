import { test, expect, openDemo, jsonOutput, setRange } from './helpers.mjs';
const field = (page, name) =>
  page
    .locator('.field')
    .filter({ has: page.locator('.label', { hasText: new RegExp(`^${name}$`) }) });

test('form: edit text, numbers, date and multi-line content in the live summary', async ({
  page,
}) => {
  await openDemo(page, 'form');
  await field(page, '姓名').locator('input').fill('Alice');
  await field(page, '年龄').locator('input').fill('28');
  await field(page, '密码').locator('input').fill('secret123');
  await field(page, '生日').locator('input').fill('1998-06-15');
  await field(page, '简介').locator('textarea').fill('First line\nSecond line');
  await expect(field(page, '姓名').locator('.counter')).toHaveText('5');
  await expect
    .poll(() => jsonOutput(page.locator('pre.output')))
    .toMatchObject({
      name: 'Alice',
      age: 28,
      password: 'secret123',
      birthday: '1998-06-15',
      bio: 'First line\nSecond line',
    });
});
test('form: select radio, cities, hobbies, volume and agreement, then submit', async ({ page }) => {
  await openDemo(page, 'form');
  await page.getByRole('radio', { name: '男', exact: true }).check();
  await page.locator('select:not([multiple])').selectOption('hangzhou');
  await page.locator('select[multiple]').selectOption(['shenzhen', 'hangzhou']);
  await page.getByRole('checkbox', { name: '阅读', exact: true }).uncheck();
  await page.getByRole('checkbox', { name: '写代码', exact: true }).check();
  await page.getByRole('checkbox', { name: '协议 我已阅读并同意用户协议', exact: true }).check();
  await setRange(page.getByRole('slider'), 65);
  await expect
    .poll(() => jsonOutput(page.locator('pre.output')))
    .toMatchObject({
      gender: 'male',
      city: 'hangzhou',
      cities: ['shenzhen', 'hangzhou'],
      hobbies: ['coding'],
      volume: 65,
      agree: true,
    });
  await page.getByRole('button', { name: '提交', exact: true }).click();
  await expect(page.locator('.ok')).toHaveText('已提交，数据见右侧汇总。');
});
test('form: lock prevents editing, unlock restores it, and reset restores controls', async ({
  page,
}) => {
  await openDemo(page, 'form');
  await field(page, '姓名').locator('input').fill('Changed');
  await page.getByRole('button', { name: '锁定表单', exact: true }).click();
  await expect(field(page, '姓名').locator('input')).toBeDisabled();
  await expect(page.locator('select[multiple]')).toBeDisabled();
  await page.getByRole('button', { name: '解锁表单', exact: true }).click();
  await expect(field(page, '姓名').locator('input')).toBeEditable();
  await page.getByRole('button', { name: '提交', exact: true }).click();
  await page.getByRole('button', { name: '重置', exact: true }).first().click();
  await expect(field(page, '姓名').locator('input')).toHaveValue('jinge');
  await expect(field(page, '年龄').locator('input')).toHaveValue('3');
  await expect(page.getByRole('radio', { name: '女', exact: true })).toBeChecked();
  await expect(page.locator('select[multiple]')).toHaveValues(['shanghai', 'beijing']);
  await expect(page.getByRole('checkbox', { name: '阅读', exact: true })).toBeChecked();
  await expect(page.locator('.ok')).toHaveCount(0);
});
test('form-input: text, textarea and checkbox changes reach the JSON output', async ({ page }) => {
  await openDemo(page, 'form-input');
  await page.locator('#t').fill('Alice');
  await expect(page.locator('#t2')).toHaveAttribute('placeholder', 'input Alice');
  await page.locator('#t2').fill('Hello\nWorld');
  await page.locator('#t3').uncheck();
  await expect
    .poll(() => jsonOutput(page.locator('pre')))
    .toMatchObject({ t: 'Alice', t2: 'Hello\nWorld', t3: false });
});
test('form-input: multi-checkbox, radio and native selects update their values', async ({
  page,
}) => {
  await openDemo(page, 'form-input');
  const apple = page.locator('input[name="t4"]').nth(0);
  await apple.check();
  await page.locator('input[name="t4"]').nth(1).check();
  await apple.uncheck();
  await page.locator('input[name="t5"]').nth(0).check();
  await page.locator('select:not([multiple])').selectOption('Orange');
  await expect
    .poll(() => jsonOutput(page.locator('pre')))
    .toMatchObject({ t4: ['Orange'], t5: 'Apple', t6: 'Orange' });
  await page.locator('select[multiple]').selectOption(['Apple', 'Banana']);
  await expect
    .poll(() => jsonOutput(page.locator('pre')))
    .toMatchObject({ t4: ['Apple', 'Banana'], t7: ['Apple', 'Banana'] });
});
test('form-input: Test button writes model values back into visible controls', async ({ page }) => {
  await openDemo(page, 'form-input');
  await page.locator('#t').fill('Changed');
  await page.locator('#t2').fill('Changed too');
  await page.getByRole('button', { name: 'Test', exact: true }).click();
  await expect(page.locator('#t')).toHaveValue('hello');
  await expect(page.locator('#t2')).toHaveValue('hello');
  await expect(page.locator('select:not([multiple])')).toHaveValue('Banana');
});
