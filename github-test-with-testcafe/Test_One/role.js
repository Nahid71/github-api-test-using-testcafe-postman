import { Role } from 'testcafe';
import { LoginPage } from './page_object';

const page = new LoginPage();
const loginPageUrl = 'https://github.com/login';

export const nahidhassan = Role(loginPageUrl, async t => {
    await t
        // this credentials is real and I use it so that you can try this test easly please dont try to hurm me.
        .typeText(page.login, 'Nahid71')
        .typeText(page.password, 'N86981171h')
        .click(page.signIn);
});

