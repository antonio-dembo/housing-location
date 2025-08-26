import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routesConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    }
];

export default routesConfig;