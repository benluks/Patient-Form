import React from 'react';
import questionnaire from '../../data/questions';
<<<<<<< Updated upstream
import { Button, DatePicker, Form, Input, Row, Col } from 'antd';
=======
import { Button, DatePicker, Form, InputNumber, Select } from 'antd';

>>>>>>> Stashed changes
import 'antd/dist/antd.css';

const { Option } = Select;

function QuestionForm() {
  const [form] = Form.useForm();

  console.log(form);
  return (
<<<<<<< Updated upstream
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
=======
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
          {quest.dataType === 'int' && <InputNumber min={0} />}
          {quest.dataType === 'date' && <DatePicker />}
          {quest.dataType === 'bool' && (
            <Select placeholder='Ja oder nein bitte wählen'>
              <Option value={true}>Ja</Option>
              <Option value={false}>Nein</Option>
            </Select>
          )}
          {quest.dropdown && (
            <Select
              placeholder={`${quest.title} bitte wählen`}
              onChange={(value) =>
                form.setFieldsValue({ [quest.title]: value })
              }
            >
              {quest.dropdown.map((opt, index) => (
                <Option value={opt} key={index}>
                  {opt}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
      ))}
      <Button type='primary' htmlType='submit'>
        Submit
>>>>>>> Stashed changes
      </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default QuestionForm;
