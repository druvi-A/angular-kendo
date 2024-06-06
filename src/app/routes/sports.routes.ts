import { Routes } from '@angular/router';
import { SportsListComponent } from '../components/sports-list/sports-list.component';
import { DetailsViewerComponent } from '../components/details-viewer/details-viewer.component';

export const SportsRoutes: Routes = [
  {
    path: 'my-fav-sports',
    component: SportsListComponent,
  },
  {
    path: 'details/:searchDetails',
    component: DetailsViewerComponent,
  },
];
