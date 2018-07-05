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
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export interface AppState {
  isOpen?: boolean
}

export interface AppProps {
  children?: JSX
}

export default class App extends React.Component<AppProps, AppState> {
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
    // render list of questions
    const containerStyle = {
      padding: '15px'
    }
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
                <NavLink href="/questions">Questions</NavLink>
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

          { this.props.children }

        </Container>
      </div>
    );
  }
}
