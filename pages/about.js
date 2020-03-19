import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';


class About extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth} title="Nico Tukiainen - About Me">
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
              <img src="http://nicotukiainen.com/legacy/images/myself5.jpg" className="photo fadein"/>
                <h1 className="title fadein">Hello!</h1>
                <h4 className="subtitle fadein">Welcome to my page</h4>                
                <p className="subsubTitle fadein">Here you can find some information about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="paragraph fadein">
                <p>My name is Nico Tukiainen and I am a fresh software engineer and developer. I work for <a target="_blank" href="https://www.pagero.com/">Pagero</a> and we make e-invoicing easy!</p>
                <p>I'm only a Thesis away from my Bachelors degree in Business IT and I am planning to complete it this spring.
                   I was working in Hospitality industry as a Chef for thirteen years before I changed to the IT-sector and I haven't regretted it a single day!
                </p>
                <p>
                I consider myself quite a novice when it comes to software development but luckily I'm surrounded by amazing colleagues who I can ask for help if need be.
                </p>                 
                <p>
                Throughout my life, I have acquired advanced technical knowledge and that has helped me adapt to these new challenges.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
