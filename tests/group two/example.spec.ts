import { test, expect } from "@playwright/test";

test("@Subscribe filter test ", async ({ page }) => {
  await page.goto("https://commitquality.com/");

  await page
    .locator('[placeholder="Filter by product name"]')
    .fill("Product 2");

  await page.locator('[data-testid="filter-button"]').click();

  // Expect count to match
  await expect(page.locator("tbody tr")).toHaveCount(6);
});
