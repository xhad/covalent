import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CovalentCommonModule } from '../common/common.module';

import { MessagingComponent } from './messaging.component';

const TD_MESSAGING: Type<any>[] = [
  MessagingComponent,
];

export { MessagingComponent } from './messaging.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TD_MESSAGING,
  ],
  exports: [
    TD_MESSAGING,
  ],
})
export class CovalentMessagingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentMessagingModule,
      providers: [ ],
    };
  }
}
