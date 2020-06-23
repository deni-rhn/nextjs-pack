import React, { Fragment } from 'react';
import { Card } from '@components/card';
import { Col } from '@components/col';
import { Row } from '@components/row';
import './home.scss';
import { AlertOutlined, FrownOutlined, HomeOutlined, CalendarOutlined, BugOutlined } from '@components/icon';
import { Tooltip } from '@components/tooltip';

const Home: React.FC = () => {
  return (
    <Fragment>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Tooltip placement="top" title="Total Positif COVID-19">
              <Card bordered={false} style={{ backgroundColor: '#F26732' }}>
                <BugOutlined className='next_icon' />
                1234
              </Card>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip placement="top" title="Total Kasus Sembuh">
              <Card bordered={false} style={{ backgroundColor: '#46B29E' }} >
                <HomeOutlined className="next_icon" />
                4598
              </Card>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip placement="top" title="Total Kasus Dirawat">
              <Card bordered={false} style={{ backgroundColor: '#334E5C' }} >
                <AlertOutlined className="next_icon" />
                45893
              </Card>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip placement="top" title="Total Kasus Meninggal">
              <Card bordered={false} style={{ backgroundColor: '#CE3C49' }}>
                <FrownOutlined className='next_icon' />
                1234
              </Card>
            </Tooltip>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '4em' }}>
          <Col span={6}>
            <Tooltip placement="top" title="Kasus Positif Hari Ini">
              <Card bordered={false} style={{ backgroundColor: '#3F2B37' }}>
                <CalendarOutlined className='next_icon' />
                1234
              </Card>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip placement="top" title="Kasus Sembuh Hari Ini">
              <Card bordered={false} style={{ backgroundColor: '#5A4156' }} >
                <CalendarOutlined className="next_icon" />
                4598
              </Card>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip placement="top" title="Kasus Dirawat Hari Ini">
              <Card bordered={false} style={{ backgroundColor: '#F59D55' }} >
                <CalendarOutlined className="next_icon" />
                45893
              </Card>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Tooltip placement="top" title="Kasus Meninggal Hari Ini">
              <Card bordered={false} style={{ backgroundColor: '#F08052' }} >
                <CalendarOutlined className="next_icon" />
                45893
              </Card>
            </Tooltip>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Home;