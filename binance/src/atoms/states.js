import { atom } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "just do it",
});

export { nameState };
