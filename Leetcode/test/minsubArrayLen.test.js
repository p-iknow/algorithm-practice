const {assert} = require("chai");

describe("Minimum Size Subarray Sum", () => {
  it("should return the minimal length", () => {
    assert.strictEqual(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
  });

  it("should return 0 when there isn' one", () => {
    assert.strictEqual(minSubArrayLen(30, [2, 3, 1, 2, 4, 3]), 0);
  });
});
