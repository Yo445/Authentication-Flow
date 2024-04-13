
import { atom, useRecoilState } from 'recoil';

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: localStorage.getItem("isLoggedInState") || false,
});

export const userDataState = atom({

  key: 'userDataState',
  default: JSON.parse(localStorage.getItem("userDataState")) || null,
});
