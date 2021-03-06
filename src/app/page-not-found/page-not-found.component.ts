import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MessageService } from "../message.service";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"]
})
export class PageNotFoundComponent implements OnInit {
  constructor(private messageService: MessageService, private route: Router) {}

  ngOnInit() {
    const url = this.route.url;
    this.messageService.add(`Page not found! Url: ${url}`);
  }
}
