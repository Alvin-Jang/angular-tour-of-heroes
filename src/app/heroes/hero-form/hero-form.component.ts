import { Component } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent {
  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new Hero(21, "Dr Zhang", this.powers[0], "Chunk Overstreet");

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  //TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}