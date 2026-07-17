import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calendar } from './calendar/calendar';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'calendar', component: Calendar },
];
