import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class PortfolioCardDetail extends React.Component {


  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} size="xl">
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p><b>Date: </b>{moment(portfolio.startDate).format('DD MMMM YYYY')}</p>
            <p><b>Technologies used: </b>{portfolio.technologies}</p>
            <p><b>Description: </b>{portfolio.description}</p>
            <p><img className="modalImage" src={portfolio.imgurl}/></p>            
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;