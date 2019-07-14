import { Role } from "testcafe";
import { LoginPage } from "./page_object";

const page = new LoginPage();
const loginPageUrl = "https://github.com/login";

export const nahidhassan = Role(loginPageUrl, async t => {
  await t
    // this credentials is not real you have to use your own credentials.
    .typeText(page.login, "Nahid71")
    .typeText(page.password, "****")
    .click(page.signIn);
});
