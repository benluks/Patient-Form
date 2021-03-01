import React, { useEffect } from 'react';
import 'antd/dist/antd.css';

import Questions from './Questions';
import Format from './format/Format';

function QuestionForm({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Format children={<Questions />} />;
}

export default QuestionForm;
