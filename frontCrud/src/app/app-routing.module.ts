import { DeletarComponent } from './deletar/deletar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'listar', component:ListarComponent},
  {path:'editar/:id', component:EditarComponent},
  {path: 'deletar/:id', component:DeletarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
