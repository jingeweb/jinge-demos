import { test, expect, openDemo, setRange } from './helpers.mjs';

test('context: theme and primary color propagate to deep descendants', async ({ page }) => {
  await openDemo(page, 'context');
  await expect(page.locator('.badge')).toHaveText('浅色');
  await page.getByRole('button', { name: '切换明暗', exact: true }).click();
  await expect(page.locator('.layout')).toHaveClass(/dark/);
  await expect(page.locator('.badge')).toHaveText('深色');
  await expect(page.locator('.deep')).toContainText('主题：dark');
  await page.getByRole('button', { name: '切换主色', exact: true }).click();
  await expect(page.locator('.deep code')).toHaveText('#d1242f');
  await expect(page.locator('.badge')).toHaveCSS('border-top-color', 'rgb(209, 36, 47)');
  await page.getByRole('button', { name: '切换明暗', exact: true }).click();
  await expect(page.locator('.badge')).toHaveText('浅色');
});
test('context: disable and resize the shared form, then unlock for editing', async ({ page }) => {
  await openDemo(page, 'context');
  await page.getByRole('button', { name: '切换禁用', exact: true }).click();
  for (const input of await page.locator('.preview input').all())
    await expect(input).toBeDisabled();
  await expect(page.locator('.deep')).toContainText('表单禁用：是');
  await page.getByRole('button', { name: '切换标签宽度', exact: true }).click();
  await expect(page.locator('.preview .label').first()).toHaveCSS('width', '120px');
  await page.getByRole('button', { name: '切换禁用', exact: true }).click();
  await page.locator('.preview input').first().fill('Alice');
  await expect(page.locator('.preview input').first()).toHaveValue('Alice');
  await expect(page.locator('pre.error')).not.toBeEmpty();
});
test('slots: read fallback/named/forwarded content and use the scoped field', async ({ page }) => {
  await openDemo(page, 'slots');
  const card = (title) =>
    page.locator('.card').filter({ has: page.locator('.card-header', { hasText: title }) });
  await expect(card('没有默认插槽').locator('.card-body')).toContainText(
    '没有传入默认插槽时显示这段兜底内容。',
  );
  await expect(card('命名插槽').locator('.card-footer')).toHaveText(
    '通过 slot:footer 传入的页脚。',
  );
  await expect(card('透传').locator('.card-footer')).toContainText(
    '这段内容来自 App，经 Panel 透传到 Card 的 footer 插槽。',
  );
  const input = page.getByLabel('昵称');
  await expect(input).toHaveAttribute('placeholder', '由 Field 组件传入的 placeholder');
  await input.fill('Scoped name');
  await expect(input).toHaveValue('Scoped name');
});
test('slots: typing in a slotted field updates text without replacing the input', async ({
  page,
}) => {
  await openDemo(page, 'slots');
  const card = page
    .locator('.card')
    .filter({ has: page.locator('.card-header', { hasText: '插槽是函数，内容是响应式的' }) });
  await card.locator('input').fill('Alice');
  await expect(card.locator('strong')).toHaveText('Alice');
  await expect(card.locator('input')).toBeFocused();
  await card.locator('input').fill('');
  await expect(card.locator('strong')).toHaveText('');
});
test('events: child counter uses the current slider step', async ({ page }) => {
  await openDemo(page, 'events');
  await page.getByRole('button', { name: '+', exact: true }).click();
  await expect(page.locator('.counter-value')).toHaveText('2');
  await setRange(page.getByRole('slider'), 3); // min=1: Home plus 3 arrows gives 4.
  await page.getByRole('button', { name: '+', exact: true }).click();
  await expect(page.locator('.counter-value')).toHaveText('6');
  await page.getByRole('button', { name: '-', exact: true }).click();
  await expect(page.locator('.counter-value')).toHaveText('2');
  await expect(page.locator('.log li').first()).toHaveText('change 事件：2');
});
test('events: controlled and uncontrolled inputs display changes and submit without reload', async ({
  page,
}) => {
  await openDemo(page, 'events');
  const controlled = page
    .locator('label.row')
    .filter({ has: page.locator('.label', { hasText: /^受控$/ }) });
  const uncontrolled = page
    .locator('label.row')
    .filter({ has: page.locator('.label', { hasText: /^非受控$/ }) });
  await controlled.locator('input').fill('Alice');
  await expect(controlled.locator('code')).toHaveText('Alice');
  await expect(page.locator('form input')).toHaveValue('Alice');
  await uncontrolled.locator('input').fill('Bob');
  await expect(uncontrolled.locator('code')).toHaveText('Bob');
  await page.getByRole('button', { name: '提交表单', exact: true }).click();
  await expect(page.locator('.log li').first()).toHaveText('submit：已阻止默认提交');
  await expect(uncontrolled.locator('input')).toHaveValue('Bob');
});
test('events: switching handlers detaches the previous callback', async ({ page }) => {
  await openDemo(page, 'events');
  await page.getByRole('button', { name: '当前 handler：A', exact: true }).click();
  await expect(page.locator('.log li')).toHaveText(['handler A 被调用']);
  await page.getByRole('button', { name: '切换 handler', exact: true }).click();
  await page.getByRole('button', { name: '当前 handler：B', exact: true }).click();
  await expect(page.locator('.log li')).toHaveText(['handler B 被调用', 'handler A 被调用']);
});
test('events: capture/target/bubble, double click, keyboard and delegation', async ({ page }) => {
  await openDemo(page, 'events');
  await page.getByRole('button', { name: '点我', exact: true }).click();
  await expect(page.locator('.log li')).toHaveText([
    'bubble：外层冒泡',
    'target：内层按钮',
    'capture：外层捕获',
  ]);
  await page.getByRole('button', { name: '双击我', exact: true }).dblclick();
  await expect(page.locator('.log li').first()).toHaveText('dblclick：双击');
  await page.getByPlaceholder('在这里按键').press('Enter');
  await expect(
    page.getByPlaceholder('在这里按键').locator('xpath=following-sibling::code[1]'),
  ).toHaveText('Enter');
  await page.locator('.delegate li', { hasText: '条目 B' }).click();
  await expect(page.locator('.log li').first()).toHaveText('delegate：b');
});
test('styling: theme controls change visible CSS and SVG colors', async ({ page }) => {
  await openDemo(page, 'styling');
  await page.getByRole('button', { name: '切换明暗', exact: true }).click();
  await expect(page.locator('.theme')).toHaveCSS('background-color', 'rgb(22, 27, 34)');
  await expect(page.locator('svg circle')).toHaveAttribute('fill', '#e6edf3');
  await page.getByRole('button', { name: '切换主色', exact: true }).click();
  await expect(page.locator('svg rect')).toHaveAttribute('fill', '#1a7f37');
  await expect(page.locator('.dot')).toHaveCSS('background-color', 'rgb(26, 127, 55)');
  await page.getByRole('button', { name: '切换圆角', exact: true }).click();
  await expect(page.locator('.theme')).toHaveCSS('border-top-left-radius', '0px');
  await page.getByRole('button', { name: '切换激活态', exact: true }).click();
  await expect(page.getByText('激活状态：off', { exact: true })).toBeVisible();
  await expect(page.locator('.dot')).not.toHaveClass(/on/);
});
test('styling: keyboard slider updates progress text and rendered width', async ({ page }) => {
  await openDemo(page, 'styling');
  await setRange(page.getByRole('slider'), 75);
  await expect(page.locator('.theme code')).toHaveText('75%');
  await expect
    .poll(async () =>
      page
        .locator('.bar-inner')
        .evaluate(
          (el) => el.getBoundingClientRect().width / el.parentElement.getBoundingClientRect().width,
        ),
    )
    .toBeCloseTo(0.75, 2);
});
