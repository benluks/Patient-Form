import React from 'react';
import { Typography, List } from 'antd';

const { Title } = Typography;

function InfoList({ title, list }) {
  return (
    <>
      <Title level={4}>{title}</Title>
      <List
        size='small'
        dataSource={list}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
}

export default InfoList;
