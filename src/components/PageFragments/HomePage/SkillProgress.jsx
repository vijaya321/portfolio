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
          percent={75}
          text="ReactJS"
        />
        <ProgressBar
          percent={85}
          text="JSON"
        />
        <ProgressBar
          percent={90}
          text="RESTful APIs"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={78}
          text="Sass"
        />
        <ProgressBar
          percent={80}
          text="HTML5"
        />
        <ProgressBar
          percent={70}
          text="Redux"
        />
        <ProgressBar
          percent={72}
          text="React Hooks"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
