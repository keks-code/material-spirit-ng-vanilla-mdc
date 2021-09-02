import { NgModule } from '@angular/core';
import { NgxVanillaMdcComponent } from './ngx-vanilla-mdc.component';

import { TopAppBarDirective } from './directives/top-app-bar.directive';
import { TextFieldDirective } from './directives/text-field.directive';
import { RippleDirective } from './directives/ripple.directive';
import { MasMdcDialogDirective } from "./directives/dialog.directive";


@NgModule({
  declarations: [
    NgxVanillaMdcComponent,
    TopAppBarDirective,
    TextFieldDirective,
    RippleDirective,
    MasMdcDialogDirective
  ],
  imports: [
  ],
  exports: [
    NgxVanillaMdcComponent,
    TopAppBarDirective,
    TextFieldDirective,
    RippleDirective,
    MasMdcDialogDirective
  ]
})
export class NgxVanillaMdcModule { }
