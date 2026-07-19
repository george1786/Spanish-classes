# Calendar Setup

This project uses an embedded Google Calendar on the calendar page.

## 1) Make your calendar public

1. Open Google Calendar.
2. In the left sidebar, find your calendar and open Settings.
3. Go to Access permissions for events.
4. Enable public visibility for the calendar.

Note: If the calendar is not public, visitors may see a blank embed or permission error.

## 2) Copy your embed URL

1. In calendar Settings, open Integrate calendar.
2. Copy the Embed URL.
3. If you only have embed HTML, copy the value from the iframe src.

The URL should look like this format:

https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FChicago

## 3) Add it to the app

1. Open [src/app/calendar/calendar.ts](src/app/calendar/calendar.ts).
2. Find the googleCalendarEmbedUrl value.
3. Replace it with your own embed URL.

Example:

```ts
private readonly googleCalendarEmbedUrl =
  'https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FChicago';
```

## 4) Run and verify

1. Start the app:

```bash
ng serve
```

2. Go to the calendar page in the app.
3. Confirm events are visible in the embedded frame.

## Troubleshooting

- Blank calendar: confirm calendar is public.
- Wrong timezone: update the ctz query parameter in the embed URL.
- Old content showing: hard refresh browser (Ctrl+F5).
