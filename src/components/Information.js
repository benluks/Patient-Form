import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography, Image } from 'antd';
import Brochure from './information/Brochure';
import TimeLine from './information/TimeLine';

import timeline from '../data/timeline';
import aufklaerung from './aufklaerung.png';

function Information() {
  return (
    <>
      <Image style={{ padding: '48px 160px' }} src={aufklaerung}></Image>
      <Typography style={{ marginBottom: '150px' }}>
        <Brochure />
        <TimeLine timeline={timeline} />
      </Typography>
      <Button type='primary' style={{ margin: '48px' }}>
        <Link to='/fragebogen'>Zum Fragebogen</Link>
      </Button>
    </>
  );
}

export default Information;
