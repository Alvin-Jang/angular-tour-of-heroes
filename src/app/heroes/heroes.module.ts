import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroListComponent } from "./heroes/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

@NgModule({
  imports: [CommonModule, FormsModule, HeroesRoutingModule],
  declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesModule {}
