import React from 'react';

import { Button, Card, DatePicker, Form, InputNumber } from 'antd';

import CondQuestion from './question/CondQuestion';
import DDEnum from './question/DDEnum';
import CompStyle from './CompStyle';

import questionnaire from '../data/questions';

function Questions() {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout='vertical' name='basic'>
      {questionnaire.map((quest, index) =>
        quest.dataType === 'bool' ? (
          <Card title={quest.question} style={{ borderRadius: '1rem' }}>
            <CondQuestion
              key={index}
              question={quest}
              form={form}
              handleChange={(e) => {
                form.setFieldsValue({ [quest.title]: e.target.value });
              }}
            />
          </Card>
        ) : (
          <Card title={quest.question}>
            <Form.Item
              // label={
              //   <label style={CompStyle.fontStyle}>{quest.question}</label>
              // }
              style={{ color: 'red' }}
              rules={[
                {
                  required: quest.isMandatory,
                  message: 'Please enter your answer here',
                },
              ]}
              key={index}
            >
              {quest.dataType === 'int' && (
                <InputNumber style={{ float: 'left' }} min={0} />
              )}
              {quest.dataType === 'date' && (
                <DatePicker style={{ float: 'left' }} />
              )}
              {quest.dropdown && (
                <DDEnum quest={quest} style={{ float: 'left' }} />
              )}
            </Form.Item>
          </Card>
        )
      )}
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default Questions;
