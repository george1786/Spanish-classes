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
  constructor(private readonly sanitizer: DomSanitizer) { }

  // Replace this with your own public Google Calendar embed URL.
  private readonly googleCalendarEmbedUrl =
    'https://calendar.google.com/calendar/embed?src=9f1aca63ac981964767516454a21c318133a54f001ea036ae34f9d75d0fe3885%40group.calendar.google.com&ctz=America%2FLos_Angeles'

  get googleCalendarSrc(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.googleCalendarEmbedUrl);
  }
}
