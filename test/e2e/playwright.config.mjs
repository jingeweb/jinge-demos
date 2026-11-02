import { defineConfig } from '@playwright/test';
import path from 'node:path';

import { results } from './demos.mjs';
const port = Number(process.env.DEMOS_TEST_PORT ?? 5199);
export default defineConfig({
  testDir: import.meta.dirname,
  testMatch: '*.spec.mjs',
  fullyParallel: true,
  workers: 2,
  forbidOnly: !!process.env.CI,
  retries: 0,
  timeout: 20000,
  expect: { timeout: 5000 },
  outputDir: path.join(results, 'artifacts'),
  reporter: [
    ['list'],
    ['json', { outputFile: path.join(results, 'results.json') }],
    ['html', { outputFolder: path.join(results, 'report'), open: 'never' }],
  ],
  use: {
    browserName: 'chromium',
    channel: process.env.PLAYWRIGHT_CHANNEL ?? 'chrome',
    headless: true,
    reducedMotion: 'no-preference',
    baseURL: `http://127.0.0.1:${port}`,
    viewport: { width: 1100, height: 850 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: `"${process.execPath}" "${import.meta.dirname}/server.mjs"`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
  },
});
