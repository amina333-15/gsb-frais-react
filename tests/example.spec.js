// @ts-check
import { test, expect } from '@playwright/test';
//test('has title', async ({ page }) => {
//  await page.goto('http://localhost:3000/');
//
  // Expect a title "to contain" a substring.
//  await expect(page).toHaveTitle(/GSB Frais/);
//});
//test('connexion link', async ({ page }) => {
//  await page.goto('http://localhost:3000/login');
//
  // Click the get started link.
//  await page.getByRole('link', { name: 'Connexion' }).click();
//
  // Expects page to have a heading with the name of Installation.
//  await expect(page.getByRole('heading', { name: 'Connexion' })).toBeVisible();
//});
//

// Cas de test 1 :
//test('connexion', async ({ page }) => {
 // await page.goto('http://localhost:3000/login');

  //await page.fill('input[name="login"]', 'Andre');
 // await page.fill('input[name="password"]', 'secret');
 // await page.click('button[type="submit"]');
 // await expect(page).toHaveURL('http://localhost:3000/dashboard');
//});

//Cas de test 2 :
//test('échec de connexion', async ({ page }) => {
  //await page.goto('http://localhost:3000/login');

 // await page.fill('input[name="login"]', 'Andrey');
  //await page.fill('input[name="password"]', 'secreyt');
 // await page.click('button[type="submit"]');

  //page.on("dialog", async (dialog) => { 
 //   expect(dialog.type()).toContain("alert");
   // expect(dialog.message()).toContain("Échec de la connexion");
  //  await dialog.accept(); 
 // });
//});

//Cas de test 3 :
//test('rafraichissement', async ({ page }) => {
  //await page.goto('http://localhost:3000/login');

  //await page.fill('input[name="login"]', 'Andre');
  //await page.fill('input[name="password"]', 'secret');
  //await page.click('button[type="submit"]');
  //await expect(page).toHaveURL('http://localhost:3000/dashboard');
  //await page.reload();
  //await expect(page).toHaveURL('http://localhost:3000/dashboard');

//});



// Cas de test 4 : Déconnexion
test('Deconnection', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[name="login"]', 'Andre');
  await page.fill('input[name="password"]', 'secret');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('http://localhost:3000/dashboard');

  await page.click('button#logoutUser'); 

  await expect(page).toHaveURL('http://localhost:3000/login');
});
