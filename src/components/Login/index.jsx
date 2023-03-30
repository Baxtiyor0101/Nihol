import React, { useRef, useState } from "react";
import { Wrapper } from "./style";
import { useAxios } from "../../hooks/useAxios";
import { errorNotifier } from "../../Generic/Notification";
import { LoadingOutlined } from "@ant-design/icons";

function Login() {
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const [warningAnimation, setWarningAnimation] = useState(false);
  const numberRef = useRef();
  const passwordRef = useRef();
  const playAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  };

  const onKeyDelect = (e) => {
    if (e.key === "Enter" || e.type === "click") return onAuth();
  };

  const onAuth = async () => {
    const password = passwordRef.current.input.value;
    const number = numberRef.current.input.value;
    if (!password || !number) {
      playAnim();
      errorNotifier({ errorStatus: "notFillingError" });
      return;
    }
    setLoading(true);
    const response = await axios({
      url: `/user/sign-in`,
      method: "POST",
      body: {
        password: password,
        phoneNumber: `+998${number}`,
      },
    });
    setLoading(false);
    if (response?.response?.status >= 400)
      return errorNotifier({ errorStatus: response?.response?.status });

    const { token } = response.data.data;
    localStorage.setItem("token", token);
    console.log(response);
  };
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Description>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
        </Wrapper.Description>
        <Wrapper.Input
          ref={numberRef}
          addonBefore="+998"
          bordered={false}
          placeholder="99 999 99 99"
          type="number"
        />
        <Wrapper.Password
          ref={passwordRef}
          onKeyDown={onKeyDelect}
          bordered={false}
          placeholder="parol ..."
        />
        <Wrapper.Button warningAnimation={warningAnimation} onClick={onAuth}>
          {loading ? <LoadingOutlined /> : " Login"}
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default Login;
