import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './searchpage.component';
import { PageNotFoundComponent } from './notfound.component';

// import { CrisisListComponent }  from './crisis-list.component';
 import { ConfigComponent }    from './config.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'config', component: ConfigComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);