import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  const shoppingList = new ShoppingList();

  it("addItem", () => {
    shoppingList.addItem("apple");
    expect(shoppingList.list).toEqual(["apple"]);
  });

  it("removeItem", () => {
    shoppingList.removeItem("apple");
    expect(shoppingList.list).not.toContain("apple");
  });

  it("Error occurs if list is empty", () => {
    expect(() => shoppingList.removeItem("grape")).toThrow("アイテム: grape は存在しません");
  });
});
