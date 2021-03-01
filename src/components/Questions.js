import React from 'react';

import { Typography, Button, Card, DatePicker, Form, InputNumber } from 'antd';
import CondQuestion from './question/CondQuestion';
import DDEnum from './question/DDEnum';
import CompStyle from './CompStyle';
import '../App.css';
import questionnaire from '../data/questions';

const { Title, Paragraph } = Typography;


function Questions() {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout='vertical' name='basic'>
      <Title>Fragebogen</Title>
      {questionnaire.map((quest, index) =>
        quest.dataType === 'bool' ? (
          <Card title={quest.question} style={CompStyle.qCardStyle}>
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
            <Card title={quest.question} style={CompStyle.qCardStyle}>
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
      {/* left margin on button to align with questions */}
      <Button type='primary' htmlType='submit' style={{ marginLeft: '24px' }}>
        Submit
      </Button>
    </Form>
  );
}

export default Questions;
