it("set mock return value", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValue("I am a mock function");
  expect(mockFn()).toBe("I am a mock function");
});

it("set mock return value only once", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValueOnce("I am a mock function");
  expect(mockFn()).toBe("I am a mock function");
  // expect(mockFn()).toBe("I am a mock function"); // Error
});

it("set promise mock return value", async () => {
  const mockFn = jest.fn();
  mockFn.mockResolvedValue("I am a mock function");
  const result = await mockFn();
  expect(result).toBe("I am a mock function");
});
