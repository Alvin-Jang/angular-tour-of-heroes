import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { slideInAnimation } from "./animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "./assets/forms.css"],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = "Tours of Heroes";

  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
