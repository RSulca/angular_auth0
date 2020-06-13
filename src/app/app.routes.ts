import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'price', component: PrecioComponent },
    { path: 'protected', component: ProtegidaComponent, canActivate: [ AuthGuardService ] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }    
];

export const APP_ROUTING = RouterModule.forRoot(routes);
