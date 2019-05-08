import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// MDB Angular Free
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule,InputUtilitiesModule,CarouselModule,NavbarModule, DropdownModule  } from 'angular-bootstrap-md';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FounderComponent } from './founder/founder.component';
import { ArticleComponent } from './article/article.component';
import { PaperComponent } from './paper/paper.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    FounderComponent,
    ArticleComponent,
    PaperComponent,
    CollaborationComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FlexLayoutModule ,
    
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule,FormsModule, ReactiveFormsModule,InputUtilitiesModule,CarouselModule,NavbarModule, DropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
