import { NgModule } from '@angular/core';
import { NgxVanillaMdcComponent } from './ngx-vanilla-mdc.component';

import { TopAppBarDirective } from './directives/top-app-bar.directive';
import { TextFieldDirective } from './directives/text-field.directive';
import { RippleDirective } from './directives/ripple.directive';
import { MasMdcSwitchDirective } from './directives/switch.directive';
import { MasMdcDialogDirective } from "./directives/dialog.directive";
import { MasMdcCircularProgressDirective } from "./directives/circular-progress.directive";
import { MasMdcLinearProgressDirective } from "./directives/linear-progress.directive";
import { MasMdcBannerDirective } from "./directives/banner.directive";


@NgModule({
  declarations: [
    NgxVanillaMdcComponent,
    TopAppBarDirective,
    TextFieldDirective,
    RippleDirective,
    MasMdcSwitchDirective,
    MasMdcDialogDirective,
    MasMdcCircularProgressDirective,
    MasMdcLinearProgressDirective,
    MasMdcBannerDirective
  ],
  imports: [
  ],
  exports: [
    NgxVanillaMdcComponent,
    TopAppBarDirective,
    TextFieldDirective,
    RippleDirective,
    MasMdcSwitchDirective,
    MasMdcDialogDirective,
    MasMdcCircularProgressDirective,
    MasMdcLinearProgressDirective,
    MasMdcBannerDirective
  ]
})
export class NgxVanillaMdcModule { }
