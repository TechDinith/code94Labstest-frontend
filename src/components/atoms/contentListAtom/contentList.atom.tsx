import { Col, Row, Space } from "antd";
import "./contentList.styles.scss";
import arrow from "../../../assets/arrow.svg";

const ContentListAtom = (props: any) => {
  return (
    <div>
      {props.data.map((product: any) => (
        <Row>
          <Col span={24}>
            <div className="product-preview" key={product.id}>
              <Space direction="horizontal">
                <div>
                  <h3>{product.sku}</h3>
                  <h2>{product.name}</h2>
                  <p> {product.description}</p>
                </div>
                <div style={{ paddingLeft: 1100 }} key={product.key}>
                  <a>
                    <img src={arrow} />
                  </a>
                </div>
              </Space>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ContentListAtom;
