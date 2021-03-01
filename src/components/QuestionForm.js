import React from 'react';
import { Image, Layout, Typography, Row, Col } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css';

import chariteLogo from './charite.png';
import Questions from './Questions';
import Information from './Information';
import CompStyle from './CompStyle';

const { Title } = Typography;

function QuestionForm() {
  return (
    <>
      <Layout>
        <Header style={CompStyle.headerStyle}>Header</Header>
        <Content style={{ background: 'white' }}>
          <Row justify='center'>
            <Col span={12}>
              <Image
                style={{ padding: '48px 160px' }}
                src={chariteLogo}
              ></Image>
              <Information />
              <Questions />
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default QuestionForm;
