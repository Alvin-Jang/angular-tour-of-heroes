import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"; //NgModule lives here
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { MessageService } from "./message.service";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";
import { HeroListComponent } from "./heroes/heroes/hero-list.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { HeroService } from "./heroes/hero.service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    /**
     * The HttpClientInMemoryWebApiModule intercepts HTTP requests
     * and returns simulated server responses
     * Remove it when a real server is ready to receive requests
     */
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PageNotFoundComponent,
    CrisisListComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService, InMemoryDataService]
})
export class AppModule {}
