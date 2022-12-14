import React, { ChangeEvent, FormEvent } from "react";
import { stopReload } from "custom-util";
import { SetterOrUpdater } from "recoil";

export interface AuthAtomType {
  isLogined: boolean;
  userName?: string | null;
}

export const useLogin = (setAuthState: SetterOrUpdater<AuthAtomType>) => {
  /**
   * 1. form 태그이기에 새로고침을 막기위해 stopReload 사용
   * 2. setAuthState를 통해 로그인 상태 변경
   * 3. 라우팅을 이용해 메인페이지로 이동
   *
   * @todo api 연결 필요, 더미 값으로 처리되어 있는 상태
   */
  const loginRequest = (event: FormEvent) => {
    stopReload(event);
    setAuthState({ isLogined: true, userName: "강성훈" });
  };
  return { loginRequest };
};
