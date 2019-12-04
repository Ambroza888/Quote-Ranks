import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NewComponent } from './new/new.component'
import { EditauthorComponent} from './editauthor/editauthor.component'
import { QuoteComponent } from './quote/quote.component'
import { CreateQComponent } from './create-q/create-q.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditauthorComponent},
  {path: 'quote/:id', component: QuoteComponent},
  {path: 'createQ/:id', component:CreateQComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
