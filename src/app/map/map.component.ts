import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MapService } from "../services/map.service";
import { IActivity } from "../shared/activity.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  constructor(
    private _mapServise: MapService,
    private _route: ActivatedRoute
  ) {}

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit(): void {
    this.activity = this._mapServise.getActivity(
      +this._route.snapshot.params["id"]
    );
  }
}
