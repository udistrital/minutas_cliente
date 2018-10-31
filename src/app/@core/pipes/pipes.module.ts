import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {TxtFilter} from "./txt-filter.pipe"; // <---

@NgModule({
  declarations:[TxtFilter], // <---
  imports:[CommonModule],
  exports:[TxtFilter] // <---
})

export class PipesModule{}