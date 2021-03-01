import React from 'react';

import { Typography } from 'antd';
import CompStyle from './CompStyle';
import { ClockCircleOutlined } from '@ant-design/icons';
import Brochure from './information/Brochure';
import TimeLine from './information/TimeLine';

import timeline from '../data/timeline';

const { Title, Paragraph } = Typography;

function Information() {
  return (
    <>
      <Typography>
        <Brochure />
        <Title level={2} style={{ marginBottom: '48px' }}>
          Vor der Operation
        </Title>
        <TimeLine timeline={timeline} size={48} />
      </Typography>
    </>
  );
}

export default Information;
