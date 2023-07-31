const { clickElement } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
  await clickElement(page, "a:nth-child(6)");
  await clickElement(page, "a.movie-seances__time");
});

afterEach(() => {
  page.close();
});

describe("GoToMoveTests", () => {
  test("ChosenOneSeat", async () => {
    await clickElement(page, "div:nth-child(3) > span:nth-child(5)");
    await clickElement(page, "button");
    await page.waitForSelector("h2");
    const actual = await page.$eval("h2", (link) => link.textContent);
    const expected = "Вы выбрали билеты:";
    expect(actual).toContain(expected);
  }, 55000);

  test("ChosenTwoSeats", async () => {
    await clickElement(page, "div:nth-child(3) > span:nth-child(5)");
    await clickElement(page, "div:nth-child(3) > span:nth-child(6)");
    await clickElement(page, "button");
    await page.waitForSelector("h2");
    const actual = await page.$eval("h2", (link) => link.textContent);
    const expected = "Вы выбрали билеты:";
    expect(actual).toContain(expected);
  }, 55000);

  test("NotChosenSeat", async () => {
    const actual = await page.$eval("button", (link) =>
      link.getAttribute("disabled")
    );
    const expected = "true";
    expect(actual).toEqual(expected);
  }, 55000);
});