import { defineConfig, devices } from '@playwright/test';

// next.config.tsのbasePathに合わせる。ルート(/)は404になるので必ず/MyActivity/を見る
const BASE_URL = 'http://localhost:3000';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: `${BASE_URL}/MyActivity/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
