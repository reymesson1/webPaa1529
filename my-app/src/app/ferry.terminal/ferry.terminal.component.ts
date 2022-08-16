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
  newVehicleArrCarSmall: any = [];
  newVehicleArrVanSmall: any = [];
  newVehicleArrTruckLarge: any = [];
  newVehicleArrBusLarge: any = [];
  newVehicle: any = {};
  newFerrySmall: any = 0;
  newFerryLarge: any = 0;
  newFerryCarSmall: any = 0;
  newFerryVanSmall: any = 0;
  newFerryTruckLarge: any = 0;
  newFerryBusLarge: any = 0;
  newFerrySmallCarPrice: any = 0;
  newFerrySmallVanPrice: any = 0;
  newFerryLargeTruckPrice: any = 0;
  newFerryLargeBusPrice: any = 0;


  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) {}

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);

    switch (this.currentVehicle.type) {
      case 0: {
        this.newVehicleArrCarSmall.push(this.currentVehicle);
        break;
      }
      case 1: {
        this.newVehicleArrVanSmall.push(this.currentVehicle);
        break;
      }
      case 2: {
        this.newVehicleArrTruckLarge.push(this.currentVehicle);
        break;
      }
      default: {
        this.newVehicleArrBusLarge.push(this.currentVehicle);
        break;
      }
    }

    this.newFerrySmall = 8 - (this.newVehicleArrCarSmall.length + this.newVehicleArrVanSmall.length)
    this.newFerryLarge = 6 - (this.newVehicleArrTruckLarge.length +this.newVehicleArrBusLarge.length)

    this.newFerrySmallCarPrice = this.newVehicleArrCarSmall.length
    this.newFerrySmallVanPrice = this.newVehicleArrVanSmall.length
    this.newFerryLargeTruckPrice = this.newVehicleArrTruckLarge.length
    this.newFerryLargeBusPrice = this.newVehicleArrBusLarge.length


    if(this.newFerrySmall==0){

      alert('Ferry Small is full');
    }
    if(this.newFerrySmall==0){

      alert('Ferry Small is full');
    }
    if(this.newFerryLarge==0){

      alert('Ferry Large is full');
    }
    if(this.newFerryLarge==0){

      alert('Ferry Large is full');
    }


  }
}
