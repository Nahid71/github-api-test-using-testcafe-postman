import { Selector } from 'testcafe';

export class LoginPage {
    constructor () {
        // find the from fields using dom
        this.login    = Selector('#login_field');
        this.password = Selector('#password');
        this.signIn   = Selector('.btn').withAttribute('value', 'Sign in');
    }
}

export class NewRepository {
    constructor () {
        // find the from fields using dom
        this.reposiroryName = Selector('#repository_name');
        this.discription = Selector('#repository_description');
        this.create   = Selector('.first-in-line');
    }
}
