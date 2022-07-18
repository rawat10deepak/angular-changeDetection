import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgzoneExampleComponent } from './ngzone-example/ngzone-example.component';
import { ExpressionChangedErrorComponent } from './expression-changed-error/expression-changed-error.component';
import { CdChildComponent } from './change-detector-example/cd-child/cd-child.component';
import { CdParentComponent } from './change-detector-example/cd-parent/cd-parent.component';
import { DefaultCDExampleComponent } from './change-detection-stratergy/default-cdexample/default-cdexample.component';
import { OnpushCDExampleComponent } from './change-detection-stratergy/onpush-cdexample/onpush-cdexample.component';
import { CdPerformanceComponent } from './cd-performance/cd-performance.component';
import { CounterDefaultStrategyComponent } from './change-detection-stratergy/counter-example/counter-default-strategy/counter-default-strategy.component';
import { CounterOnpushStrategyComponent } from './change-detection-stratergy/counter-example/counter-onpush-strategy/counter-onpush-strategy.component';
import { CounterParentComponent } from './change-detection-stratergy/counter-example/counter-parent/counter-parent.component';
import { CounterOnpushObservablesStrategyComponent } from './change-detection-stratergy/counter-example/counter-onpush-observables-strategy/counter-onpush-observables-strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    NgzoneExampleComponent,
    ExpressionChangedErrorComponent,
    CdChildComponent,
    CdParentComponent,
    DefaultCDExampleComponent,
    OnpushCDExampleComponent,
    CdPerformanceComponent,
    CounterDefaultStrategyComponent,
    CounterOnpushStrategyComponent,
    CounterParentComponent,
    CounterOnpushObservablesStrategyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
