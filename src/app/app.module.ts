import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KmeansComponent } from './kmeans/kmeans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KmeansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
