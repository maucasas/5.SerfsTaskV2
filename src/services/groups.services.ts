import {Injectable} from '@angular/core';
import { PublicadorService } from './publicador.services';
import { grupoType, IPublicador } from '../models/publicador.model';

@Injectable()

export class GroupsService  {
    listaPublicadores: IPublicador [];
    listG: IGruops;
constructor(private publicadorService: PublicadorService, ) {
    this.listaPublicadores = this.publicadorService.getPublicadores();
}


getGroup(grupo: grupoType) {
    let group: IPublicador [] = [];

    for (let pub of this.listaPublicadores) {
        if(pub.Grupo === grupo) {
            group.push(pub);
        }
    }
    return group
}

}

export interface IGruops {
    idGroup: grupoType;
    listGroup:  IPublicador [];
}