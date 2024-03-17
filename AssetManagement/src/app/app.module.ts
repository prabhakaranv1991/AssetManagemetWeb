import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './assets/asset/asset.component';
import { HeaderComponent } from './header/header.component';
import { AssetListComponent } from './assets/asset-list/asset-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AssetComponent,
    HeaderComponent,
    AssetListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
