import { Space } from "antd";
import FavoritBtnAtom from "../../atoms/favoritBtnAtom/favorit.btn.atom";
import NewProductBtnAtom from "../../atoms/newProductBtnAtom/newproduct.btn.atom";

const NewProductBtnFavoritBtnMol = (props: any) => {
  return (
    <Space direction="horizontal">
      <NewProductBtnAtom /> <FavoritBtnAtom />
    </Space>
  );
};

export default NewProductBtnFavoritBtnMol;
