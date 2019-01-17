import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';

import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    BrowserModule,
    MaterialModule
  ]
})

export class AriticleModule {}
