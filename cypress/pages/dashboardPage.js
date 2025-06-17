class DashboardPage{ 

  selectorList(){ 
    const selectors = {
      dashboardGrid: ".orangehrm-dashboard-grid",
     
    }

    return selectors
  }

  dashboardVerification() { 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorList().dashboardGrid).should('be.visible')
  }


}

export default DashboardPage