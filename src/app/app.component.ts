import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  open:boolean = true;
  role:string="";

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.loginService.showRole();
    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='USER'){
      return true;
    }else{
      return false;
    }
  }

  constructor(private router:Router,private http: HttpClient, private loginService: LoginService)
  {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event : any) =>{

      if(event.url === '/' || event.url==='/#Inicio' || event.url==='/#Nosotros' || event.url==='/#Servicios' || event.url==='/login' || event.url==='/registrar-usuario') {
        this.open = false;
      } else{
        this.open=true
      }
    })

  }
  ngOnInit():void{
  }
}


