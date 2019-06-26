import { Selector } from 'testcafe';
import { HomePage, CreatedRepo } from './homepage';
import { nahidhassan } from './role'
import { NewRepository } from './page-object';


fixture `Create new repository`
    // starting page.
    .page `https://github.com`;

const repository = new NewRepository();
const page = new HomePage();


test('login as Nahid71', async t => {
    await t
         // Click in sign in button
         .click(page.signInButton)
         // Assinging a user.
        .useRole(nahidhassan)
         // Click new repository button.
        .click(page.newrepo);
   // Fillup the new repository form.
    await t

        .typeText(repository.reposiroryName, 'newone')
        .typeText(repository.discription, 'this is description for this repository')
        // Click the crate button.
        .click(repository.create)
        // Checking that new repository is created successfully.
        .expect(Selector('title').innerText).eql('Nahid71/newone');
        console.log("repository created successfully")

});
