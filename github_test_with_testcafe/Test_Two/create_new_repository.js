import { Selector } from 'testcafe';
import { HomePage, CreatedRepo } from './homepage';
import { nahidhassan } from './role'
import { NewRepository } from './page_object';


fixture `Create new repository`
    // starting page.
    .page `https://github.com`;

const repository = new NewRepository();
const page = new HomePage();


test('login as Nahid71', async t => {
    await t
         // Assinging a user.
        .useRole(nahidhassan)
        // click new repository button.
        .click(page.newrepo);


})
.after(async t => {
    await t
        .typeText(repository.reposiroryName, 'newone')
        .typeText(repository.discription, 'this is discription')
        .click(repository.create)
        .expect(Selector('title').innerText).eql('Nahid71/newone')
});
