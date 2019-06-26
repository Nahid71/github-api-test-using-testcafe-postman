import { Selector } from 'testcafe';

export class LoginPage {
    constructor () {
        this.login    = Selector('#login_field');
        this.password = Selector('#password');
        this.signIn   = Selector('.btn').filter(node => node.value === 'Sign in');
    }
}

export class HomePage {
    constructor () {
        this.newrepo = Selector('.btn-primary').withExactText('New');
        this.dropdownHeader = Selector('.header-nav-current-user');
    }
}
