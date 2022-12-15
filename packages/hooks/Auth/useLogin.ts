import React, { ChangeEvent, FormEvent } from "react";
import { stopReload } from "custom-util";
import { SetterOrUpdater } from "recoil";

export interface AuthAtomType {
  isLogined: boolean;
  userName?: string | null;
}

type RequestType = {
  userName: string;
};

type UseLoginReturns = {
  loginRequest: (event: FormEvent<Element>) => Promise<void>;
};

export const useLogin = (
  setAuthState: SetterOrUpdater<AuthAtomType>,
  request: () => Promise<RequestType>
): UseLoginReturns => {
  /**
   * 1. form 태그이기에 새로고침을 막기위해 stopReload 사용
   * 2. setAuthState를 통해 로그인 상태 변경
   * 3. 라우팅을 이용해 메인페이지로 이동
   *
   * @todo api 연결 필요, 더미 값으로 처리되어 있는 상태
   */
  const loginRequest = async (event: FormEvent) => {
    /**
     * 새로고침 prevent
     */
    stopReload(event);
    /**
     * request를 통한 username 및 login 여부 check
     */
    try {
      const { userName } = await request();
      setAuthState({ isLogined: true, userName });
    } catch (e) {
      /**
       * 에러가 발생할 시
       * @todo 에러 핸들링 필요
       */
      console.log("error");
    }
  };
  return { loginRequest };
};
