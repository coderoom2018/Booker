import { action, observable } from 'mobx';

export default class SignInStore {
  @observable signInStatus = false;

  @observable user_id = 0;

  @action _changeSignInStatus = () => {
    this.signInStatus === false
    ? this.signInStatus = true
    : this.signInStatus = false 
  }

  @action _saveUserId = (user_id) => {
    this.user_id = user_id;
  }
} 