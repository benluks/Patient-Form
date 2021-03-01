import React from 'react';

import { Typography, List, Timeline } from 'antd';
import CompStyle from './CompStyle';
import { ClockCircleOutlined } from '@ant-design/icons';
import Brochure from './information/Brochure';

const { Title, Paragraph } = Typography;

function Information() {
  return (
    <>
      <Typography>
        <Brochure />
        <Title level={2}>Vor der Operation</Title>
        <Timeline>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            <p>Ab 6 Stunden vor der Operation</p>
            <p> </p>
            <p>Kein Essen</p>
            <p> </p>
            <p> </p>
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            <p>2-6 Stunden vor der Operation </p>
            <p> </p>
            <p>Nur noch Wasser trinken</p>
            <p> </p>
            <p> </p>
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            <p>Ab 2 Stunden vor der Operation</p>
            <p> </p>
            <p>Keine Flüssigkeit mehr</p>
            <p> </p>
            <p> </p>
          </Timeline.Item>
        </Timeline>
      </Typography>
    </>
  );
}

export default Information;
