import React from 'react';

import { Button, DatePicker, Form, InputNumber } from 'antd';

import CondQuestion from './question/CondQuestion';
import DDEnum from './question/DDEnum';

import questionnaire from '../data/questions';

function Questions() {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout='vertical' name='basic'>
      {questionnaire.map((quest, index) =>
        quest.dataType === 'bool' ? (
          <CondQuestion
            key={index}
            question={quest}
            form={form}
            handleChange={(value) => {
              form.setFieldsValue({ [quest.title]: value });
              console.log(form.getFieldValue(quest.title));
            }}
          />
        ) : (
          <Form.Item
            label={quest.question}
            rules={[
              {
                required: quest.isMandatory,
                message: 'Please enter your answer here',
              },
            ]}
            key={index}
          >
            {quest.dataType === 'int' && <InputNumber min={0} />}
            {quest.dataType === 'date' && <DatePicker />}
            {quest.dropdown && <DDEnum quest={quest} />}
          </Form.Item>
        )
      )}
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default Questions;
