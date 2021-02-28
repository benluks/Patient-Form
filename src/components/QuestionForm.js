import React from 'react';
import { Image, Layout, Typography, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

import chariteLogo from './charite.png';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Questions from './Questions';

const { Title } = Typography;

function QuestionForm() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Row justify='center'>
            <Col span={12}>
              <Divider></Divider>
            <Image src={chariteLogo}></Image>
            <Divider></Divider>
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
