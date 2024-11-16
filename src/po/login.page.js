const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  //trello
  get btnLogin() {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }
  get modalWindow() {
    return $("#ProductHeading");
  }
  get inputUserName() {
    return $("#username");
  }
  get btnUserNameSubmit() {
    return $("#login-submit");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnPasswordSubmit() {
    return $("#login-submit");
  }
  async login() {
    await this.open()
    await this.btnLogin.click()
    await this.inputUserName.setValue("yana.rusakova.epam@gmail.com");
    await this.btnUserNameSubmit.click();
    await this.inputPassword.setValue("passworD123");
    await this.btnPasswordSubmit.click();
  }
  //

  open() {
    return super.open("home");
  }
}

module.exports = new LoginPage();