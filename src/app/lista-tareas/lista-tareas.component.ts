import { Component, OnInit } from '@angular/core'
import { TareaService } from '../tarea.service'
import { Tarea } from '../tarea.domain'

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})

export class ListaTareasComponent implements OnInit {

  descripcionTarea = ''
  tareas: Tarea[] = []
  tareaSeleccionada: Tarea | undefined
  errorMessage: string = ''

  constructor(private tareaService: TareaService) { }

  agregarTarea() {
    try {
      const tarea = this.tareaService.crearTarea(this.descripcionTarea)
      this.tareaService.agregarTarea(tarea)
      this.descripcionTarea = ''
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

  ngOnInit() {
    this.tareas = this.tareaService.tareas
  }

}
