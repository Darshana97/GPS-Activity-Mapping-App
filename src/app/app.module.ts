import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { MapComponent } from "./map/map.component";
import { ActivityService } from "./services/activity.service";
import { appRoute } from "../routes";

@NgModule({
  declarations: [AppComponent, ActivityListComponent, MapComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ActivityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
