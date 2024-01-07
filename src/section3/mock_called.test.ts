it("mock is called", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});

it("mock is called twice", () => {
  const mockFn = jest.fn();
  mockFn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

it("mock is called with hoge", () => {
  const mockFn = jest.fn();
  mockFn("hoge");
  expect(mockFn).toHaveBeenCalledWith("hoge");
});
