import React from 'react';

import { Typography } from 'antd';
import Column from 'antd/lib/table/Column';
import CompStyle from './CompStyle';


const { Title, Paragraph, Text, Link } = Typography;


function Information() {
    return (
        <>
            <Typography>
                <Title> Aufklärung</Title>
                <Paragraph style={CompStyle.fontStyle}>Dieser Bogen wird Sie auf Ihren geplanten Eingriff vorbereiten und Ihre/n Anästhesistin/en mit wichtigen Infos versorgen.</Paragraph>
            </Typography>
        </>
    );
}

export default Information;
