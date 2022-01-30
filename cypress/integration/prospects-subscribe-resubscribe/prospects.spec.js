const chai = require("chai");
const {LoginPage} = require("../../page-objects/login");
const {ProspectPage} = require("../../page-objects/prospects-subscribe-resubscribe");
const data = require("../../fixtures/data");
const sleep = require("await-sleep");

// beforeEach("login before test case", () => {

// })

describe("Unsubscribe or Resubscribe a prospect", () => {
    it("unsubscribe a prospect", async ()=> {
        cy.visit(Cypress.env('login_url'));
        const loginPage = new LoginPage();
        loginPage.fillEmail(data.email);
        loginPage.fillPassword(data.password);
        loginPage.clickLogin();

        cy.wait(5000)
        cy.visit(Cypress.env('prospects_url'));
        const prospectsPage = new ProspectPage();
        prospectsPage.selectAProspect();
        cy.xpath("(//span[@class='mat-button-wrapper'])[5]").then(($btn) => {
            const txt = $btn.text()
            cy.log("THE BUTTON TEXT IS", txt)
            if(txt == ' Unsubscribe '){
                prospectsPage.clickUnsubscribe();
            }
            else{
                prospectsPage.clickResubscribe();
            }
        })
    })
})