import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Alert} from "reactstrap";

export default class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
          firstname: '',
          lastname: '',
          email: '',
          og: '',
          school: '',
          passwordInput: '',
          confirmPasswordInput: '',
          checkBox: false,
          errorStatus: '',
          invited: [],
          confirmation: '',
          confirm: false,
          confirmInput: ''
        };
    }
    onChange = (e) => {
        this.setState({ errorStatus: ''});
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.id]: e.target.value });
    }
    onCheck = (e) => {
        this.setState({ errorStatus: ''});
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.value]: e.target.checked });
    }


    confirm(){
      if(this.state.confirmation == this.state.confirmInput){
        this.register();
      }
      else{
        this.setState({ errorStatus: "The Confirmation Code You Entered was Incorrect"});
      }
    }

    register(){
    // get our form data out of state
    const user = this.state;
    let that = this;

    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
    localStorage.setItem('firstname', user.firstname);
    localStorage.setItem('lastname', user.lastname);
    localStorage.setItem('username', user.username);
    localStorage.setItem('school', user.school);

    const MONTH_IN_MS = 2678400000;
    var grace = 3 * MONTH_IN_MS;
    localStorage.setItem('expires', Date.now() + grace);

    }

    onSubmit = (e) => {
        this.setState({ errorStatus: ''});
        e.preventDefault();
        const user = this.state;
        let that = this;

    }

    componentWillMount(){
      //checks if localStorage is expired
      const MONTH_IN_MS = 2678400000;
      var expiration = 0;
      var grace = 3 * MONTH_IN_MS;
      //save local storage email and password for easy access
      try{
          var email = localStorage.getItem("email");
          var password = localStorage.getItem("password");
          expiration = localStorage.getItem("expires");
          if(expiration < Date.now()){
              localStorage.clear();
          }
          else{
              localStorage.setItem("expires", Date.now() + grace);
            }
      }catch(e){
      }
    }

    render() {
            return (
              <div className="div">
                <Paper className="root" elevation={1}>
                  <div>
                  <Typography variant='headline' component='h1'>
                    Register
                  </Typography>
                  <form className="container" onSubmit={this.onSubmit}>
                    <TextField
                      required
                      id='firstname'
                      onChange={this.onChange}
                      value={this.state.firstname}
                      label='First Name'
                      className="joinedtextField"
                      margin='normal'
                      />
                    <TextField
                      required
                      id='lastname'
                      onChange={this.onChange}
                      value={this.state.lastname}
                      label='Last Name'
                      className="joinedtextField"
                      margin='normal'
                      />
                    <br/>
                    <TextField
                      required
                      id='email'
                      onChange={this.onChange}
                      value={this.state.email}
                      label='Email'
                      className="textField"
                      margin='normal'
                      />
                    <br/>
                    <TextField
                      id='school'
                      onChange={this.onChange}
                      value={this.state.school}
                      label='School of Attendance'
                      className="textField"
                      margin='normal'
                      />
                    <br/>
                    <TextField
                      required
                      id='passwordInput'
                      onChange={this.onChange}
                      label='Password'
                      className="textField"
                      type='password'
                      autoComplete='currentPassword'
                      margin='normal'
                      />
                    <br/>
                    <TextField
                      required
                      id='confirmPasswordInput'
                      onChange={this.onChange}
                      label='Confirm Password'
                      className="textField"
                      type='password'
                      autoComplete='currentPassword'
                      margin='normal'
                      />
                    <br/>
                      <FormControlLabel
                        control={
                          <Checkbox
                            required
                            checked={this.state.checkBox}
                            onChange={this.onCheck}
                            value="checkBox"
                            color="primary"
                            />
                        }
                        label="I have read and agreed to the Terms and Conditions"
                      />
                    <br/>
                      <TermsAndConditions variant='outlined' color='default' className="button">Terms and Conditions</TermsAndConditions>{' '}
                        {this.state.errorStatus != '' &&
                          <Alert color="danger">
                            {this.state.errorStatus.split('\n').map((item, i) => <div key={i}>{item}</div>)}
                          </Alert>
                        }
                    <Button type='submit' variant='outlined' color='primary' className="button">
                      Submit
                    </Button>
                  </form>
                  <Link to='/login'>Already Have An Account? Log In</Link>
                  </div>
                </Paper>
                <br/>
                <br/>
              </div>
            );
    }
}
