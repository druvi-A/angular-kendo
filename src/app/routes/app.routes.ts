import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SportsRoutes } from './sports.routes';
import { MoviesRoutes } from './movies.routes';
import { RegistrationFormComponent } from '../components/registration-form/registration-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  ...SportsRoutes,
  ...MoviesRoutes,
  { path: 'register', component: RegistrationFormComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];
