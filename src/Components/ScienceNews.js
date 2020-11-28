import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Card, Typography, Input, Button, Spin} from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import NewsContext from '../NewsContext/newsContext'
import moment from 'moment'

const ScienceNews = () => {

  const [search, setSearch] = useState([]);

  const { Meta } = Card;
  const { Paragraph } = Typography;

  const newsContext = useContext(NewsContext)


  const {articles, newsSearchScience, scienceNews} = newsContext;

 
  
  console.log(articles);
  useEffect(() => {
    scienceNews()
  }, []); 
  return (
    <div>
       
      <Row justify='center' className='mb-5' gutter={16}>
        <Col >
          <Input
            placeholder='Search news here'
            style={{ width: "100%" }}
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col >
          <Button onClick={() => newsSearchScience(search)}>Search</Button>
        </Col>
      </Row>
      
      <Row justify='center'>
        <Col span={20}>
          <Row gutter={[12, 12]} justify='center'>
            {articles.length > 0 ?
              articles.map((article, index) => {
                return (
                  <Col
                    xs={{ span: 20 }}
                    md={{ span: 12 }}
                    xl={{ span: 8 }}
                    key={index}
                  >
                    <Link
                      to={{
                        pathname: "/Details",
                        state: {
                          article: article,
                        },
                      }}
                    >
                      <Card
                        hoverable
                        style={{ width: 350, minHeight: "400px", padding: '5px' }}
                        cover={
                          <img
                            alt='example'
                            src={article.urlToImage}
                            style={{ height: "150px" }}
                          />
                        }
                      >
                        <Meta
                          title={article.title}
                          description={
                            <Paragraph ellipsis={{ rows: 3 }} style={{height: '150px'}}>
                              {article.description}
                            </Paragraph>
                          }
                        />
                        <span style={{height: '50px', margin: '5px'}}>Published At : {moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                        <h6>Click on News for more details</h6>
                        
                      </Card>
                    </Link>
                  </Col>
                );
              }) :  <Row justify='center' style={{marginTop:'100px'}}>
              <Col>
              <Spin size='large'/>
              </Col>
              </Row>}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ScienceNews;
