import { Component, Inject } from "@angular/core";
import {
  IVehicleProvider,
  VehicleSummary,
  VEHICLE_PROVIDER
} from "../ivehicle.provider";

@Component({
  selector: "ferry-terminal",
  templateUrl: "./ferry.terminal.component.html",
  styleUrls: ["./ferry.terminal.component.css"]
})
export class FerryTerminalComponent {
  currentVehicle?: VehicleSummary;
  newVehicleArrSmall: any = [];
  newVehicleArrLarge: any = [];
  newVehicle: any = {};
  newFerrySmall: any = 0;
  newFerryLarge: any = 0;


  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) {}

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);

    switch (this.currentVehicle.type) {
      case 0: {
        this.newVehicleArrSmall.push(this.currentVehicle);
        break;
      }
      case 1: {
        this.newVehicleArrSmall.push(this.currentVehicle);
        break;
      }
      case 2: {
        this.newVehicleArrLarge.push(this.currentVehicle);
        break;
      }
      default: {
        this.newVehicleArrLarge.push(this.currentVehicle);
        break;
      }
    }

    this.newFerrySmall = 8-this.newVehicleArrSmall.length
    this.newFerryLarge = 6-this.newVehicleArrLarge.length


    if(8-this.newVehicleArrSmall.length==0){

      alert('Ferry Small is full');
    }
    if(6-this.newVehicleArrLarge  .length==0){

      alert('Ferry Large is full');
    }


  }
}
