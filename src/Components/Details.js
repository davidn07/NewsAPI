import React from "react";
import { Row, Col } from "antd";

const Details = (props) => {
  console.log(props.location.state);
  return (
    <div>
      <Row justify='center' gutter={[0, 16]}>
        <Col span={20}>
          <h2>Title: {props.location.state.article.title}</h2>
        </Col>
        <Col span={16}>
          <img
            src={props.location.state.article.urlToImage}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
        <Col span={20}>
          <h3>{props.location.state.article.description}</h3>
        </Col>
        <Col span={20}>
          <h4>{props.location.state.article.content}</h4>
        </Col>
        <Col span={20}>
          <Row justify='end'>
            <Col>
              <h6>- {props.location.state.article.source.name}</h6>
            </Col>
          </Row>
        </Col>  
      </Row>
    </div>
  );
};

export default Details;
