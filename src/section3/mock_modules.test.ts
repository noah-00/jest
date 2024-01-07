import fs from "fs";
import { readFile } from "./mock_modules";

jest.mock("fs");
const mockedFs = jest.mocked(fs);
mockedFs.readFileSync.mockReturnValue("mocked data");

it("readFile returns mocked data", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("mocked data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
