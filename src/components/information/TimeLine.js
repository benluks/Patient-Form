import React from 'react';

import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import style from '../CompStyle';

function TimeLine({ timeline, size }) {
  return (
    <Timeline>
      {timeline.map((item, index) => (
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          <b className='timeline-time'>{item.time}</b>
          <p
            className='timeline-event'
            style={{ padding: { size } + 'px 0', text: 'bold' }}
          >
            {item.rule}
          </p>
        </Timeline.Item>
      ))}
      <Timeline.Item style={{ paddingLeft: '0' }} />
    </Timeline>
  );
}

export default TimeLine;
