import * as React from 'react';
import Layout from '../components/layout'
import { ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap';

import '../styles/questions.css'

export default class Questions extends React.Component<{}, AppState> {
  render() {
    const children = (
      <Row>
        <Col>
          <ListGroup>
              <ListGroupItem className="justify-content-between">Why Marvel sucks? <Badge pill>14 Answers</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between">Why are art movies so good? <Badge pill>2 Answers</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between">What is everybody's favorite movie? <Badge pill>1 Answer</Badge></ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    )
    return (
      <Layout children={children} />
    );
  }
}
