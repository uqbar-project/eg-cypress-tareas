export class Tarea {
    id!: number
    descripcion: string

    validar(): void {
        if(!this.descripcion) throw new Error('La tarea debe tener una descripcion')
    }

    constructor(descripcion: string) {
        this.descripcion = descripcion
    }
}