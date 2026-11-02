import { test as base, expect } from '@playwright/test';
export { expect };
export const test = base.extend({
  browserErrors: [
    async ({ context }, use) => {
      const errors = [];
      const listen = (page) => {
        page.on('pageerror', (error) => errors.push(error.message));
        page.on('console', (message) => {
          if (message.type() === 'error') errors.push(message.text());
        });
        page.on('response', (response) => {
          if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
        });
      };
      context.on('page', listen);
      for (const page of context.pages()) listen(page);
      await use(errors);
      expect(errors, 'Unexpected browser errors').toEqual([]);
    },
    { auto: true },
  ],
});
export async function openDemo(page, name, suffix = '') {
  await page.goto(`/jinge-demos/${name}/${suffix}`);
}
export async function dialogAction(page, action, answer, type = 'prompt') {
  const next = page.waitForEvent('dialog');
  const operation = action();
  const dialog = await next;
  expect(dialog.type()).toBe(type);
  if (answer === null) await dialog.dismiss();
  else await dialog.accept(answer);
  await operation;
}
export async function setRange(locator, value) {
  await locator.focus();
  await locator.press('Home');
  // Exercise keyboard interaction rather than assigning the component's state.
  for (let i = 0; i < value; i++) await locator.press('ArrowRight');
}
export const jsonOutput = (locator) => locator.textContent().then((text) => JSON.parse(text));
