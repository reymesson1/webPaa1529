import { InjectionToken } from "@angular/core";

export const VEHICLE_PROVIDER = new InjectionToken("IVehicleProvider");

export interface IVehicleProvider {
  GetVehicle(): VehicleSummary;
}

export interface VehicleSummary {
  type: VehicleType;
  category: VehicleSize;
  ferry?: Number;
}

export enum VehicleSize {
  small,
  large
}
export enum VehicleType {
  car,
  van,
  truck,
  bus
}
