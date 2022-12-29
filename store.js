import { atom } from "recoil";
import { v1 } from "uuid";

export const mode = atom({
  key: `${v1}`,
  default: false,
});
