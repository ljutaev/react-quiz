import React, {Component} from 'react'
import classes from './Auth.css'
import Button from '../../components/Ui/Button/Button'
import Input from '../../components/Ui/Input/Input'

export default class Auth extends Component {
  loginHandler = () => {

  }
  registerHandler = () => {
    
  }
  submitHandler = event => {
    event.preventDefault()
  }
  render() {
    return (
      <div className={classes.Auth}> 
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input 
              label="Email"
            />
            <Input 
              label="Пароль"
              errorMessage="ERROR"
            />
            <Button
              type="success"
              onClick={this.loginHandler}>
              Вайти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}>
              Зарегестрироваться
            </Button>
          </form>
        </div>
        
      </div>
    )
  }
}