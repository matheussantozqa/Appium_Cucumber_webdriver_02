import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import pomSearchFilters from '../../fixtures/pomSearchFilters.json' assert { type: 'json' };

/////////-----Backgroung-------/////////

Given(/^the user is on the "Catalog" screen$/, async () => {
    await expect($(pomSearchFilters.menuIcon)).toBeDisplayed();
});

When(/^the user clicks the Sorting icon filter$/, async () => {
    await $(pomSearchFilters.iconFilter).click();     
});

/////////---------------Sorting by Name-Descending-------------------------------------

When(/^the user selects the option "Name - Descending"$/, async () => {
        const nameDesc = await $(pomSearchFilters.nameDescending);

    await nameDesc.waitForDisplayed({
      timeout: 10000,
    });

    await nameDesc.click();
  }
);   


Then(/^the products should be displayed in descending alphabetical order by name$/, async () => {
    const productElements = await $$(
      pomSearchFilters.nameItens
    );

    const productNames = [];
    for (const element of productElements) {
      const text = await element.getText();
      productNames.push(text);
    }

    const sortedDesc = [...productNames].sort((a, b) =>
      b.localeCompare(a)
    );

    expect(productNames).toEqual(sortedDesc);
  }
);

/////////----------------Sorting by Name-Ascending------------------------------------

When(/^the user selects the option "Name - Ascending"$/, async () => {
  const nameAsc = await $(pomSearchFilters.nameAscending);

  await nameAsc.waitForDisplayed({
    timeout: 10000,
  });

  await nameAsc.click();
});

Then(/^the products should be displayed in ascending alphabetical order by name$/, async () => {
  const productElements = await $$(
    pomSearchFilters.nameItens
  );

  const productNames = [];
  for (const element of productElements) {
    const text = await element.getText();
    productNames.push(text);
  }

  const sortedAsc = [...productNames].sort((a, b) =>
    a.localeCompare(b)
  );

  expect(productNames).toEqual(sortedAsc);
});

/////////-----------------Sorting by Price-Ascending-----------------------------------


When(/^the user selects the option "Price - Ascending"$/, async () => {
  const priceAsc = await $(pomSearchFilters.priceAscending);

  await priceAsc.waitForDisplayed({
    timeout: 10000,
  });

  await priceAsc.click();
});

Then(/^the products should be displayed in ascending alphabetical order by price$/, async () => {
  const priceElements = await $$(
    pomSearchFilters.priceItens
  );

  const prices = [];

  for (const element of priceElements) {
    const text = await element.getText();

    const numericPrice = Number(
      text
        .replace(/[^\d,.-]/g, '')
        .replace(',', '.')
    );

    prices.push(numericPrice);
  }

  const sortedAsc = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedAsc);
});

/////////-----------------Sorting by Price-Descending-----------------------------------


When(/^the user selects the option "Price - Descending"$/, async () => {
  const priceDesc = await $(pomSearchFilters.priceDescending);

  await priceDesc.waitForDisplayed({
    timeout: 10000,
  });

  await priceDesc.click();
});

Then(/^the products should be displayed in descending alphabetical order by price$/, async () => {
  const priceElements = await $$(
    pomSearchFilters.priceItens
  );

  const prices = [];

  for (const element of priceElements) {
    const text = await element.getText();

    const numericPrice = Number(
      text
        .replace(/[^\d,.-]/g, '')
        .replace(',', '.')
    );

    prices.push(numericPrice);
  }

  const sortedDesc = [...prices].sort((a, b) => b - a);

  expect(prices).toEqual(sortedDesc);
});
