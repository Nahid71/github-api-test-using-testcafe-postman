import { Selector } from 'testcafe';
import { HomePage, CreatedRepo } from './homepage';
import { nahidhassan } from './role'
import { NewRepository } from './page_object';


fixture `Create new repository`
    // starting page.
    .page `https://github.com`;

const repository = new NewRepository();
const page = new HomePage();
const selectSettings = Selector('.reponav-item').withExactText('Settings');
const deleteButton = Selector('.btn').withExactText('Delete this repository');
const confirmDelete = Selector('.btn').withExactText('I understand the consequences, delete this repository');
const confirmationDiolog = Selector('.input-block').withAttribute('aria-label', 'Type in the name of the repository to confirm that you want to delete this repository.');


test('login as Nahid71', async (t) => {
    await t
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
        // Click the delete button.
    await t
        .click(deleteButton);
        // Fillup the confirmation dialog.
    await t
        .typeText(confirmationDiolog, 'newone')
        .click(confirmDelete)
        // Check the repository is delete successfully .
        .expect(page.dropdownHeader.textContent).contains('Nahid71')

});
