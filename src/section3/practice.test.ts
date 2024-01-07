import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockedAxios.get.mockClear();
  });

  it("get user with mock", async () => {
    const users = [{ name: "Taro" }, { name: "Hanako" }];
    const resp = { data: users };
    mockedAxios.get.mockResolvedValue(resp);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockedAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
