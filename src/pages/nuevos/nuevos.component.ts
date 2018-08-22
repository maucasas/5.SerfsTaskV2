import { Component } from "@angular/core";
import { PublicadorService } from '../../services/publicador.services';
import { Publicadormodel, IPublicador } from '../../models/publicador.model';
@Component({
    selector: 'page.nuevos',
    templateUrl: 'nuevos.component.html'
})

export class NuevosPage {

nuevosPublicadores: IPublicador [];
constructor(private publicadorService: PublicadorService){

    this.nuevosPublicadores = this.publicadorService.getPublicadoresNuevos();    
}

verNuevo(item: Publicadormodel) {
    console.log('vernuevo',item);
}

}