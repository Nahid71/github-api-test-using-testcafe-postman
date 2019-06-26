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
        this.avatar = Selector('.avatar');
        this.dropdownHeader = Selector('.header-nav-current-user');
        this.newrepo = Selector('.btn-primary').withExactText('New');
    }
}
export class CreatedRepo {
    constructor () {
        this.header = Selector('.public').child('strong').child('a').withAttribute('href', 'Nahid71/newone');

    }
}
