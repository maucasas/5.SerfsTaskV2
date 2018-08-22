
export class Publicadormodel implements IPublicador {

        Id:number;  
        FechaCreacion: Date;    
        Code: string;
        FechaPublicador: Date;    
        Nombre: string;
        Apellido: string;
        Grupo: grupoType;
        Celular:string;
        Genero: generotype;
        Asignaciones: Array<Asignacion>;
        FechaDedicacion: Date;
     
    constructor (  
        private code: string,
        private fechaPublicador: Date,    
        private nombre: string,
        private apellido: string,
        private grupo: grupoType,
        private celular:string,
        private genero: generotype,
        private asignaciones: Array<Asignacion>,
        private fechaDedicacion: Date  
    ) 
    {
        this.Id = new Date().getTime();        
        this.FechaCreacion =  new Date();
        this.Code = this.code;
        this.FechaPublicador =  this.fechaPublicador;    
        this.Nombre =  this.nombre;
        this.Apellido =  this.apellido;
        this.Grupo =  this.grupo;
        this.Celular = this.celular;
        this.Genero =  this.genero;
        this.Asignaciones =  this.asignaciones;
        this.FechaDedicacion =  this.fechaDedicacion;
    }
    
    }
    
    export enum Asignacion {
        publicador = 0,
        precursorRegular = 1,
        precursorAuxiliar = 2,
        SiervoMinisterial = 3,
        anciano = 4
    }
    
    export enum AsignacionType
    {
        Conferencia = 1,
        demostracion = 2
    }
    export enum generotype 
    {
        hombre = 1,
        mujer = 2
    }
    export enum grupoType 
    {
        grupo_1 = 1,
        grupo_2 = 2,
        grupo_3 = 3,
        grupo_4 = 4,
        grupo_5 = 5,
        grupo_6 = 6,
        grupo_7 = 7,
        grupo_8 = 8
    }
    
    export interface IPublicador {
        Id:number;
        Code: string;
        FechaCreacion: Date;
        FechaPublicador: Date;    
        Nombre: string;
        Apellido: string;
        Grupo: grupoType;
        Celular:string;
        Genero: generotype;
        Asignaciones: Array<Asignacion>;
        FechaDedicacion?: Date;    
        
    }