import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import { Col, Row, Button } from 'reactstrap';
import PortfolioCard from '../components/portfolios/PortfolioCard';
// Jos exportataan defaultina niin noita vänkyräsulkuja ei käytetä

import { getPortfolios, deletePortfolio } from '../actions';
import { Router } from '../routes';

class Portfolios extends React.Component {

  static async getInitialProps() {
    let portfolios = [];

    try {
      portfolios = await getPortfolios();
    } catch(err) {
      console.error(err);
    }

    return {portfolios};
  }

  navigateToEdit(portfolioId, event) {
    event.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`)
  }

  displayDeleteWarning(portfolioId, event) {
    event.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this project?');

    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio(portfolioId) {
    deletePortfolio(portfolioId)
      .then(() => {

        Router.pushRoute('/portfolios');
      })
      .catch(err => console.error(err));
  }

  renderPortfolios(portfolios) {
    const { isAuthenticated, isSiteOwner } = this.props.auth;

    return portfolios.map((portfolio, index) => {
      return (
        <Col md="4">
          <PortfolioCard portfolio={portfolio}>
            { isAuthenticated && isSiteOwner &&
              <React.Fragment>
                <Button onClick={(event) => this.navigateToEdit(portfolio._id, event)} color="warning">Edit</Button>{' '}
                <Button onClick={(event) => this.displayDeleteWarning(portfolio._id, event)} color="danger">Delete</Button>
              </React.Fragment>
            }
          </PortfolioCard>
        </Col>

      )
    })
  }

  render() {
    const { portfolios } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;


    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Some of my projects">
         { isAuthenticated && isSiteOwner &&
            <Button onClick={() => Router.pushRoute('/portfolios/new')} 
                color="success" 
                className="create-port-btn">Create Project
            </Button>
          }
          <Row>
            { this.renderPortfolios(portfolios) }
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;
