import React from 'react';

import {
  Typography,
  Button,
  Card,
  DatePicker,
  Form,
  InputNumber,
  Image,
} from 'antd';
import CondQuestion from './question/CondQuestion';
import DDEnum from './question/DDEnum';
import CompStyle from './CompStyle';
import '../App.css';
import questionnaire from '../data/questions';
import fragen from './fragen.png';

const { Title } = Typography;

function Questions() {
  const [form] = Form.useForm();
  return (
    <>
      <Image style={{ padding: '48px 160px' }} src={fragen}></Image>
      <Form
        form={form}
        style={{ marginBotton: '48px' }}
        layout='vertical'
        name='basic'
      >
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
        <Button
          type='primary'
          htmlType='submit'
          style={{ margin: '0 0 4rem 1.5rem' }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Questions;
