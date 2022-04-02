import { Col, Row, Space } from "antd";
import HeadingAtom from "../../atoms/headingAtom/heading.atom";
import AdminDropDownAvatarMol from "../../molecules/adminDropdownAvatarMol/adminDropdownAvatar.mol";
import arrow from "../../../assets/arrow.svg";
const NewEditProductUpperPageOrg = (props: any) => {
  return (
    <>
      <Row justify="end">
        <Col>
          <AdminDropDownAvatarMol />
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Space direction="horizontal">
            <div style={{ paddingTop: 14 }}>
              <HeadingAtom headingText={props.headingText} />
            </div>
            <img src={arrow} />
            <h2 style={{ paddingTop: 6, color: "#001eb9" }}>
              {props.subheading}
            </h2>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default NewEditProductUpperPageOrg;
