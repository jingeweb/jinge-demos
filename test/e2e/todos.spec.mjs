import { test, expect, openDemo, dialogAction } from './helpers.mjs';
const simpleRow = (page, title) =>
  page.locator('tbody tr').filter({ has: page.getByRole('cell', { name: title, exact: true }) });
const mvcRow = (page, title) =>
  page
    .locator('.todo-list li')
    .filter({ has: page.locator('label', { hasText: new RegExp(`^${title}$`) }) });
async function addMvc(page, title) {
  await page.getByPlaceholder('What needs to be done?').fill(title);
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(mvcRow(page, title)).toBeVisible();
}

test('simple-todos: add, rename and retain the edited task after reload', async ({ page }) => {
  await openDemo(page, 'simple-todos');
  await dialogAction(
    page,
    () => page.getByRole('button', { name: 'Add', exact: true }).click(),
    '  Buy milk  ',
  );
  await expect(simpleRow(page, 'Buy milk')).toBeVisible();
  await dialogAction(
    page,
    () => simpleRow(page, 'Buy milk').getByRole('button', { name: 'Modify' }).click(),
    'Get oat milk',
  );
  await expect(simpleRow(page, 'Get oat milk')).toBeVisible();
  await page.reload();
  await expect(simpleRow(page, 'Get oat milk')).toBeVisible();
  await expect(simpleRow(page, 'Buy milk')).toHaveCount(0);
});
test('simple-todos: toggle one task and all tasks, then persist checked states', async ({
  page,
}) => {
  await openDemo(page, 'simple-todos');
  await dialogAction(
    page,
    () => page.getByRole('button', { name: 'Add', exact: true }).click(),
    'Second',
  );
  await simpleRow(page, 'test').getByRole('checkbox').check();
  await expect(page.locator('thead input')).not.toBeChecked();
  await page.locator('thead input').check();
  for (const checkbox of await page.locator('tbody input').all())
    await expect(checkbox).toBeChecked();
  await page.reload();
  await expect(page.locator('thead input')).toBeChecked();
  await page.locator('thead input').uncheck();
  for (const checkbox of await page.locator('tbody input').all())
    await expect(checkbox).not.toBeChecked();
});
test('simple-todos: dismiss prompts, reject duplicates and preserve the original task', async ({
  page,
}) => {
  await openDemo(page, 'simple-todos');
  await dialogAction(
    page,
    () => page.getByRole('button', { name: 'Add', exact: true }).click(),
    null,
  );
  await expect(page.locator('tbody tr')).toHaveCount(1);
  const messages = [];
  const handle = async (dialog) => {
    messages.push(dialog.message());
    await dialog.accept(dialog.type() === 'prompt' ? 'test' : undefined);
  };
  page.on('dialog', handle);
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect.poll(() => messages).toEqual(['Please enter title of new todo', 'duplicated']);
  page.off('dialog', handle);
  await expect(page.locator('tbody tr')).toHaveCount(1);
});
test('simple-todos: cancel clearing, delete a row, and confirm clearing the rest', async ({
  page,
}) => {
  await openDemo(page, 'simple-todos');
  await dialogAction(
    page,
    () => page.getByRole('button', { name: 'Add', exact: true }).click(),
    'Second',
  );
  await dialogAction(
    page,
    () => page.getByRole('button', { name: 'Clear', exact: true }).click(),
    null,
    'confirm',
  );
  await expect(page.locator('tbody tr')).toHaveCount(2);
  await simpleRow(page, 'Second').getByRole('button', { name: 'Delete' }).click();
  await expect(simpleRow(page, 'Second')).toHaveCount(0);
  await dialogAction(
    page,
    () => page.getByRole('button', { name: 'Clear', exact: true }).click(),
    undefined,
    'confirm',
  );
  await expect(page.getByRole('cell', { name: 'no todo, please add.' })).toBeVisible();
  await expect(page.locator('thead input')).toBeDisabled();
  await page.reload();
  await expect(page.getByRole('cell', { name: 'no todo, please add.' })).toBeVisible();
});
test('todo-mvc: create tasks with Enter, complete one, filter and use browser history', async ({
  page,
}) => {
  await openDemo(page, 'todo-mvc');
  await expect(page).toHaveURL(/#\/all$/);
  await addMvc(page, 'Buy milk');
  await addMvc(page, 'Write tests');
  await mvcRow(page, 'Buy milk').getByRole('checkbox').check();
  await expect(page.locator('.todo-count strong')).toHaveText('1');
  await page.getByRole('link', { name: 'Active', exact: true }).click();
  await expect(page).toHaveURL(/#\/active$/);
  await expect(page.locator('.todo-list label')).toHaveText(['Write tests']);
  await page.getByRole('link', { name: 'Completed', exact: true }).click();
  await expect(page.locator('.todo-list label')).toHaveText(['Buy milk']);
  await expect(page.getByRole('link', { name: 'Completed', exact: true })).toHaveClass('selected');
  await page.goBack();
  await expect(page.locator('.todo-list label')).toHaveText(['Write tests']);
  await page.reload();
  await expect(page.locator('.todo-list label')).toHaveText(['Write tests']);
});
test('todo-mvc: edit a task by double click and persist it after reload', async ({ page }) => {
  await openDemo(page, 'todo-mvc');
  await addMvc(page, 'Original');
  await mvcRow(page, 'Original').locator('label').dblclick();
  const edit = page.locator('.edit');
  await expect(edit).toBeFocused();
  await edit.fill('Renamed');
  await edit.press('Enter');
  await expect(page.locator('.todo-list label')).toHaveText(['Renamed']);
  await expect(edit).toHaveCount(0);
  await page.reload();
  await expect(page.locator('.todo-list label')).toHaveText(['Renamed']);
});
test('todo-mvc: complete all tasks, clear completed, then add again', async ({ page }) => {
  await openDemo(page, 'todo-mvc');
  await addMvc(page, 'First');
  await addMvc(page, 'Second');
  await page.getByLabel('Mark all as complete').check();
  await expect(page.locator('.todo-count strong')).toHaveText('0');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(0);
  await expect(page.locator('.footer')).toHaveCount(0);
  await addMvc(page, 'After clearing');
  await expect(page.locator('.todo-count strong')).toHaveText('1');
});
test('todo-mvc: remove a single item using its visible hover control', async ({ page }) => {
  await openDemo(page, 'todo-mvc');
  await addMvc(page, 'Remove me');
  await addMvc(page, 'Keep me');
  await mvcRow(page, 'Remove me').hover();
  await mvcRow(page, 'Remove me').locator('button.destroy').click();
  await expect(page.locator('.todo-list label')).toHaveText(['Keep me']);
  await expect(page.locator('.todo-count strong')).toHaveText('1');
  await page.reload();
  await expect(page.locator('.todo-list label')).toHaveText(['Keep me']);
});
