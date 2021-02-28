import React from 'react';
import questionnaire from '../../data/questions';
import { Button, DatePicker, Form, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';

function QuestionForm() {
  return (
    <Row justify="center">
      <Col span={12}>
        <Form layout='vertical' name='basic'>
          {questionnaire.map((quest, index) => (
            <Form.Item
              label={quest.question}
              name={quest.title}
              rules={[
                {
                  required: quest.isMandatory,
                  message: 'Please enter your answer here',
                },
              ]}
              key={index}
            >
              {quest.dataType === 'int' && <Input />}
              {quest.dataType === 'date' && <DatePicker />}
            </Form.Item>
          ))}
          <Button type='primary' htmlType='submit'>
            Submit
      </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default QuestionForm;
