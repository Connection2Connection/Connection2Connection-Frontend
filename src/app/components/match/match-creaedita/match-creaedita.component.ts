import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import { MatchService } from 'src/app/service/match.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ReclutadorService } from 'src/app/service/reclutador.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Reclutador } from 'src/app/model/reclutador';
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-match-creaedita',
  templateUrl: './match-creaedita.component.html',
  styleUrls: ['./match-creaedita.component.css']
})
export class MatchCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  match : Match = new Match();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  reclutadores: any[] = [];
  estudiantes: any[] = [];

  constructor(private matchService : MatchService, private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>{
     this.id = data['id'];
     this.edicion = data['id']!=null;
     this.init();
    })
    this.form = new FormGroup({
     id: new FormControl(),
     reclutadorId: new FormControl(),
     estudianteId: new FormControl(),
     numero_match: new FormControl(),
     confirmacion_match: new FormControl()
   });
   this.getReclutadores();
   this.getEstudiantes();
  }

  getReclutadores(): void {
    this.usuarioService.list().subscribe(resp => {
      this.reclutadores = resp.filter(item => item.Tipo_Usuario === 'reclutador');
    })
  }
  
  getEstudiantes(): void {
    this.usuarioService.list().subscribe(resp => {
      this.estudiantes = resp.filter(item => item.Tipo_Usuario === 'estudiante');
    })
  }

   aceptar(): void {
    this.match.id= this.form.value['id'];
    this.match.numero_match= this.form.value['numero_match']
    this.match.confirmacion_match = this.form.value['confirmacion_match']
    this.match.reclutadorId= this.form.value['reclutadorId'];
    this.match.estudianteId = this.form.value['estudianteId'];
    if (this.form.value['reclutadorId']){

      if (this.edicion) {
        //actualice
        this.matchService.Update(this.match).subscribe(() => {
          this.matchService.List().subscribe(data => {
            this.matchService.SetList(data);
          })
        })

      } else {
        this.matchService.Insert(this.form.value).subscribe(data => {
          this.matchService.List().subscribe(data => {
            this.matchService.SetList(data);
          })
        })
      }

      this.router.navigate(['/pages/Match']);
    } else {
      this.mensaje = "Complete todos los campos!";
    }
  }

  init() {
    if (this.edicion) {
      this.matchService.ListId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          numero_match: new FormControl(data.numero_match),
          confirmacion_match : new FormControl(data.confirmacion_match),
          reclutadorId: new FormControl(data.reclutador.id),
          requisitoId: new FormControl(data.estudiante.idEstudiante),
        })
      })
    }
  }
}
