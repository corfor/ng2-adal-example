import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdalModule } from 'ng2-adal/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ProtectedDirective } from './protected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ProtectedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // {
      //   path: '',
      //   redirectTo: '/welcome',
      //   pathMatch: 'full'
      // },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }

    ]),

    AdalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
