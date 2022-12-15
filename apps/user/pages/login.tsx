import React, { FormEvent } from "react";
import { useRecoilState } from "recoil";
import { AuthState } from "../atom/Auth/AuthState";
import { useRouter } from "next/router";
import { useLogin, AuthAtomType } from "custom-hooks";

const Login = () => {
  const [_, setAuthState] = useRecoilState<AuthAtomType>(AuthState);
  /**
   * 페이지 이동을 위해 선언
   */
  const router = useRouter();
  /**
   * 로그인 관련 로직
   * request 함수 외부로 분리, axios 및 react-query
   */
  const request = async () => {
    await new Promise((resolve, reject) => {});
    return {
      userName: "abc",
    };
  };

  const { loginRequest } = useLogin(setAuthState, request);

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        loginRequest(e);
        router.push("/");
      }}
    >
      <input type="text" required name="id" id="id" />
      <input type="password" required name="pw" id="pw" />
      <button>로그인</button>
    </form>
  );
};

export default Login;
