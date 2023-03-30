import React from "react";
import { Provider } from "react-redux";
import store from "../../redux";
import { ConfigProvider } from "antd";
import ru_RU from "antd/locale/ru_RU";

function Wrapper({ children }) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
    </Provider>
  );
}

export default Wrapper;
