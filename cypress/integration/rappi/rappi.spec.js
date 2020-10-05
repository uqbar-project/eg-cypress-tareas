/// <reference types="cypress" />
describe('Smoke Test', () => {

    describe('Al entrar a la pantalla principal', () => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Se muestra el logo de Rappi', () => {

            cy.get('i[class="iconf-Logo-3x"]').should('exist')
        })
    })
})



