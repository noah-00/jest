it("it is first time to try mock", () => {
  const mockFn = jest.fn(() => "I am a mock function");
  expect(mockFn()).toBe("I am a mock function");
});

it("mockImplementation", () => {
  const mockFn = jest.fn();
  mockFn.mockImplementation(() => "I am a mock function");
  expect(mockFn()).toBe("I am a mock function");
});
