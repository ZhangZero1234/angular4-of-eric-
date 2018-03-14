import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { TableComponent } from './table/index';
import { EditComponent } from './table/edit/edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './services/guards/index';


const appRoutes: Routes = [
    { path: 'software/agritech/platform/pmo', redirectTo: 'software/agritech/platform/pmo/login', pathMatch: 'full' },
    { path: 'software/agritech/platform/pmo/login', component: LoginComponent },
    { path: 'software/agritech/platform/pmo/table/data', component: TableComponent },
    { path: 'software/agritech/platform/pmo/table/:ibmId', component: EditComponent },
    
     // otherwise redirect to home
     { path: '**', redirectTo: 'software/agritech/platform/pmo/login' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
