import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FerryTerminalComponent } from './ferry.terminal/ferry.terminal.component';
import { HardcodedVehicleService } from "./hardcoded.vehicle.service";
import { VEHICLE_PROVIDER } from "./ivehicle.provider";

@NgModule({
  declarations: [
    AppComponent,
    FerryTerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: VEHICLE_PROVIDER, useClass: HardcodedVehicleService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
