import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css',
})
export class PreguntasComponent implements OnInit {
  preguntas: Pregunta[] = [];
  
  // Paginación y búsqueda
  page: number = 1;
  limit: number = 5;
  search: string = '';
  totalPages: number = 1;
  totalItems: number = 0;

  // Estado del componente
  isLoading: boolean = false;
  selectedPregunta: Pregunta | null = null;
  nuevaRespuestaTexto: string = '';
  
  // Usuario simulado para contestar (tomaremos el primero de la base de datos o uno por defecto)
  currentUser: Usuario | null = null;

  constructor(
    private preguntaService: PreguntaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.cargarPreguntas();
    this.cargarUsuarioActual();
  }

  cargarUsuarioActual(): void {
    // Para simplificar, obtenemos todos los usuarios y seleccionamos el primero para simular
    // que es el usuario logueado actualmente que va a dejar la respuesta
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios) => {
        if (usuarios && usuarios.length > 0) {
          this.currentUser = usuarios[0];
        }
      },
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  cargarPreguntas(): void {
    this.isLoading = true;
    this.preguntaService.getPreguntas(this.page, this.limit, this.search).subscribe({
      next: (res) => {
        this.preguntas = res.data;
        this.totalItems = res.total;
        this.totalPages = res.totalPages;
        this.page = res.page;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar preguntas:', err);
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    this.page = 1;
    this.cargarPreguntas();
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.cargarPreguntas();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.cargarPreguntas();
    }
  }

  verDetalle(pregunta: Pregunta): void {
    this.selectedPregunta = pregunta;
    this.nuevaRespuestaTexto = '';
  }

  volverAlListado(): void {
    this.selectedPregunta = null;
    this.cargarPreguntas(); // refrescamos por si hubo cambios
  }

  enviarRespuesta(): void {
    if (!this.nuevaRespuestaTexto.trim() || !this.selectedPregunta?._id || !this.currentUser?._id) return;

    this.preguntaService.addRespuesta(
      this.selectedPregunta._id,
      this.currentUser._id,
      this.nuevaRespuestaTexto
    ).subscribe({
      next: (preguntaActualizada) => {
        this.selectedPregunta = preguntaActualizada;
        this.nuevaRespuestaTexto = '';
      },
      error: (err) => console.error('Error enviando la respuesta:', err)
    });
  }
}
