import React, { Component } from 'react';
import {
  HashRouter, Switch, Route, Link,
} from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import SearchTable from './page/SearchTable';
import PostOfficeMap from './page/PostOfficeMap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='App'>
          <Navbar  bg='dark' variant='dark' expand='lg' >
            <Navbar.Brand  href='#'>振興券郵局庫存速查</Navbar.Brand>
            <Nav>
              <NavLink as={ Link } className='text-light' to="/">表格</NavLink>
              <NavLink as={ Link } className='text-light' to="/map">地圖</NavLink>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path='/'>
              <SearchTable />
            </Route>
            <Route path='/map'>
              <PostOfficeMap />
            </Route>
          </Switch>
          <footer className='bg-light position-fixed fixed-bottom'>made by listennn08.</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
