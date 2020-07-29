import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { Ng2ImgMaxModule } from 'ng2-img-max';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SortableModule.forRoot(),
        Ng2ImgMaxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }