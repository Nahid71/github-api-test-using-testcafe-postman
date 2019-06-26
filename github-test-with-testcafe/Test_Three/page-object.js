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
export class UpdateRepository {
    constructor () {
        // find the from fields using dom
        this.selectSettings = Selector('.reponav-item').withExactText('Settings');
        this.inputField = Selector('#rename-field');
        this.renameButton = Selector('.flex-self-end');
        this.deleteButton = Selector('.btn').withExactText('Delete this repository');
        this.confirmDelete = Selector('.btn').withExactText('I understand the consequences, delete this repository');
        this.confirmationDiolog = Selector('.input-block').withAttribute('aria-label', 'Type in the name of the repository to confirm that you want to delete this repository.');
    }
}
