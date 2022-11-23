import { atom } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "나는 오징어",
});

export { nameState };
