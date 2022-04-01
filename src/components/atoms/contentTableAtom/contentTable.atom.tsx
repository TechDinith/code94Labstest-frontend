import { Space, Table } from "antd";
import starred from "../../../assets/starred.svg";
import editicon from "../../../assets/edit-icon.svg";
import deleteicon from "../../../assets/delete-icon.svg";

const ContentTableAtom = (props: any) => {
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

  return (
    <>
      <Table
        style={{ fontFamily: "Satoshi-Medium" }}
        columns={columns}
        dataSource={props.data}
      />
    </>
  );
};

export default ContentTableAtom;
