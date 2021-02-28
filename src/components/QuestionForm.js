import React from 'react';
import questionnaire from '../data/questions';
import { Divider, Layout, Typography, Image, Button, DatePicker, Form, InputNumber, Select, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import BoolQuestion from './question/BoolQuestion';
import chariteLogo from './charite.png'
import { Content, Footer, Header } from 'antd/lib/layout/layout';

const { Option } = Select;
const { Title } = Typography;

function QuestionForm() {
  const [form] = Form.useForm();

  return (
    <>
      <Layout>
        <Header>
          Header
      </Header>
        <Content>
          <Row justify='center'>
            <Col span={12}>
            <Divider />

              <Image src={chariteLogo}></Image>
              <Divider />

              <Form form={form} layout='vertical' name='basic'>
                {questionnaire.map((quest, index) =>
                  quest.dataType === 'bool' ? (
                    <BoolQuestion
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
                        {quest.dropdown && (
                          <Select placeholder={`bitte wählen`}>
                            {quest.dropdown.map((opt, index) => (
                              <Option value={opt} key={index}>
                                {opt}
                              </Option>
                            ))}
                          </Select>
                        )}
                      </Form.Item>
                    )
                )}
                <Button type='primary' htmlType='submit'>
                  Submit
          </Button>
              </Form>
            </Col>
          </Row>

        </Content>
        <Footer>
          Footer
      </Footer>
      </Layout>
    </>
  );
}

export default QuestionForm;
