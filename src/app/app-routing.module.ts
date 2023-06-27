import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionpageComponent } from './collectionpage/collectionpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'collection',
    component: CollectionComponent,
    children: [
      {
        path: 'collectionpage',
        component: CollectionpageComponent,
      },
    ],
  },
  { path: 'aboutus', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: FormComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
