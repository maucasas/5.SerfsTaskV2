import { Injectable } from "@angular/core";
import { Publicadormodel, IPublicador } from '../models/publicador.model';

@Injectable()
export class PublicadorService {
    public nuevoPublicador1 = 
        {      
            id: new Date().getTime(),  
            code: 'cas01',
            fechaCreacion: new Date(),
            fechaPublicador: new Date(),   
            nombre: 'mauricio',
            apellido: 'casas',
            grupo: 3,
            celular:'3204005394',
            genero: 1,
            asignaciones:  [1,4],
            fechaDedicacion: new Date()
        };
    public nuevoPublicador2 = 
        {      
            id: new Date().getTime(),  
            code: 'cas02',
            fechaCreacion: new Date(),
            fechaPublicador: new Date(),   
            nombre: 'nathalie',
            apellido: 'rojas',
            grupo: 3,
            celular:'3134151574',
            genero: 2,
            asignaciones:  [1,2],
            fechaDedicacion: new Date()
        } 
        
public listaPublicadores: IPublicador []= [];
    constructor() {
       const newPub = new Publicadormodel(
           this.nuevoPublicador1.code, 
           this.nuevoPublicador1.fechaPublicador,
           this.nuevoPublicador1.nombre,
           this.nuevoPublicador1.apellido,
           this.nuevoPublicador1.grupo,
           this.nuevoPublicador1.celular,
           this.nuevoPublicador1.genero,
           this.nuevoPublicador1.asignaciones,
           this.nuevoPublicador1.fechaDedicacion
        );
        const newPub2 = new Publicadormodel(
            this.nuevoPublicador2.code, 
            this.nuevoPublicador2.fechaPublicador,
            this.nuevoPublicador2.nombre,
            this.nuevoPublicador2.apellido,
            this.nuevoPublicador2.grupo,
            this.nuevoPublicador2.celular,
            this.nuevoPublicador2.genero,
            this.nuevoPublicador2.asignaciones,
            this.nuevoPublicador2.fechaDedicacion
         );
    


       this.listaPublicadores.push( newPub, newPub2 );
       console.log(this.listaPublicadores);
    }

    getPublicadores() {
        return this.listaPublicadores;
    }

    getPublicadoresNuevos(): IPublicador[] {        
           const lista: IPublicador [] = [];
            for (let pub of this.listaPublicadores){
                console.log('pub',pub);
                const dateCreation = pub.FechaCreacion;

                if(dateCreation != new Date()){
                        lista.push(pub);
                }
            }
            console.log('getpublicadores', lista);
            return lista;
            
        }               
    }
