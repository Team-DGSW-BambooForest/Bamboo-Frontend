import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { useRecoilState } from "recoil";
import { AuthState } from "../atom/AuthState";
import { useLogin, AuthAtomType } from "custom-hooks";

const Login = () => {
  const [_, setAuthState] = useRecoilState<AuthAtomType>(AuthState);
  /**
   * 페이지 이동을 위해 선언
   */
  const router = useRouter();
  /**
   * 로그인 관련 로직
   */
  const { loginRequest } = useLogin(setAuthState);

  return (
    <form
      onSubmit={(e: FormEvent) => {
        loginRequest(e);
        router.push("/");
      }}
    >
      <input type="text" name="" id="" />
      <input type="password" name="" id="" />
      <button>login</button>
    </form>
  );
};

export default Login;
