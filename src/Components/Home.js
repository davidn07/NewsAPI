import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Input } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const { Meta } = Card;
  const { Paragraph } = Typography;

  const fetchNews = async () => {
    const res = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=77092229e2a6465daafadb1f1b3dafb7"
    );
    console.log(res.data.articles);
    setNews(res.data.articles);
  };

  const filteredNews =
    news &&
    news.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });

  console.log(filteredNews);
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <Row justify='center' className='mb-5'>
        <Col span={16}>
          <Input
            placeholder='Search news here'
            style={{ width: "100%" }}
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={20}>
          <Row gutter={[12, 12]} justify='center'>
            {filteredNews &&
              filteredNews.map((article, index) => {
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
                        style={{ width: 350, minHeight: "400px" }}
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
                            <Paragraph ellipsis={{ rows: 5 }}>
                              {article.description}
                            </Paragraph>
                          }
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
