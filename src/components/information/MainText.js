import React from 'react';
import { Typography } from 'antd';

import CompStyle from '../CompStyle';

const { Title, Paragraph } = Typography;

function MainText() {
  return (
    <>
      <Title>Aufklärung</Title>
      <Paragraph style={CompStyle.fontStyle}>
        Dieser Bogen wird Sie auf Ihren geplanten Eingriff vorbereiten und
        Ihre/n Anästhesistin/en mit wichtigen Infos versorgen.
      </Paragraph>
      <Title level={2}>Betäubung</Title>
      <Paragraph style={CompStyle.fontStyle}>
        Bei Ihrem geplanten Eingriff werden Sie voraussichtlich unter Narkose
        gesetzt oder es wird eine Regionalanästhesie durchgeführt, damit Sie
        keine Schmerzen verspüren. Möglich ist auch, dass beide Verfahren
        kombiniert werden.
      </Paragraph>
      <Title level={2}>Risiken</Title>
      <Paragraph style={CompStyle.fontStyle}>
        Ihr/e Anästhesist/in wird während des gesamten Eingriffs Ihre
        Vitalfunktionen überwachen und falls erforderlich, unterstützen. Unter
        Umständen kann es dabei zu Komplikationen kommen, die weitere Maßnahmen
        erfordern.
      </Paragraph>
    </>
  );
}

export default MainText;
