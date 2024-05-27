import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
