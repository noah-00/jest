describe("group about arr", () => {
  it("should be equal [1, 2, 3]", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  it("arr length is correct", () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });
});
