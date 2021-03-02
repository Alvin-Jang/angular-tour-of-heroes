import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";
import { HeroListComponent } from "./heroes/heroes/hero-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "heroes", component: HeroListComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "crisis-center", component: CrisisListComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
