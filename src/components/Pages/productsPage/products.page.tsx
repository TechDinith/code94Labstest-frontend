import UpperPageOrg from "../../organisms/upperPageOrg/upperPage.org";
import pro1 from "../../../assets/product-img.png";
import pro2 from "../../../assets/product-img-1.png";
import pro3 from "../../../assets/product-img-2.png";
import pro4 from "../../../assets/product-img-3.png";
import pro5 from "../../../assets/product-img-4.png";
import { useEffect, useState } from "react";
import ContentTableAtom from "../../atoms/contentTableAtom/contentTable.atom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadDataRed } from "../../../_redux/adminSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then(function (response) {
        setData(response.data);
        dispatch(loadDataRed(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ margin: 40 }}>
      <UpperPageOrg data={data} />
      <div style={{ margin: 30 }}>
        <ContentTableAtom data={data} />
      </div>
    </div>
  );
};

export default ProductsPage;
