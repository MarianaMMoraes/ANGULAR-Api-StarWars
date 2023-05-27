import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

const routes: Routes = [
  { path: 'list-characters', component: ListCharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
