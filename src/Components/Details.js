import React from "react";
import { Row, Col, Image, Typography, Space } from "antd";
import moment from 'moment'
import { Link } from "react-router-dom";

const Details = ({location :{state :{article}}}) => {

  const {Paragraph, Text} = Typography
  return (
    <div>
      <Row justify='center' gutter={[0, 16]}>
        <Col span={20}>
          <h2>Title: {article.title}</h2>
        </Col>
        <Col span={16}>
          <Image
            src={article.urlToImage}
            
          />
        </Col>
        <Col span={20}>
          <Space direction='vertical'>
  <Text type='danger'>{moment(article.publishedAt).format('MMMM Do YYYY')}</Text>
  
          <h3>{article.description}</h3>
  <Paragraph>{article.content}</Paragraph>
  <a href={article.url}>Click Here To Know More</a>
          </Space>
          
        </Col>
      
        <Col span={20}>
          <Row justify='end'>
            <Col>
            <Text type='warning'>{article.source.name}</Text>
            </Col>
          </Row>
        </Col>  
      </Row>
    </div>
  );
};

export default Details;
