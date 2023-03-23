import { test, expect } from "@playwright/test";

test.describe("Group filter tests", () => {
  test("filter test one", async ({ page }) => {
    await page.goto("https://commitquality.com/");

    await page
      .locator('[placeholder="Filter by product name"]')
      .fill("Product 2");

    await page.locator('[data-testid="filter-button"]').click();

    // Expect count to match
    await expect(page.locator("tbody tr")).toHaveCount(6);
  });

  test("filter test 2", async ({ page }) => {
    await page.goto("https://commitquality.com/");

    await page
      .locator('[placeholder="Filter by product name"]')
      .fill("Product 1");

    await page.locator('[data-testid="filter-button"]').click();

    // Expect count to match
    await expect(page.locator("tbody tr")).toHaveCount(5);
  });
});
