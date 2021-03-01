import React from 'react';
import Format from './components/format/Format';
import Information from './components/Information';

function Aufklaerung() {
  return <Format children={<Information />} />;
}

export default Aufklaerung;
