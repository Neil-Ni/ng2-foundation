import { Component, enableProdMode, ViewContainerRef } from '@angular/core';
import { RouterOutlet, RouteConfig, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';

enableProdMode();

bootstrap(AppComponent, [ROUTER_PROVIDERS,
  {provide: APP_BASE_HREF, useValue: '/'},
  {provide: LocationStrategy, useClass: HashLocationStrategy}]);
