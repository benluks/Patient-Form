import React from 'react';
import { Image, Layout, Typography, Row, Col, Divider } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css';

import chariteLogo from './charite.png';
import Questions from './Questions';
import CompStyle from './CompStyle';

const { Title } = Typography;

function QuestionForm() {
  return (
    <>
      <Layout>
        <Header style={CompStyle.headerStyle}>Header</Header>
        <Content>
          <Row justify='center'>
            <Col span={12}>
              <Divider></Divider>
              <Image src={chariteLogo}></Image>
              <Divider></Divider>
              <Title>Fragebogen</Title>
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
