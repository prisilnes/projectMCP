import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login-page/login-page.module#LoginPagePageModule' },
  { path: 'register/owner', loadChildren: './register/owner-register/owner-register.module#OwnerRegisterPageModule' },
  { path: 'register/user', loadChildren: './register/user-register/user-register.module#UserRegisterPageModule' },
  { path: 'explore', loadChildren: './shared-content/landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'explore/category', loadChildren: './shared-content/category/category.module#CategoryPageModule' },
  { path: 'explore/search', loadChildren: './shared-content/search/search.module#SearchPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'detail-page', loadChildren: './shared-content/detail-page/detail-page.module#DetailPagePageModule' },
// { path: 'profile-page', loadChildren: './shared-content/profile-page/profile-page.module#ProfilePagePageModule' },
// { path: 'bookmark', loadChildren: './user-content/bookmark/bookmark.module#BookmarkPageModule' },
// { path: 'home', loadChildren: './shared-content/landing-page/home/home.module#HomePageModule' },
// { path: 'bookmark', loadChildren: './shared-content/landing-page/bookmark/bookmark.module#BookmarkPageModule' },
// { path: 'detail', loadChildren: './shared-content/landing-page/detail/detail.module#DetailPageModule' },
// { path: 'profile', loadChildren: './shared-content/landing-page/profile/profile.module#ProfilePageModule' },