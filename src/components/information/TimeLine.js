import React from 'react';

import { Timeline, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const colors = ['', '#6D176B', '#8E0000'];
const { Title } = Typography;

function TimeLine({ timeline }) {
  return (
    <>
      <Title level={2} style={{ marginBottom: '48px' }}>
        Vor der Operation
      </Title>
      <Timeline>
        {timeline.map((item, index) => (
          <Timeline.Item
            dot={
              <ClockCircleOutlined
                style={{ fontSize: '16px', color: colors[index] }}
              />
            }
            key={index}
          >
            <b className='timeline-time'>{item.time}</b>
            <p
              className='timeline-event'
              style={{ padding: '48px 0', text: 'bold' }}
            >
              {item.rule}
            </p>
          </Timeline.Item>
        ))}
        <Timeline.Item style={{ paddingLeft: '0' }} />
      </Timeline>
    </>
  );
}

export default TimeLine;
