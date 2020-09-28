import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { TallerEducativoComponent } from './cursos/taller-educativo/taller-educativo.component';
import { TallerPadresComponent } from './cursos/taller-padres/taller-padres.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { FilosofiaComponent } from './mi-perfil/filosofia/filosofia.component';
import { TrayectoriaComponent } from './mi-perfil/trayectoria/trayectoria.component';
import { MisionComponent } from './mi-perfil/mision/mision.component';



@NgModule({
  declarations: [ContactoComponent, InicioComponent, CursosComponent, ServiciosComponent, TallerEducativoComponent, TallerPadresComponent, MiPerfilComponent, FilosofiaComponent, TrayectoriaComponent, MisionComponent],
  exports:[ContactoComponent, InicioComponent, CursosComponent, ServiciosComponent, TallerEducativoComponent, TallerPadresComponent, MiPerfilComponent,FilosofiaComponent, TrayectoriaComponent, MisionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
