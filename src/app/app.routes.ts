import { Routes } from '@angular/router';

import { ListComponent } from './modulos/products/pages/list/list.component';
import { AboutComponent } from './modulos/info/pages/about/about.component'


export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
       