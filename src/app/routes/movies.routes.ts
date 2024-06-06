import { Routes } from '@angular/router';
import { MoviesListComponent } from '../components/movies-list/movies-list.component';
import { DetailsViewerComponent } from '../components/details-viewer/details-viewer.component';

export const MoviesRoutes: Routes = [
  {
    path: 'my-fav-movies',
    component: MoviesListComponent,
  },
  {
    path: 'my-fav-movies/details/:searchDetails',
    component: DetailsViewerComponent,
  },
];
