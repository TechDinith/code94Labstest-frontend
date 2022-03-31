import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const SearchBoxAtom = (props: any) => {
  const onSearch = (value: string) => console.log(value);
  return (
    <>
      <Space direction="vertical">
        <Input
          placeholder="Search for Products"
          suffix={
            <Button
              style={{ backgroundColor: "#001eb9" }}
              type="primary"
              icon={<SearchOutlined />}
              shape="round"
            >
              Search
            </Button>
          }
          style={{ borderRadius: 25 }}
        />
      </Space>
    </>
  );
};

export default SearchBoxAtom;
