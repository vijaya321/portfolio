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
          text="Javascript (ES6+) and Typescript"
        />
        <ProgressBar
          percent={90}
          text="React (Vite), Next.js"
        />
        <ProgressBar
          percent={85}
          text="shadcn/UI, TailwindCSS"
        />
        <ProgressBar
          percent={85}
          text="Redux Toolkit"
        />
        <ProgressBar
          percent={85}
          text="Tailwind CSS"
        />
        <ProgressBar
          percent={90}
          text="Component-driven architecture"
        />
        <ProgressBar
          percent={95}
          text="Modern web UI practices"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="Java Spring Boot (REST APIs, microservices)"
        />
        
        <ProgressBar
          percent={70}
          text="PostgreSQL, MongoDB, API integrations"
        />
        <ProgressBar
          percent={70}
          text="OpenAI, LangChain, AI Agents, GenAI Workflows, Prompt Engineering, Playwrite/Selenium Automation"
        />
        <ProgressBar
          percent={90}
          text="Vitest, Jest, SonarQube, Git/GitHub"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
