/// <reference types="cypress" />
import { getByDataTestId } from "../utils"

describe('Editar Tarea - Test Suite', () => {
  describe('Cuando se intenta editar una tarea', () => {
    // Pantalla de lista de tareas
    const getInputDescripcionDeTarea = () => getByDataTestId('descripcionTarea')
    const getBotonAgregarTarea = () => getByDataTestId('agregarTarea')

    const crearNuevaTarea = () => {
      cy.visit('/')
      getInputDescripcionDeTarea().type('Nueva Tarea')
      getBotonAgregarTarea().click()
    }

    const editarNuevaTarea = () => {
      getByDataTestId('tableRowId').click()
    }
    // Pantalla de lista de tareas

    beforeEach(() => {
      crearNuevaTarea()
      editarNuevaTarea()
    })

    it('Si no se ingresa una descripcion y se intentan confirmar los cambios, el sistema arroja un error', () => {
      getByDataTestId('descripcionTarea').clear()
      getByDataTestId('aceptar').click()

      getByDataTestId('errorMessage')
    })

    it('Si se modifica la descripcion pero se cancela la edicion, el sistema no altera la tarea', () => {
      getByDataTestId('descripcionTarea').clear()
      getByDataTestId('descripcionTarea').type('Nueva Descripcion')
      getByDataTestId('cancelar').click()

      cy.contains('[data-testid="tableRowDesc"]', 'Nueva Tarea')
    })

    it('Si se modifica la descripcion y se confirman los cambios, la tarea se actualiza', () => {
      getByDataTestId('descripcionTarea').clear()
      getByDataTestId('descripcionTarea').type('Nueva Descripcion')
      getByDataTestId('aceptar').click()

      cy.contains('[data-testid="tableRowDesc"]', 'Nueva Descripcion')
    })
  })
})
