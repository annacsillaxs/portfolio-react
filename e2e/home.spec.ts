import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
	const errors: string[] = [];
	page.on("pageerror", (error) => errors.push(error.message));

	await page.goto("/");

	await expect(page).toHaveTitle(/Anna Seregi/);
	await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Anna Csilla Kun-Seregi/i);
	await expect(page.getByRole("link", { name: "Experience" })).toBeVisible();
	await expect(page.getByRole("img", { name: "Anna Seregi" })).toBeVisible();
	expect(errors).toEqual([]);
});
