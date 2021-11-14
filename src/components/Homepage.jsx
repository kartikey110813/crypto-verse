import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import { Cryptocurrencies, News } from ".";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;
  console.log(globalStats);

  if (isFetching) {
    return "Loading ....";
  }
  console.log(data);

  return (
    <>
      <Title level={3} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total cryptocurencies" value={globalStats.total} /> 
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 cryptocurencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
