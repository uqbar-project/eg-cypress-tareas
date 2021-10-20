export enum Prioridad {
    BAJA = "Baja",
    MEDIA = "Media",
    ALTA = "Alta",
}

export class Tarea {
    id!: number
    descripcion: string
    prioridad: Prioridad = Prioridad.MEDIA

    validar(): void {
        if (!this.descripcion) throw new Error('La tarea debe tener una descripcion')
    }

    constructor(descripcion: string) {
        this.descripcion = descripcion
    }
}