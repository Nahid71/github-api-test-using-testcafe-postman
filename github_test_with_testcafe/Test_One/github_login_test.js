import { HomePage } from './homepage';
import { nahidhassan } from './role'


fixture `GitHub Tests`
    // starting page.
    .page `https://github.com`;

const page = new HomePage();

test('login as Nahid71', async t => {
    await t
         // Assinging a user.
        .useRole(nahidhassan)
        // checking for successfull login.
        .expect(page.dropdownHeader.textContent).contains('Nahid71');

});
