import { Space } from "antd";
import AdminDropDownAtom from "../../atoms/adminDropDownAtom/adminDropDown.atom";
import AvatarAtom from "../../atoms/avatarAtom/avatar.atom";

const AdminDropDownAvatarMol = (props: any) => {
  return (
    <Space direction="horizontal">
      <AdminDropDownAtom /> <AvatarAtom />
    </Space>
  );
};

export default AdminDropDownAvatarMol;
