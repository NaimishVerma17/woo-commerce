import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapComponent } from '../bootstrap/bootstrap.component';

@NgModule({
  declarations: [BootstrapComponent],
  imports: [
    SharedModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
