import React from 'react';
import { Select } from 'antd';

function DDEnum({ quest }) {
  const { Option } = Select;
  return (
    <Select placeholder={`${quest.title} bitte wählen`}>
      {quest.dropdown.map((opt, index) => (
        <Option value={opt} key={index}>
          {opt}
        </Option>
      ))}
    </Select>
  );
}

export default DDEnum;
