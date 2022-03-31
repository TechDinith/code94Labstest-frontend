import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "../../../styles/commen.fonts.scss";

const AdminDropDownAtom = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>1st menu item</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a
          style={{
            color: "#162427",
            fontFamily: "Satoshi-Medium",
            fontWeight: "700",
          }}
        >
          ADMIN <CaretDownOutlined />
        </a>
      </Dropdown>
    </>
  );
};

export default AdminDropDownAtom;
