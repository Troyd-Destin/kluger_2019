import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { FounderComponent } from './founder/founder.component';
import { ArticleComponent } from './article/article.component';
import { PaperComponent } from './paper/paper.component';
import { CollaborationComponent } from './collaboration/collaboration.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'services', component: ServiceComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'founder', component: FounderComponent },
   { path: 'articles', component: ArticleComponent },
   { path: 'papers', component: PaperComponent },
   { path: 'collaborations', component: CollaborationComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
