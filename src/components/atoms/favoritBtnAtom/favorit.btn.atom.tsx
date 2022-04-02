import { Button } from "antd";
import starred from "../../../assets/starred.svg";
import { Link } from "react-router-dom";
const FavoritBtnAtom = (props: any) => {
  return (
    <>
      <Button
        style={{
          borderRadius: 5,
          height: 39,
          borderColor: "#001eb9",
        }}
      >
        <Link to="favorites">
          <img src={starred} alt="logo" />
        </Link>
      </Button>
    </>
  );
};

export default FavoritBtnAtom;
