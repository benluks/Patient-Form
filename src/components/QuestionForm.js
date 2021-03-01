import React from 'react';
import { Image, Layout, Typography, Row, Col, Divider } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css';

import chariteLogo from './charite.png';
import aufklaerung from './aufklaerung.png';
import fragen from './fragen.png';
import Questions from './Questions';
import Information from './Information';
import CompStyle from './CompStyle';

function QuestionForm() {
  return (
    <>
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
            <Col span={12}>
              <Image
                style={{ padding: '48px 160px' }}
                src={aufklaerung}
              ></Image>
              <Information />
              <Image
                style={{ padding: '48px 160px' }}
                src={fragen}
              ></Image>
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
