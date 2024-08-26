import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    DateFormatPipe
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    DateFormatPipe
  ]
})
export class SharedModule {}
