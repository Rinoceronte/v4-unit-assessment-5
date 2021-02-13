import React, { Component } from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout, updateUser} from '../Auth/state/actions';
import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(res => this.props.updateUser(res.data)).catch(err => console.log(err));
  }
  
  logout() {
    axios.post('/api/auth/logout')
      .then(_ => {
        this.props.logout();
        this.props.history.push("/");
      })
  }
  
  render() {
      return this.props.location.pathname !== '/' &&
        <div className='nav'>
          <div className='nav-profile-container'>
            <div className='nav-profile-pic' style={{backgroundImage: `url(${this.props.profile_pic})`}}></div>
            <p>{this.props.username}</p>
          </div>
          <div className='nav-links'>
            <Link to="/dash"><img className='nav-img' src={homeLogo} alt='home' /></Link>
            <Link to="/form"><img className='nav-img' src={newLogo} alt='new post' /></Link>
          </div>
          <Link to="/auth" onClick={this.logout}><img className='nav-img logout' src={logoutLogo} alt='logout' /></Link>
        </div>
  }
}

function mapStateToProps(state) {
  const {username, profile_pic} = state.authReducer;
  return {
    username, profile_pic
  }
}

export default withRouter(connect(mapStateToProps, {updateUser, logout})(Nav));