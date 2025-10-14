import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `I am a seasoned Frontend Developer with 8+ years of experience in building modern, scalable web applications. My expertise spans React (Vite), Redux Toolkit, and component-driven architectures, 
  with a strong focus on creating intuitive, high-performance user interfaces. I specialize in developing clean, maintainable code and seamless integrations with backend microservices, ensuring applications are robust, 
  efficient, and user-friendly.`,
  paraTwo: `Alongside frontend development, I am passionate about AI-driven solutions. I have hands-on experience integrating AI models into applications for automation and personalization, 
  such as generating dynamic content, enhancing user interactions, and streamlining workflows. By combining my frontend expertise with AI skills, 
  I aim to build intelligent, data-driven applications that deliver impactful user experiences.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Vijaya', 'Biradar', 'Web Developer', 'FullStack Developer', 'Javascript', 'ReactJS', 'React Hooks', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="City I currently live in"
            textH3="Raleigh. North Carolina. USA"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Recent Company I worked for"
            textH3="UBS. Raleigh, North Carolina"
          />
        </Col>
       <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="camping.png"
            alt="motorcycle image"
            textH4="Love Camping"
            textH3="Camping for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources and AI Agents"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued M.Tech in"
            textH3="Software Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
