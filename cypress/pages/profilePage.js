class ProfilePage {

  selectorList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      middleNameField: "[name='middleName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: ".oxd-date-input-icon",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericCombobox: ".oxd-select-text-input",
    }
    
    return selectors

  }
  
  personalForm(firstName, middleName, lastName) { 
    cy.get(this.selectorList().firstNameField).should('be.visible').clear().type(firstName)
    cy.get(this.selectorList().middleNameField).should('be.visible').clear().type(middleName)
    cy.get(this.selectorList().lastNameField).should('be.visible').clear().type(lastName)
    cy.get(this.selectorList().genericField).eq(3).should('be.visible').clear().type('191410')
    cy.get(this.selectorList().genericField).eq(4).should('be.visible').clear().type('999111')
    cy.get(this.selectorList().genericField).eq(5).should('be.visible').clear().type('201599')
    }

  datesPicker() { 
     // Acessar DatePicker1
     cy.get(this.selectorList().dateField).eq(0).should('be.visible').click()
     // Selecionar o Ano
     cy.get('.oxd-calendar-selector-year').should('be.visible').click()
     cy.get('.oxd-calendar-dropdown > *').last().click()
     // Selecionar o Mês
     cy.get('.oxd-calendar-selector-month-selected').should('be.visible').click()
     cy.get('.oxd-calendar-dropdown > *').last().click()
     // Selecionar o Dia
     cy.get('.oxd-calendar-date').should('be.visible').contains(/^20$/).click()
    cy.get(this.selectorList().dateCloseButton).should('be.visible').click()
    
   // Acessar DatePicker2
    cy.get(this.selectorList().dateField).eq(1).should('be.visible').click()
    // // Selecionar o ano
    cy.get('.oxd-calendar-selector-year').should('be.visible').click()
    cy.get('.oxd-calendar-dropdown > *').last().click();
    // Selecionar o Mês
    cy.get('.oxd-calendar-selector-month-selected').should('be.visible').click()
    cy.get('.oxd-calendar-dropdown > *').last().click();
    // Selecionar o Dia
    cy.get('.oxd-calendar-date').should('be.visible').contains(/^12$/).click();
    cy.get(this.selectorList().dateCloseButton).should('be.visible').click()
  }

  inputs() { 
    // Selecionar Input Nationallity
    cy.get(this.selectorList().genericCombobox).eq(0).should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').should('be.visible').click()
    // Selecionar Input Marital Status
    cy.get(this.selectorList().genericCombobox).eq(1).should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').should('be.visible').click()
  }
 
  boxRadio() { 
    cy.get('.oxd-radio-input').eq(1).should('be.visible').click()
  }

  typeBlood() { 
   // Selecionar o Tipo Sanguineo
   cy.get(this.selectorList().genericCombobox).eq(2).should('be.visible').click()
   cy.get('.oxd-select-dropdown > :nth-child(3)').should('be.visible').click({ force: true })
   cy.get("[options='']").should('be.visible').clear().type('Testando Campo')
  }
  
  
  saveProfile() { 
    cy.get(this.selectorList().submitButton).eq(0).click()
    cy.get(this.selectorList().submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Updated')
  }


}

export default ProfilePage