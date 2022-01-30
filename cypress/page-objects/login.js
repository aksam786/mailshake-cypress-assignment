class LoginPage{

    async fillEmail(email){
        try {
            console.log("entering the email: ", email);
            await cy.get("input[type='email']").should('be.visible').type(email);
        } catch (error) {
            console.log("Error during filling email on login");
        }
        
    }

    async fillPassword(password){
        try {
            console.log("entering the password: ", password);
            await cy.get("input[type='password']").should('be.visible').type(password);
            console.log("entering the password: ", password);
        } catch (error) {
            console.log("Error during filling password on login")
        }
        
    }

    async clickLogin(){
        try {
            await cy.xpath("//span[contains(text(),'Log In')]").should('be.visible').click();
        } catch (error) {
            console.log("Error during clicking login button")
        }
        
    }

}

module.exports.LoginPage = LoginPage;