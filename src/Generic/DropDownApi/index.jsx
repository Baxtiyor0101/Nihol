import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { DropDownContentWrapper } from "../Styles";

const customIconStyle = {
  fontSize: "18px",
};
export const useDropDown = () => {
  const loginItems = [
    {
      label: (
        <DropDownContentWrapper>
          <SettingOutlined style={customIconStyle} />
          settings
        </DropDownContentWrapper>
      ),
      key: "0",
    },
    {
      label: (
        <DropDownContentWrapper>
          <TranslationOutlined style={customIconStyle} /> change language
        </DropDownContentWrapper>
      ),
      key: "1",
    },
    {
      label: (
        <DropDownContentWrapper style={{ color: "red" }}>
          <LogoutOutlined style={{ ...customIconStyle, color: "red" }} />
          log out
        </DropDownContentWrapper>
      ),
      key: "3",
    },
  ];
  return { loginItems };
};
