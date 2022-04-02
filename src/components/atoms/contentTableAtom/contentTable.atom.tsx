import { Button, Modal, Space, Table } from "antd";
import starred from "../../../assets/starred.svg";
import editicon from "../../../assets/edit-icon.svg";
import deleteicon from "../../../assets/delete-icon.svg";
import alerticon from "../../../assets/alert.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductRed } from "../../../_redux/adminSlice";

const ContentTableAtom = (props: any) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteKey, setDeleteKey] = useState(0);

  const showModal = (key: number) => {
    setIsModalVisible(true);
    setDeleteKey(key);
  };

  const handleDelete = () => {
    setIsModalVisible(false);
    dispatch(deleteProductRed(deleteKey));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <a onClick={() => showModal(record.key)}>
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
      <Modal
        visible={isModalVisible}
        centered
        onCancel={handleCancel}
        footer={false}
        bodyStyle={{
          fontFamily: "Satoshi-Medium",
          textAlign: "center",
          height: 254,
        }}
      >
        <img src={alerticon} />
        <h2>ARE YOU SURE?</h2>
        <p>You will not be able to undo this action if you proceed!</p>
        <Button
          key="back"
          onClick={handleCancel}
          style={{ marginRight: 20, borderColor: "#001eb9" }}
        >
          Cancel
        </Button>

        <Button
          key="delete"
          type="primary"
          onClick={handleDelete}
          style={{ backgroundColor: "#001eb9" }}
        >
          Delete
        </Button>
      </Modal>
    </>
  );
};

export default ContentTableAtom;
