import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../Styles/styles.css';
import Map from '../components/Map';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }

  }
  render() {
    return (
      <Container className="dashboardContainer">
        <Row className="rowContainer">]
         <Col><Map  /></Col>
        </Row>
      </Container>
    );
  }
}

export default UserDashboard;