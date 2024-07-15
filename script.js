() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get('div').then(elem => { 
    let text = elem.text().trim(); 
    expect(text).to.eq('This is a demo of box model, try to replicate this box model in Html & Css and pass all the test cases.'); 
  }); 
}
