import { Table, Space } from "antd";
import pro1 from "../../../assets/product-img.png";
import pro2 from "../../../assets/product-img-1.png";
import pro3 from "../../../assets/product-img-2.png";
import pro4 from "../../../assets/product-img-3.png";
import pro5 from "../../../assets/product-img-4.png";
import starred from "../../../assets/starred.svg";
import editicon from "../../../assets/edit-icon.svg";
import deleteicon from "../../../assets/delete-icon.svg";

const ContentAtom = (props: any) => {
  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "IMAGE",
      dataIndex: "image",
      key: "image",
      render: (text: string, record: any) => (
        <Space size="middle">
          <img src={record.image} width="40" height="40" />
        </Space>
      ),
    },
    {
      title: "PRODUCT NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "",
      key: "action",
      render: (text: string, record: any) => (
        <Space size="middle">
          <a>
            <img src={deleteicon} />
          </a>
          <a>
            <img src={editicon} />
          </a>
          <a>
            <img src={starred} />
          </a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sku: "#CA34",
      image: pro1,
      name: "product 1",
      price: "$24.00",
    },
    {
      key: "2",
      sku: "#CA34",
      image: pro2,
      name: "product 2",
      price: "$24.00",
    },
    {
      key: "3",
      sku: "#CA35",
      image: pro3,
      name: "product 3",
      price: "$24.00",
    },
    {
      key: "4",
      sku: "#CA56",
      image: pro4,
      name: "product 4",
      price: "$24.00",
    },
    {
      key: "5",
      sku: "#CA57",
      image: pro5,
      name: "product 5",
      price: "$24.00",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ContentAtom;
