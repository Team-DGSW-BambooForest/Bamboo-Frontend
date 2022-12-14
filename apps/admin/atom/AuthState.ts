import { AuthAtomType } from "custom-hooks";
import { atom, selector } from "recoil";

export const AuthState = atom<AuthAtomType>({
  key: "authState",
  default: {
    isLogined: true,
    userName: null,
  },
});

/**
 * 로그인 상태 여부 체크
 * @returns boolean
 */
export const getLoginCheck = selector({
  key: "getLoginCheck",
  get: ({ get }) => {
    const auth = get(AuthState);
    return auth.isLogined;
  },
});
