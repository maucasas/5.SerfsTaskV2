import { Injectable } from '@angular/core';

@Injectable()


export class DataNeedService {

actualMonth: "Julio";
constructor (){

    this.actualMonth = 'Julio';
}

getMonth(){
    return this.actualMonth;   
}
}