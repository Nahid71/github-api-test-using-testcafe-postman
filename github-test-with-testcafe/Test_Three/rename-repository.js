import { Selector } from 'testcafe';
import { HomePage, CreatedRepo } from './homepage';
import { nahidhassan } from './role'
import { NewRepository, UpdateRepository } from './page-object';


fixture `Create new repository`
    // starting page.
    .page `https://github.com`;

const repository = new NewRepository();
const page = new HomePage();
const rename = new UpdateRepository();



test('login as Nahid71', async (t) => {
    await t
         // Click into sign in button
        .click(page.signInButton)

         // Assinging a user.
        .useRole(nahidhassan)
        // Click new repository button.
        .click(page.newrepo);
         // Fillup the new repository form.
    await t
        .typeText(repository.reposiroryName, 'newone')
        .typeText(repository.discription, 'this is discription')
        .click(repository.create)
        .expect(Selector('title').innerText).eql('Nahid71/newone');
         // Navigate to setting page.
    await t
        .click(rename.selectSettings);
        // Clear the input field.
    await t
        .click(rename.inputField)
        .pressKey('ctrl+a delete');
        // Set the new name.
    await t
        .typeText(rename.inputField, 'updatename')

    await t
        .click(rename.renameButton)
        // Check the repository is renamed successfully .
        .expect(Selector('title').innerText).eql('Nahid71/updatename');
        console.log("repository renamed successfully")

});
