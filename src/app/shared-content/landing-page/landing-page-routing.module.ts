import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LandingPagePage } from './landing-page.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: LandingPagePage,
      children: [
        {
          path: 'home',
          loadChildren: './home/home.module#HomePageModule'
        },
        {
          path: 'profile',
          loadChildren: './profile/profile.module#ProfilePageModule'
        },
        {
          path: 'bookmark',
          loadChildren: './bookmark/bookmark.module#BookmarkPageModule'
        },
        {
          path: ':id',
          loadChildren: './detail/detail.module#DetailPageModule'
        },
        {
          path:'',
          redirectTo:'/explore/tabs/home',
          pathMatch:'full'
        }
      ]
    },
    {
      path:'',
      redirectTo:'/explore/tabs/home',
      pathMatch:'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LandingPageRoutingModule {}