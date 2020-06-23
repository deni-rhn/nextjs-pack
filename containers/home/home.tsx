import React, { Fragment } from 'react';
import { Card } from '@components/card';
import { Col } from '@components/col';
import { Row } from '@components/row';
import './home.scss';
import { AlertOutlined, FrownOutlined, HomeOutlined, CalendarOutlined, BugOutlined } from '@components/icon';
import { Tooltip } from '@components/tooltip';
import { getHomeDatas } from './home.action';
import useSWR from 'swr';
import { homeEndpoint, dailyStatisticEndpoint } from '@helpers/endpoint';
import { IDashboard } from '@interfaces/idashboard';
import { getDailyStatistic } from '@containers/commonFetchers/statistic';
import { IDailyStatistic } from '@interfaces/idailyStatistic';

const Home: React.FC = () => {
  const { data: dashboard } = useSWR(homeEndpoint, getHomeDatas);
  const { data: dailyStatistic } = useSWR(dailyStatisticEndpoint, getDailyStatistic);
  const dataDashboard: IDashboard = dashboard;
  const latestData: IDailyStatistic = dailyStatistic ? dailyStatistic[dailyStatistic.length - 1] : 'Belum Tersedia';
  const tomorrowData: IDailyStatistic = dailyStatistic ? dailyStatistic[dailyStatistic.length - 2] : 'Belum Tersedia';

  return (
    <Fragment>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center" }}>
          <h2>DATA KOMULATIF</h2>
          <Row gutter={16}>
            <Col span={6}>
              <Tooltip placement="top" title="Total Positif COVID-19">
                <Card bordered={false} style={{ backgroundColor: '#F26732' }}>
                  <BugOutlined className='next_icon' />
                  {dashboard ? dataDashboard.jumlahKasus : '-'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Total Kasus Sembuh">
                <Card bordered={false} style={{ backgroundColor: '#46B29E' }} >
                  <HomeOutlined className="next_icon" />
                  {dashboard ? dataDashboard.sembuh : '-'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Total Kasus Dirawat">
                <Card bordered={false} style={{ backgroundColor: '#334E5C' }} >
                  <AlertOutlined className="next_icon" />
                  {dashboard ? dataDashboard.perawatan : '-'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Total Kasus Meninggal">
                <Card bordered={false} style={{ backgroundColor: '#CE3C49' }}>
                  <FrownOutlined className='next_icon' />
                  {dashboard ? dataDashboard.meninggal : '-'}
                </Card>
              </Tooltip>
            </Col>
          </Row>
        </div>
        <div style={{ textAlign: "center", marginTop: '4em' }}>
          <h2>DATA HARI INI </h2>
          <Row gutter={16}>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Positif Hari Ini">
                <Card bordered={false} style={{ backgroundColor: '#3F2B37' }}>
                  {latestData.jumlahKasusBaruperHari !== null && (
                    <CalendarOutlined className='next_icon' />
                  )}
                  {latestData.jumlahKasusBaruperHari !== null ?
                    latestData.jumlahKasusBaruperHari : 'Belum Tersedia'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Sembuh Hari Ini">
                <Card bordered={false} style={{ backgroundColor: '#5A4156' }} >
                  {latestData.jumlahKasusSembuhperHari !== null && (
                    <CalendarOutlined className="next_icon" />
                  )}
                  {latestData.jumlahKasusSembuhperHari !== null ?
                    latestData.jumlahKasusSembuhperHari : 'Belum Tersedia'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Dirawat Hari Ini">
                <Card bordered={false} style={{ backgroundColor: '#F59D55' }} >
                  {latestData.jumlahKasusDirawatperHari !== null && (
                    <CalendarOutlined className="next_icon" />
                  )}
                  {latestData.jumlahKasusDirawatperHari !== null ?
                    latestData.jumlahKasusDirawatperHari : 'Belum Tersedia!'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Meninggal Hari Ini">
                <Card bordered={false} style={{ backgroundColor: '#F08052' }} >
                  {latestData.jumlahKasusMeninggalperHari !== null && (
                    <CalendarOutlined className="next_icon" />
                  )}
                  {latestData.jumlahKasusMeninggalperHari !== null ? 
                    latestData.jumlahKasusMeninggalperHari : 'Belum Tersedia!'}
                </Card>
              </Tooltip>
            </Col>
          </Row>
        </div>

        <div style={{ textAlign: "center", marginTop: '4em' }}>
          <h2>DATA KEMARIN</h2>
          <Row gutter={16}>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Positif Kemarin">
                <Card bordered={false} style={{ backgroundColor: '#3F2B37' }}>
                  {tomorrowData.jumlahKasusBaruperHari !== null && (
                    <BugOutlined className='next_icon' />
                  )}
                  {tomorrowData.jumlahKasusBaruperHari !== null ?
                    tomorrowData.jumlahKasusBaruperHari : 'Belum Tersedia'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Sembuh Kemarin">
                <Card bordered={false} style={{ backgroundColor: '#5A4156' }} >
                  {tomorrowData.jumlahKasusSembuhperHari !== null && (
                    <HomeOutlined className="next_icon" />
                  )}
                  {tomorrowData.jumlahKasusSembuhperHari !== null ?
                    tomorrowData.jumlahKasusSembuhperHari : 'Belum Tersedia'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Dirawat Kemarin">
                <Card bordered={false} style={{ backgroundColor: '#F59D55' }} >
                  {tomorrowData.jumlahKasusDirawatperHari !== null && (
                    <AlertOutlined className="next_icon" />
                  )}
                  {tomorrowData.jumlahKasusDirawatperHari !== null ?
                    tomorrowData.jumlahKasusDirawatperHari : 'Belum Tersedia!'}
                </Card>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Tooltip placement="top" title="Kasus Meninggal Kemarin">
                <Card bordered={false} style={{ backgroundColor: '#F08052' }} >
                  {tomorrowData.jumlahKasusMeninggalperHari !== null && (
                    <FrownOutlined className='next_icon' />
                  )}
                  {tomorrowData.jumlahKasusMeninggalperHari !== null ? 
                    tomorrowData.jumlahKasusMeninggalperHari : 'Belum Tersedia!'}
                </Card>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;