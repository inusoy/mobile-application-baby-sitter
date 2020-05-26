import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: './FavouriteJobsPage/FavouriteJobsPage.module#FavouriteJobsPagePageModule',
    },
    {
        path: 'info',
        loadChildren: './Info/Info.module#InfoPageModule',
    },
    {
        path: 'login',
        loadChildren: './Login/Login.module#LoginPageModule',
    },
    {
        path: 'signup',
        loadChildren: './SignUp/SignUp.module#SignUpPageModule',
    },
    {
        path: 'home2',
        loadChildren: './Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.module#Home_Database_Login_and_SignupPageModule',
    },
    {
        path: 'privacypolicy',
        loadChildren: './PrivacyPolicy/PrivacyPolicy.module#PrivacyPolicyPageModule',
    },
    {
        path: 'termsofservice',
        loadChildren: './TermsOfService/TermsOfService.module#TermsOfServicePageModule',
    },
    {
        path: 'addjobpage',
        loadChildren: './AddJobPage/AddJobPage.module#AddJobPagePageModule',
    },
    {
        path: 'favouritejobspage',
        loadChildren: './FavouriteJobsPage/FavouriteJobsPage.module#FavouriteJobsPagePageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}