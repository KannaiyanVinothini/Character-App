import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterHomeComponent } from './character-home/character-home.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Route[] = [{
  path: 'characters',
  component: CharacterHomeComponent
}, {
  path: 'characters/:id',
  component: CharacterDetailComponent
}];


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
