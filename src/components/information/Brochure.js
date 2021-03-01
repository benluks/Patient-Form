import React from 'react';
import { Typography } from 'antd';
import Risks from '../../data/risks';

import CompStyle from '../CompStyle';
import InfoList from './InfoList';

const { Paragraph, Title } = Typography;

function Brochure() {
  return (
    <Typography style={{ marginBottom: '150px' }}>
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
      {Risks.map((risk, index) => (
        <InfoList title={risk.title} list={risk.risks} key={index} />
      ))}
    </Typography>
  );
}

export default Brochure;
