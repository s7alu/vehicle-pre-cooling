import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home page loads and shows the hero headline", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Cool your car before you get in." }),
  ).toBeVisible();
});

test("home page CTA is disabled and footer nav reaches the stub pages", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Register your interest" })).toBeDisabled();

  await page.getByRole("link", { name: "Privacy Policy" }).click();
  await expect(page.getByRole("heading", { name: "Privacy Policy" })).toBeVisible();

  await page.goBack();
  await page.getByRole("link", { name: "Terms" }).click();
  await expect(page.getByRole("heading", { name: "Terms" })).toBeVisible();
});

test("home page has no automatically detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("privacy and terms pages have no automatically detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("/privacy");
  expect(
    (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze()).violations,
  ).toEqual([]);

  await page.goto("/terms");
  expect(
    (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze()).violations,
  ).toEqual([]);
});
