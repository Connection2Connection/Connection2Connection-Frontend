import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaListarComponent } from './components/empresa/empresa-listar/empresa-listar.component';
import { EmpresaCRUDComponent } from './components/empresa/empresa-crud/empresa-crud.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosListarComponent } from './components/requisitos/requisitos-listar/requisitos-listar.component';
import { RequisitosCreaeditaComponent } from './components/requisitos/requisitos-creaedita/requisitos-creaedita.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { EmpresaDialogoComponent } from './components/empresa/empresa-listar/empresa-dialogo/empresa-dialogo.component';
import { UsuarioDialogoComponent } from './components/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RequisitosDialogoComponent } from './components/requisitos/requisitos-listar/requisitos-dialogo/requisitos-dialogo.component';
import { CalificacionComponent } from './components/calificacion/Calificacion.component';
import { CalificacionListarComponent } from './components/calificacion/Calificacion-listar/Calificacion-listar.component';
import { CalificacionCreaeditaComponent } from './components/calificacion/Calificacion-creaedita/Calificacion-creaedita.component';
import { CalificacionDialogoComponent } from './components/calificacion/Calificacion-listar/Calificacion-dialogo/Calificacion-dialogo.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { InstitucionListarComponent } from './components/institucion/institucion-listar/institucion-listar.component';
import { InstitucionCrudComponent } from './components/institucion/institucion-crud/institucion-crud.component';
import { InstitucionDialogoComponent } from './components/institucion/institucion-listar/institucion-dialogo/institucion-dialogo.component';
import { CarreraCreaeditaComponent } from './components/carrera/carrera-creaedita/carrera-creaedita.component';
import { CarreraListarComponent } from './components/carrera/carrera-listar/carrera-listar.component';
import { CarreraDialogoComponent } from './components/carrera/carrera-listar/carrera-dialogo/carrera-dialogo.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudianteCreaeditaComponent } from './components/estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { EstudianteListarComponent } from './components/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteDialogoComponent } from './components/estudiante/estudiante-listar/estudiante-dialogo/estudiante-dialogo.component';
import { ReclutadorComponent } from './components/reclutador/reclutador.component';
import { ReclutadorListarComponent } from './components/reclutador/reclutador-listar/reclutador-listar.component';
import { ReclutadorDialogoComponent } from './components/reclutador/reclutador-listar/reclutador-dialogo/reclutador-dialogo.component';
import { ReclutadorCreaeditaComponent } from './components/reclutador/reclutador-creaedita/reclutador-creaedita.component';
import { PuestoTrabajoComponent } from './components/puesto-trabajo/puesto-trabajo.component';
import { PuestoTrabajoListarComponent } from './components/puesto-trabajo/puesto-trabajo-listar/puesto-trabajo-listar.component';
import { PuestoTrabajoDialogoComponent } from './components/puesto-trabajo/puesto-trabajo-listar/puesto-trabajo-dialogo/puesto-trabajo-dialogo.component';
import { PuestoTrabajoCreaeditaComponent } from './components/puesto-trabajo/puesto-trabajo-creaedita/puesto-trabajo-creaedita.component';
import { MatchComponent } from './components/match/match.component';
import { MatchListarComponent } from './components/match/match-listar/match-listar.component';
import { MatchCreaeditaComponent } from './components/match/match-creaedita/match-creaedita.component';
import { MatchDialogoComponent } from './components/match/match-listar/match-dialogo/match-dialogo.component';
import { Calificacion_EstudianteComponent } from './components/calificacion_estudiante/calificacion_estudiante.component';
import { Calificacion_EstudianteListarComponent } from './components/calificacion_estudiante/calificacion_estudiante-listar/calificacion_estudiante-listar.component';
import { Calificacion_EstudianteDialogoComponent } from './components/calificacion_estudiante/calificacion_estudiante-listar/calificacion_estudiante-dialogo/calificacion_estudiante-dialogo.component';
import { Calificacion_EstudianteCreaeditaComponent } from './components/calificacion_estudiante/calificacion_estudiante-creaedita/calificacion_estudiante-creaedita.component';
import { RolComponent } from './components/rol/rol.component';
import { RolListarComponent } from './components/rol/rol-listar/rol-listar.component';
import { RolDialogoComponent } from './components/rol/rol-listar/rol-dialogo/rol-dialogo.component';
import { RolCreaeditaComponent } from './components/rol/rol-creaedita/rol-creaedita.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    EmpresaListarComponent,
    EmpresaCRUDComponent,
    EmpresaDialogoComponent,
    RequisitosComponent,
    RequisitosListarComponent,
    RequisitosCreaeditaComponent,
    RequisitosDialogoComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    UsuarioDialogoComponent,
    CalificacionComponent,
    CalificacionListarComponent,
    CalificacionCreaeditaComponent,
    CalificacionDialogoComponent,
    InstitucionComponent,
    InstitucionListarComponent,
    InstitucionCrudComponent,
    InstitucionDialogoComponent,
    CarreraCreaeditaComponent,
    CarreraListarComponent,
    CarreraDialogoComponent,
    CarreraComponent,
    LandingComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    EstudianteComponent,
    EstudianteCreaeditaComponent,
    EstudianteListarComponent,
    EstudianteDialogoComponent,
    ReclutadorComponent,
    ReclutadorListarComponent,
    ReclutadorDialogoComponent,
    ReclutadorCreaeditaComponent,
    PuestoTrabajoComponent,
    PuestoTrabajoListarComponent,
    PuestoTrabajoDialogoComponent,
    PuestoTrabajoCreaeditaComponent,
    MatchComponent,
    MatchListarComponent,
    MatchCreaeditaComponent,
    MatchDialogoComponent
    Calificacion_EstudianteComponent,
    Calificacion_EstudianteListarComponent,
    Calificacion_EstudianteDialogoComponent,
    Calificacion_EstudianteCreaeditaComponent,
    RolComponent,
    RolListarComponent,
    RolDialogoComponent,
    RolCreaeditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
