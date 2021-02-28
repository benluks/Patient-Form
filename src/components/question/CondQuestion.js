import React from 'react';
import { Form, Input, Radio } from 'antd';

function CondQuestion({ question, form, handleChange }) {
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
        <Radio.Group
          style={{ float: 'left' }}
          onChange={handleChange}
          placeholder='Bitte ja oder nein wählen'
        >
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nein</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues[question.title] !== currentValues[question.title]
        }
      >
        {({ getFieldValue }) =>
          getFieldValue(question.title)
            ? question.ifTrueQuestion && (
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
              )
            : null
        }
      </Form.Item>
    </>
  );
}

export default CondQuestion;
