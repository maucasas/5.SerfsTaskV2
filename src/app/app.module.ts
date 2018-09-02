import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/umd'; quitando el umd se va el problema de "Module"."""
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Component
import { NuevosPage } from '../pages/nuevos/nuevos.component';
import { ReportByGroups } from '../pages/registros/reports/reports'
import {ModalReports} from '../pages/modals/modal.report';
import { AgregarNuevo } from '../pages/agregar/agregarNuevo.component';
import { LoginPage } from '../pages/login/login.component'

// Services

import { PublicadorService } from '../services/publicador.services';
import { GroupsService } from '../services/groups.services';
import { DataNeedService }  from '../services/dataNeedService';

@NgModule({
  declarations: [
    MyApp,
   ReportByGroups,
    HomePage,
    TabsPage,
    NuevosPage,
    ModalReports, 
    AgregarNuevo,
    LoginPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    NuevosPage,
    ReportByGroups,
    ModalReports,
    AgregarNuevo,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PublicadorService,
    GroupsService,
    DataNeedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
