import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Tech Lover', 'Team Player', 'MMORPG Enthusiast', 'Food Fanatic', 'Optimist', 'Movie Freak', 'Stranger Things Fan' ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 10000)
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} headerType="index">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index-2.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Check out my portfolio and blog..
                          <br/>
                            { isAuthenticated && <span><br/>Logged in as <b>{user.name}</b></span>}
                        </div>
                      </div>
                      <img className="image" src="/static/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Web Developer</h2>
                        <div className="hero-section-content-intro">
                          ..and learn more about me
                          <br/>
                            { isAuthenticated && <span><br/>Logged in as <b>{user.name}</b></span>}
                        </div>
                      </div>
                      <img className="image" src="/static/images/section-1.png"/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
              <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-text">
                  <h1>                    
                    Welcome to my portfolio website.
                    Get informed and discover projects I have been working on through the years!<br/>
                  </h1>
                </div>

                <div className="hero-welcome-bio">
                  <h1>
                    <Container>
                      <Row>
                        <div className="icons">
                          <a target="_blank" href="https://en.wikipedia.org/wiki/HTML5">
                              <i className="fab fa-html5 fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://sass-lang.com/">
                              <i className="fab fa-sass fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://reactjs.org/">
                              <i className="fab fa-react fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://angular.io/">
                              <i className="fab fa-angular fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://nodejs.org/en/">
                              <i className="fab fa-node fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://www.php.net/">
                              <i className="fab fa-php fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://javascript.info/">
                              <i className="fab fa-js fa-inverse"></i>
                          </a>
                          <a target="_blank" href="https://www.java.com/">
                              <i className="fab fa-java fa-inverse"></i>
                          </a>
                        </div>
                      </Row>
                    </Container>
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}



export default Index;

