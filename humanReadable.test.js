const humanReadable = require("./humanReadable");

describe("humanReadable", () => {
  test("it returns the time when less than 60 seconds are entered", () => {
    expect(humanReadable(30)).toEqual("00:00:30");
  });
});
