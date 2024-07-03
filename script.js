//your code here
() => {
    cy.visit(baseUrl + "/main.html");
    cy.get('div').then(ans => {
        let text = ans.text().trim().replace(/[\.,]/g, ''); // Remove commas and periods
        let expectedText = 'This is a demo of box model try to replicate this box model in Html and Css and try to pass all the test cases.';
        expect(text).to.equal(expectedText);
    });
}
