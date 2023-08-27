import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegistroComponent } from "./components/registro/registro.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";


const AppRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes);