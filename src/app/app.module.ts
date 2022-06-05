import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { ColorAlphaModule } from 'ngx-color/alpha'; // <color-alpha-picker></color-alpha-picker>
import { ColorBlockModule } from 'ngx-color/block'; // <color-block></color-block>
import { ColorChromeModule } from 'ngx-color/chrome'; // <color-chrome></color-chrome>
import { ColorCircleModule } from 'ngx-color/circle'; // <color-circle></color-circle>
import { ColorCompactModule } from 'ngx-color/compact'; // <color-compact></color-compact>
import { ColorGithubModule } from 'ngx-color/github'; // <color-github></color-github>
import { ColorHueModule } from 'ngx-color/hue'; // <color-hue-picker></color-hue-picker>
import { ColorMaterialModule } from 'ngx-color/material'; // <color-material></color-material>
import { ColorPhotoshopModule } from 'ngx-color/photoshop'; // <color-photoshop></color-photoshop>
import { ColorSketchModule } from 'ngx-color/sketch'; // <color-sketch></color-sketch>
import { ColorSliderModule } from 'ngx-color/slider'; // <color-slider></color-slider>
import { ColorSwatchesModule } from 'ngx-color/swatches'; // <color-swatches></color-swatches>
import { ColorTwitterModule } from 'ngx-color/twitter'; // <color-twitter></color-twitter>
import { ColorShadeModule } from 'ngx-color/shade'; // <color-shade-picker></color-shade-picker>

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzAvatarModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzMessageModule,
    NzRadioModule,
    NzTypographyModule,
    NzUploadModule,
    ColorAlphaModule,
    ColorBlockModule,
    ColorChromeModule,
    ColorCircleModule,
    ColorCompactModule,
    ColorGithubModule,
    ColorHueModule,
    ColorMaterialModule,
    ColorPhotoshopModule,
    ColorSketchModule,
    ColorSliderModule,
    ColorSwatchesModule,
    ColorTwitterModule,
    ColorShadeModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
