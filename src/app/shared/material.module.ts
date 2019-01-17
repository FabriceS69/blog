import {NgModule} from '@angular/core';

import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
