import UpperPageOrg from "../../organisms/upperPageOrg/upperPage.org";
import pro1 from "../../../assets/product-img.png";
import pro2 from "../../../assets/product-img-1.png";
import pro3 from "../../../assets/product-img-2.png";
import pro4 from "../../../assets/product-img-3.png";
import pro5 from "../../../assets/product-img-4.png";
import { useState } from "react";
import ContentListAtom from "../../atoms/contentListAtom/contentList.atom";
import store from "../../../_redux/store";
import { Button } from "antd";
import { useSelector } from "react-redux";

const SearchResultPage = () => {
  const { result } = useSelector((state: any) => state.adminSlice);

  const [data, setData] = useState([
    {
      key: "1",
      sku: "#CA34",
      qty: "1",
      desc: "just a product",
      image: pro1,
      name: "product 1",
      price: "$24.00",
    },
    {
      key: "2",
      sku: "#CA34",
      qty: "1",
      desc: "just a product",
      image: pro2,
      name: "product 2",
      price: "$24.00",
    },
    {
      key: "3",
      sku: "#CA35",
      qty: "1",
      desc: "just a product",
      image: pro3,
      name: "product 3",
      price: "$24.00",
    },
    {
      key: "4",
      sku: "#CA56",
      qty: "1",
      desc: "just a product",
      image: pro4,
      name: "product 4",
      price: "$24.00",
    },
    {
      key: "5",
      sku: "#CA57",
      qty: "1",
      desc: "just a product",
      image: pro5,
      name: "product 5",
      price: "$24.00",
    },
  ]);

  const filtered = data.filter((product) => product.name.includes(result));

  return (
    <div style={{ margin: 40 }}>
      <Button onClick={() => console.log("searchResult", filtered)}>
        clickme
      </Button>

      <UpperPageOrg data={data} />
      <div style={{ marginLeft: 200, marginRight: 200, marginTop: 50 }}>
        <ContentListAtom data={filtered} />
      </div>
    </div>
  );
};

export default SearchResultPage;
