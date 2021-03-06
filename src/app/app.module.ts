import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { WallService } from './wall.service';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [WallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
