// toBe
it("test about number", () => {
  expect(1 + 2).toBe(3);
});

// string toBe
it("test about string", () => {
  expect("Hello World").toBe("Hello World");
});

// boolean toBe
it("test about boolean", () => {
  expect(true).toBe(true);
});

// toEqual
it("test about array", () => {
  const arr = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr).toEqual(arr2);
});

// object toEqual
it("test about object", () => {
  const obj = { name: "John", age: 20 };
  const obj2 = { name: "John", age: 20 };
  expect(obj).toEqual(obj2);
});

// not
it("test about not", () => {
  expect(1 + 2).not.toBe(4);
});
