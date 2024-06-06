import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailsViewerComponent } from './components/details-viewer/details-viewer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { appRoutes } from './routes/app.routes';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { TableComponent } from './components/table/table.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NotificationModule } from '@progress/kendo-angular-notification';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MoviesListComponent,
    SportsListComponent,
    HomePageComponent,
    DetailsViewerComponent,
    PageNotFoundComponent,
    RegistrationFormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    DateInputsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownsModule,
    NotificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
