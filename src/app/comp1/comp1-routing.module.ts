import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {Comp1Component} from './comp1.component'


const routes: Routes = [
    { path: "", component: Comp1Component},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class Comp1RoutingModule { }