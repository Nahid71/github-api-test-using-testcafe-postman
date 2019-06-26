import { Selector } from 'testcafe';
import { HomePage, CreatedRepo } from './homepage';
import { nahidhassan } from './role'
import { NewRepository } from './page-object';


fixture `Create new repository`
    // starting page.
    .page `https://github.com`;

const repository = new NewRepository();
const page = new HomePage();
const selectSettings = Selector('.reponav-item').withExactText('Settings');
const inputField = Selector('#rename-field');
const renameButton = Selector('.flex-self-end');
const deleteButton = Selector('.btn').withExactText('Delete this repository');
const confirmDelete = Selector('.btn').withExactText('I understand the consequences, delete this repository');
const signInButton = Selector('.HeaderMenu-link').nth(5);
const confirmationDiolog = Selector('.input-block').withAttribute('aria-label', 'Type in the name of the repository to confirm that you want to delete this repository.');


test('login as Nahid71', async (t) => {
    await t
         // Click into sign in button
        .click(signInButton)

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
        .click(selectSettings);
        // Clear the input field.
    await t
        .click(inputField)
        .pressKey('ctrl+a delete');
        // Set the new name.
    await t
        .typeText(inputField, 'updatename')

    await t
        .click(renameButton)
        // Check the repository is renamed successfully .
        .expect(Selector('title').innerText).eql('Nahid71/updatename')

});
