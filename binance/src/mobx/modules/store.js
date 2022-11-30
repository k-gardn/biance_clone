import { action, makeObservable, observable } from "mobx";

//예시
const Store = observable({
  // state
  num: 0,

  // action
  increaseAction(num) {
    this.num = this.num + num;
  },

  decreaseAction(num) {
    this.num = this.num - num;
  },
});

export default Store;
