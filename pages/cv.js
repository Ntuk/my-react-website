import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class Cv extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Certificates">
          <Row>
            <Col md={{size: 10, offset: 1}}>                          
              <iframe style={{width: '100%', height: '600px'}} src="/static/certs/cert_elements_of_ai.pdf">
              </iframe>
              <iframe style={{width: '100%', height: '600px'}} src="/static/certs/cert_unity_2d.pdf">
              </iframe>
            </Col>
          </Row>        
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv;
