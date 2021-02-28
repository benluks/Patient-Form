import React from 'react';
import { Form, Input, Select } from 'antd';

function CondQuestion({ question, form, handleChange }) {
  const { Option } = Select;

  return (
    <>
      <Form.Item
        label={question.question}
        rules={[
          {
            required: question.isMandatory,
            message: 'Please enter your answer here',
          },
        ]}
      >
        <Select onChange={handleChange} placeholder='Bitte ja oder nein wählen'>
          <Option value={true}>Ja</Option>
          <Option value={false}>Nein</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues[question.title] !== currentValues[question.title]
        }
      >
        {({ getFieldValue }) =>
          getFieldValue(question.title) ? (
            <Form.Item
              label={question.ifTrueQuestion}
              rules={[
                {
                  required: true,
                  message: 'Please enter your answer here',
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
    </>
  );
}

export default CondQuestion;
