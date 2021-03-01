import React from 'react';
import { Typography } from 'antd';
import Risks from '../../data/risks';

import InfoList from './InfoList';
import MainText from './MainText';

function Brochure() {
  return (
    <Typography style={{ marginBottom: '150px' }}>
      <MainText />
      {Risks.map((risk, index) => (
        <InfoList title={risk.title} list={risk.risks} key={index} />
      ))}
    </Typography>
  );
}

export default Brochure;
