import React from 'react';

import { Typography, List, Divider, Timeline } from 'antd';
import CompStyle from './CompStyle';
import { ClockCircleOutlined } from '@ant-design/icons';


const { Title, Paragraph } = Typography;

const spritzenRisiken = [
    "Verletzungen von Blutgefäßen",
    "Infektionen",
    "Nervenverletzungen",
    "Chronische Schmerzen und bleibende Lähmungen",
    "Thrombose/Embolie"
]

const allgemeinRisiken = [
    "Haut-, Gewebe- und Nervenschäden",
    "Reaktionen auf Medikamente",
    "Stoffwechselentgleisung",
    "Verwirrtheit",
]

const narkoseRisiken = [
    "Aspiration",
    "Verschluss der Luftwege",
    "Schluckbeschwerden",
    "Wachheit",
]

function Information() {
    return (
        <>
            <Typography style={{ marginBottom: '150px' }}>
                <Title>Aufklärung</Title>
                <Paragraph style={CompStyle.fontStyle}>Dieser Bogen wird Sie auf Ihren geplanten Eingriff vorbereiten und Ihre/n Anästhesistin/en mit wichtigen Infos versorgen.</Paragraph>
                <Title level={2}>Betäubung</Title>
                <Paragraph style={CompStyle.fontStyle}>Bei Ihrem geplanten Eingriff werden Sie voraussichtlich unter Narkose gesetzt oder es wird eine Regionalanästhesie durchgeführt, damit Sie keine Schmerzen verspüren. Möglich ist auch, dass beide Verfahren kombiniert werden. </Paragraph>
                <Title level={2}>Risiken</Title>
                <Paragraph style={CompStyle.fontStyle}>Ihr/e Anästhesist/in wird während des gesamten Eingriffs Ihre Vitalfunktionen überwachen und falls erforderlich, unterstützen. Unter Umständen kann es dabei zu Komplikationen kommen, die weitere Maßnahmen erfordern. </Paragraph>
                <Divider orientation="left">Allgemeine Risiken von Spritzen/Kanülen/Kathetern</Divider>
                <List
                    size="large"
                    dataSource={spritzenRisiken}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Divider orientation="left">Allgemeine Risiken der Betäubung</Divider>
                <List
                    size="large"
                    dataSource={allgemeinRisiken}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Divider orientation="left">Risiken der Narkose</Divider>
                <List
                    size="large"
                    dataSource={narkoseRisiken}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Title level={2}>Vor der Operation</Title>
                <Timeline>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        <p>Ab 6 Stunden vor der Operation</p>
                        <p> </p>
                        <p>Kein Essen</p>
                        <p> </p>
                        <p> </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        <p>2-6 Stunden vor der Operation </p>
                        <p> </p>
                        <p>Nur noch Wasser trinken</p>
                        <p> </p>
                        <p> </p>
                    </Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        <p>Ab 2 Stunden vor der Operation</p>
                        <p> </p>
                        <p>Keine Flüssigkeit mehr</p>
                        <p> </p>
                        <p> </p>
                    </Timeline.Item>
                </Timeline>
            </Typography>
        </>
    );
}

export default Information;
