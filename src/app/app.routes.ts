import { Routes } from '@angular/router';
import { VetementComponent } from './produits/vetement.component';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

export const routes: Routes = [

    {path: "produits", component : VetementComponent , canActivate: [canActivateAuthRole],data: { role: 'ADMIN' }},
   { path: 'profile',component: UserProfileComponent},
   { path: 'forbidden', component: ForbiddenComponent }


];
