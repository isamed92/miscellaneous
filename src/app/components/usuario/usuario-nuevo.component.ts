import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    // para obtener todos los parametros que reciba el padre (router.parent)
    this.route.parent.params.subscribe(params => {
      // console.log('ruta hija');
      // console.log(params);


    });
   }

  ngOnInit() {
  }

}
