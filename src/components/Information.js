import React from 'react';

import { Typography } from 'antd';
import Column from 'antd/lib/table/Column';
import CompStyle from './CompStyle';


const { Title, Paragraph, Text, Link } = Typography;


function Information() {
    return (
        <>
            <Typography>
                <Title>Aufklärung</Title>
                <Paragraph style={CompStyle.fontStyle}>Dieser Bogen wird Sie auf Ihren geplanten Eingriff vorbereiten und Ihre/n Anästhesistin/en mit wichtigen Infos versorgen.</Paragraph>
                <Title level={2}>Betäubung</Title>
                <Paragraph style={CompStyle.fontStyle}>Bei Ihrem geplanten Eingriff werden Sie voraussichtlich unter Narkose gesetzt oder es wird eine Regionalanästhesie durchgeführt, damit Sie keine Schmerzen verspüren. 

Möglich ist auch, dass beide Verfahren kombiniert werden. </Paragraph>
                <Title level={2}>Risiken</Title>
                <Paragraph style={CompStyle.fontStyle}>Ihr/e Anästhesist/in wird während des gesamten Eingriffs Ihre Vitalfunktionen überwachen und falls erforderlich, unterstützen. Unter Umständen kann es dabei zu Komplikationen kommen, die weitere Maßnahmen erfordern. </Paragraph>
                <Title level={3}>Allgemeine Risiken von Spritzen/Kanülen/Kathetern</Title>
                <Paragraph style={CompStyle.fontStyle}></Paragraph>
                <Title level={3}>Allgemeine Risiken der Betäubung</Title>
                <Paragraph style={CompStyle.fontStyle}></Paragraph>
                <Title level={3}>Risiken der Narkose</Title>
                <Paragraph style={CompStyle.fontStyle}></Paragraph>
                <Title level={2}>Was Sie tun müssen</Title>
                <Paragraph style={CompStyle.fontStyle}></Paragraph>
                <Title level={3}>Vor der Anästhesie</Title>
                <Paragraph style={CompStyle.fontStyle}></Paragraph>
            </Typography>
        </>
    );
}

export default Information;
