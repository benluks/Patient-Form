import React from 'react';

import 'antd/dist/antd.css';

import Questions from './Questions';
import Information from './Information';
import Format from './format/Format';

function QuestionForm() {
  return <Format children={<Questions />} />;
}

export default QuestionForm;
