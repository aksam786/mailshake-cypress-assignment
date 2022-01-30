class ProspectPage{

    async clickProspectsButton(){
        try {
            await cy.get("a[href='/49761/prospects']").should('be.visible').click();
        } catch (error) {
            console.log("Error during clickprospect button");
        } 
    }

    async selectAProspect(){
        try {
            if(cy.xpath("(//mat-row/mat-cell/mat-checkbox)[1]")){
                await cy.xpath("(//mat-row/mat-cell/mat-checkbox)[1]").click();
            }
            else{
                throw new Error("Element not found")
            }
        } catch (error) {
            console.log("Error during selecting a prospect")
        }
    }

    async clickUnsubscribe(){
        try {
            await cy.xpath("//button/span[contains(text(),'Unsubscribe')]").click()
        } catch (error) {
            console.log("Error during clicking the unsubscribe button")
        }
    }

    async clickResubscribe(){
        try {
            await cy.xpath("//button/span[contains(text(),'Resubscribe')]").click()
        } catch (error) {
            console.log("Error during clicking the unsubscribe button")
        }
    }
}

module.exports.ProspectPage=ProspectPage;