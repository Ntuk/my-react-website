import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';
import moment from 'moment';

export default class PortfolioCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  shortenDesc = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...'
    } 
    return text
  }

  render() {
    const { portfolio, children } = this.props;
    const { isOpen } = this.state;

    return (
      <span onClick={this.handleToggle}>

        <PortfolioCardDetail toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen}/>

        <Card className="portfolio-card">
          <CardHeader className="portfolio-card-header">{portfolio.title}</CardHeader>
          <CardBody>
            <p className="portfolio-card-city">{moment(portfolio.startDate).format('DD MMMM YYYY')}</p>
            <p className="portfolio-card-city"><i>{portfolio.technologies}</i> </p>
            <CardTitle className="portfolio-card-title">
              <img className="cardImage" src={portfolio.imgurl}/>
              </CardTitle>
              <CardText className="portfolio-card-text">{this.shortenDesc(portfolio.description, 150)}</CardText>
              <div className="readMore">
                {children}
              </div>
          </CardBody>
        </Card>
      </span>
    )
  }
}