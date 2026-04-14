import { Usuario } from "./usuario";
import { Universidad } from "./universidad";

export interface Respuesta {
    texto: string;
    usuario: Usuario;
    fecha: string;
}

export interface Pregunta {
    _id?: string;
    titulo: string;
    descripcion: string;
    usuario: Usuario;
    universidad: Universidad;
    respuestas: Respuesta[];
    createdAt?: string;
    updatedAt?: string;
}

export interface PaginatedPreguntas {
    data: Pregunta[];
    total: number;
    page: number;
    totalPages: number;
}
