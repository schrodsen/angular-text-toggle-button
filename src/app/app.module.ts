import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ColViewComponent } from './col-view/col-view.component';
import { MaterialModule } from './material-module';
import { RowViewComponent } from './row-view/row-view.component';
import { FileViewComponent } from './file-view/file-view.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ImageSliderDirective } from './image-slider/image-slider.directive';
import { StateIconDirective } from './image-slider/state-icon.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    ColViewComponent,
    RowViewComponent,
    FileViewComponent,
    UploadFileComponent,
    ImageSliderComponent,
    ImageSliderDirective,
    StateIconDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
