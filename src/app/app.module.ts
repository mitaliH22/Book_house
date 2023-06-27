import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EInfoComponent } from './e-info/e-info.component';
import { RedElDirective } from './red-el.directive';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionpageComponent } from './collectionpage/collectionpage.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, UrlSegment } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    EInfoComponent,
    RedElDirective,
    FormComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    HomeComponent,
    CollectionComponent,
    CollectionpageComponent,
    ProfileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.slice(1), {}),
              },
            };
          }

          return null;
        },
        component: ProfileComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
