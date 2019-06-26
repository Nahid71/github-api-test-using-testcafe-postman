import { Selector } from 'testcafe';

export class LoginPage {
    constructor () {
        // find the from fields using dom
        this.login    = Selector('#login_field');
        this.password = Selector('#password');
        this.signIn   = Selector('.btn').withAttribute('value', 'Sign in');
    }
}
