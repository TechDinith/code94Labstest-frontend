import UpperPageOrg from "../../organisms/upperPageOrg/upperPage.org";
import ContentTableAtom from "../../atoms/contentTableAtom/contentTable.atom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadDataRed } from "../../../_redux/adminSlice";

const FavoritProductsPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

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
  }, [data]);

  const favData = data.filter((product: any) => product.fav === true);

  return (
    <div style={{ margin: 40 }}>
      <UpperPageOrg data={data} headingText="FAVOURITE PRODUCTS" />
      <div style={{ margin: 30 }}>
        <ContentTableAtom data={favData} />
      </div>
    </div>
  );
};

export default FavoritProductsPage;
