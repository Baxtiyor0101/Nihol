import React from "react";
// import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from "antd";
import { Wrapper } from "./style";
import { useDropDown } from "../../Generic/DropDownApi";

function Navbar() {
  const { loginItems } = useDropDown();
  return (
    <Wrapper>
      <Wrapper.Title>NIHOL</Wrapper.Title>
      <Dropdown
        menu={{
          items: loginItems,
        }}
        trigger={["click"]}
      >
        <Wrapper.Avatar>A</Wrapper.Avatar>
      </Dropdown>
    </Wrapper>
  );
}

export default Navbar;
