import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
  constructor(private readonly sanitizer: DomSanitizer) {}

  // Replace this with your own public Google Calendar embed URL.
  private readonly googleCalendarEmbedUrl =
    'https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FChicago';

  get googleCalendarSrc(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.googleCalendarEmbedUrl);
  }
}
