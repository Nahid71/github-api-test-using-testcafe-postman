import { HomePage } from './homepage';
import { nahidhassan } from './role'


fixture `GitHub login Tests`
    // starting page.
    .page `https://github.com`;

const page = new HomePage();

test('login as Nahid71', async t => {
    await t

         // Click in sign in button
         .click(page.signInButton)
         // Assinging a user.
        .useRole(nahidhassan)
        // checking for successfull login.
        .expect(page.dropdownHeader.textContent).contains('Nahid71');
          console.log("Test pass successfull")
});
