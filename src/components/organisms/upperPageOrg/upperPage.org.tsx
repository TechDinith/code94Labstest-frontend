import { Col, Row } from "antd";
import { useState } from "react";
import HeadingAtom from "../../atoms/headingAtom/heading.atom";
import SearchBoxAtom from "../../atoms/searchboxAtom/searchbox.atom";
import AdminDropDownAvatarMol from "../../molecules/adminDropdownAvatarMol/adminDropdownAvatar.mol";
import NewProductBtnFavoritBtnMol from "../../molecules/newProductBtnFavoritBtnMol/newProductBtnFavoritBtn.mol";

const UpperPageOrg = (props: any) => {
  return (
    <>
      <Row justify="end">
        <Col>
          <AdminDropDownAvatarMol />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <HeadingAtom headingText="PRODUCTS" />
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <SearchBoxAtom data={props.data} />
        </Col>
        <Col span={4} style={{ paddingLeft: 70 }}>
          <NewProductBtnFavoritBtnMol />
        </Col>
      </Row>
    </>
  );
};

export default UpperPageOrg;
