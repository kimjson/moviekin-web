import * as React from 'react';
import Layout from '../components/layout'
import { Row, Col } from 'reactstrap';

export default class Questions extends React.Component<{}, AppState> {
  render() {
    const children = (
      <Row>
        <Col>
          Welcome to MovieKin!
        </Col>
      </Row>
    )
    return (
      <Layout children={children} />
    );
  }
}
