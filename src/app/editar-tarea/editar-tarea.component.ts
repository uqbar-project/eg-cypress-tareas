import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Tarea } from '../tarea.domain'
import { TareaService } from '../tarea.service'

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styles: []
})
export class EditarTareaComponent implements OnInit {

  tarea!: Tarea
  descripcionTarea!: string
  errorMessage: string = ''

  constructor(private tareaService: TareaService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((editarTareaParameters) => {
      const tarea = this.tareaService.getTareaById(editarTareaParameters.id)
      if (!tarea) {
        this.navegarAHome()
      } else {
        this.tarea = tarea
      }
    })
  }

  validarCampos(): void {
    if (!this.descripcionTarea) throw new Error('La tarea debe tener una descripcion')
  }

  navegarAHome() {
    this.router.navigate(['/listaTareas'])
  }

  aceptar() {
    try {
      this.validarCampos()
      this.tarea.descripcion = this.descripcionTarea
      this.navegarAHome()
    } catch (error) {
      if (error instanceof Error) {
        this.errorMessage = error.message
      } else {
        this.errorMessage = 'Ha habido un error inesperado'
      }

      const duracionDelMensajeDeError = 2000 //ms
      setTimeout(() => this.errorMessage = '', duracionDelMensajeDeError)
    }
  }

  cancelar() {
    this.navegarAHome()
  }

  ngOnInit() {
    this.descripcionTarea = this.tarea?.descripcion
  }

}
