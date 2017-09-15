import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { saveAuthTokens } from '../util';
import styled  from 'styled-components';

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  transform: translate(-50%, -50%)
  max-width: 450px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 50%;
  height: 35px;
  color: black;
  font-weight: bold;
  &:focus{
    outline-color: #4E988E;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  };
`;

const StyledButton = styled.button`
  align-items: space-between;
  margin: 3px;
  padding: 8px 15px 8px 15px;
  background-color: #6BA260;
  border: none;
  color: #EBE3D5;
`;

class SignUpLogIn extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
       redirect: false
   }
 }
   _signUp = async (e) => {
      e.preventDefault();
      const payload = {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)
      this.setState({redirect: true})
    }

 _signIn = async (e) => {
   e.preventDefault();
   const payload = {
     email: this.state.email,
     password: this.state.password
   }
   const response = await axios.post('/auth/sign_in', payload)
   saveAuthTokens(response.headers)
   this.setState({redirect: true})
 }

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <LoginStyle>
       <form onSubmit={this._signUp}>
         <div>
           <label htmlFor="email">E-mail: </label>
           <StyledInput onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <StyledInput onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <div>
           <label htmlFor="password">Confirm Password: </label>
           <StyledInput onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
         </div>

         <StyledButton>Sign Up</StyledButton>
         <StyledButton onClick={this._signIn}>Log In</StyledButton>
       </form>
     </LoginStyle>
   );
 }
}

export default SignUpLogIn;
