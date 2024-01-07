import { delay } from "./async_func";

it("delay return message in designated time", async () => {
  const result = await delay("hello", 1000);
  expect(result).toBe("hello");
});

it("Error occurs if time is negative", async () => {
  try {
    await delay("hello", -1);
  } catch (e: any) {
    expect(e.message).toBe("You can't set negative time");
  }
});
