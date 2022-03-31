import { Avatar, Badge } from "antd";

const AvatarAtom = () => {
  return (
    <>
      <span>
        <Badge dot color={"green"} offset={[0, 30]}>
          <Avatar
            size={"large"}
            style={{ color: "#001eb9", backgroundColor: "#001eb9" }}
          />
        </Badge>
      </span>
    </>
  );
};

export default AvatarAtom;
