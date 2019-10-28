import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login-page/login-page.module#LoginPagePageModule' },
  { path: 'owner-register', loadChildren: './register/owner-register/owner-register.module#OwnerRegisterPageModule' },
  { path: 'user-register', loadChildren: './register/user-register/user-register.module#UserRegisterPageModule' },
  { path: 'landing-page', loadChildren: './shared-content/landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'detail-page', loadChildren: './shared-content/detail-page/detail-page.module#DetailPagePageModule' },
  { path: 'profile-page', loadChildren: './shared-content/profile-page/profile-page.module#ProfilePagePageModule' },
  { path: 'bookmark', loadChildren: './user-content/bookmark/bookmark.module#BookmarkPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},