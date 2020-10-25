import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TallerEducativoComponent } from './cursos/taller-educativo/taller-educativo.component';
import { TallerPadresComponent } from './cursos/taller-padres/taller-padres.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { FilosofiaComponent } from './mi-perfil/filosofia/filosofia.component';
import { TrayectoriaComponent } from './mi-perfil/trayectoria/trayectoria.component';
import { MisionComponent } from './mi-perfil/mision/mision.component';
import { EquipoComponent } from './miPerfil/equipo/equipo.component';
import { SuccessComponent } from './success/success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'miPerfil', component: MiPerfilComponent},
  { path: 'miPerfil/filosofia', component: FilosofiaComponent},
  { path: 'miPerfil/trayectoria', component: TrayectoriaComponent},
  { path: 'miPerfil/mision', component: MisionComponent},
  { path: 'miPerfil/equipo', component: EquipoComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'cursos/tallerEducativo', component: TallerEducativoComponent},
  { path: 'cursos/tallerPadres', component: TallerPadresComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'success', component: SuccessComponent},
  { path: '', component: InicioComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
