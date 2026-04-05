import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth } from '@mfe-playground/auth';
import { WidgetComponent } from './app/components/widget/widget.component';

bootstrapApplication(WidgetComponent, {
  providers: [provideAuth()],
}).catch((err) => console.error(err));
