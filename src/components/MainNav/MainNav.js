import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';

import './MainNav.scss';


class MainNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return(
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/" className="logo">My dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Log in
                </DropdownToggle>
                <DropdownMenu right className="">
                  <DropdownItem>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                  </FormGroup>
                  </DropdownItem>
                  <DropdownItem>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                  </FormGroup>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>
                    
                  </DropdownItem>
                  <Button className="submit-btn">
                    Submit
                  </Button>
                  <Button>

                  </Button>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MainNav);