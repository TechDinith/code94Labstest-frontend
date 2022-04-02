import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Input, Space } from "antd";
import { useState } from "react";
import "./searchbox.style.scss";
import { useDispatch } from "react-redux";
import { searchProductRed } from "../../../_redux/adminSlice";
import { Link } from "react-router-dom";

const SearchBoxAtom = (props: any) => {
  const dispatchVar = useDispatch();

  const filterVal = (str: string) => ({
    value: props.data
      .filter((product: any) => product.name.includes(str))
      .map((filtered: any) => filtered.name),
  });

  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [filterVal(searchText)]);
  };

  const onSelect = (data: string) => {
    // console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
    // console.log("value", value);
  };

  const dispatchHandler = () => {
    dispatchVar(searchProductRed(value));
  };

  return (
    <>
      <Space direction="horizontal">
        <div
          style={{
            borderRadius: 25,
            backgroundColor: "#f7f7f7",
            height: 35,
          }}
        >
          <AutoComplete
            options={options}
            style={{ width: 557 }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Search for Products"
            onChange={onChange}
          />
          <Button
            style={{
              backgroundColor: "#001eb9",
              fontFamily: "Satoshi-Medium",
              width: 141,
              marginRight: 5,
              marginTop: 1,
            }}
            type="primary"
            icon={<SearchOutlined />}
            shape="round"
            onClick={dispatchHandler}
          >
            <Link to="searchresults">Search</Link>
          </Button>
        </div>
      </Space>
    </>
  );
};

export default SearchBoxAtom;
