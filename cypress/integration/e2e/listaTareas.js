/// <reference types="cypress" />
import { getByDataTestId } from "../utils"

describe('Pantalla de Lista de Tareas', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const getInputDescripcionDeTarea = () => getByDataTestId('descripcionTarea')
  const getBotonAgregarTarea = () => getByDataTestId('agregarTarea')

  describe('Al intentar agregar una tarea', () => {
    it('Si se ingresa una descripcion, ', () => {
      getInputDescripcionDeTarea().type('Nueva tarea')
      getBotonAgregarTarea().click()

      cy.contains('[data-testid="tableRowId"]', 1)
      cy.contains('[data-testid="tableRowDesc"]', 'Nueva tarea')
    });
    
    it('Si no se ingresa una descripcion, se muestra un mensaje de error', () => {
      getBotonAgregarTarea().click()

      getByDataTestId('errorMessage')
    })
  })
})
