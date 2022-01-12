import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: HomeComponent
    },



];
export const RoutingModule = RouterModule.forRoot(routes);