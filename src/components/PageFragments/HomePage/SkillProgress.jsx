import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={90}
          text="Javascript"
        />
        <ProgressBar
          percent={90}
          text="ReactJS"
        />
        <ProgressBar
          percent={85}
          text="JSON"
        />
        <ProgressBar
          percent={85}
          text="RESTful APIs"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="Java"
        />
        <ProgressBar
          percent={90}
          text="HTML5"
        />
        <ProgressBar
          percent={70}
          text="Spring Boot"
        />
        <ProgressBar
          percent={70}
          text="Oracle DB"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
