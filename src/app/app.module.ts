import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './services/guards/index';
import { AuthenticationService } from './services/auth/index';

import { FooterComponent } from './includes/footer/footer.component';
import { TableComponent } from './table/table.component';
import { routing } from './app.routing';

import { PMOService} from './services/pmo/pmo.service';
import { UserService} from './services/auth/user.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './table/edit/edit.component';


/**
 * @name: module.ts
 * @description: main module has to receive all the components
 * otherwise it's going to fail on loading them and probably
 * will generate errors on loading providers too.
 * @param [ declarations ], [ imports ], [ providers ]
 */

 
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    FooterComponent,
    TableComponent,
    WelcomeComponent,
    SearchPipe,
    SearchComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    routing
  ],
  providers: [
    HttpModule,
    AuthGuard,
    AuthenticationService,
    PMOService,
    UserService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule {}
