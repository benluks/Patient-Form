import React from 'react';
import { Image, Layout, Row, Col } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import CompStyle from '../CompStyle';
import chariteLogo from '../../components/charite.png';

function Format({ children }) {
  return (
    <Layout>
      <Header style={CompStyle.headerStyle}>
        <Image
          style={{ padding: '30px' }}
          src={chariteLogo}
          width={250}
        ></Image>
      </Header>
      <Content style={{ background: 'white' }}>
        <Row justify='center'>
          <Col span={12}>{children}</Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Format;
