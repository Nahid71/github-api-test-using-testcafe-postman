import { Selector } from 'testcafe';
import { HomePage, CreatedRepo } from './homepage';
import { nahidhassan } from './role'
import { NewRepository, DeleteRepository } from './page-object';


fixture `Create new repository`
    // starting page.
    .page `https://github.com`;

const repository = new NewRepository();
const page = new HomePage();
const deleteRepository = new DeleteRepository();



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
        .click(deleteRepository.selectSettings);
        // Click the delete button.
    await t
        .click(deleteRepository.deleteButton);
        // Fillup the confirmation dialog.
    await t
        .typeText(deleteRepository.confirmationDiolog, 'newone')
        .click(deleteRepository.confirmDelete)
        // Check the repository is delete successfully .
        .expect(page.dropdownHeader.textContent).contains('Nahid71')

});
