import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  ListGroup,
  ListGroupItem,
  Badge,
  Container,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export interface AppState {
  isOpen?: boolean
}

export default class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Head>
          <title>MovieKin</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MovieKin</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">MyPage</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <ListGroup>
              <ListGroupItem className="justify-content-between">Why Marvel sucks? <Badge pill>14 Answers</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between">Why are art movies so good? <Badge pill>2 Answers</Badge></ListGroupItem>
              <ListGroupItem className="justify-content-between">What is everybody's favorite movie? <Badge pill>1 Answer</Badge></ListGroupItem>
            </ListGroup>
          </Row>
        </Container>
      </div>
    );
  }
}
