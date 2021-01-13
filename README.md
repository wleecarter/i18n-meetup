# Angular i18n

- **Internationalization** (i18n) is the process of designing and preparing your app to be usable in different locales around the world.
- **Localization** (l10n) is the process of building versions of your app for different locales, including extracting text for translation into different languages, and formatting data for particular locales.
- A **locale** identifies a region (such as a country) in which people speak a particular language or language variant. The locale determines the formatting and parsing of dates, times, numbers, and currencies as well as measurement units and the translated names for time zones, languages, and countries.

## Angular i18n with Built-in Tools (abbreviated)

1. `ng add @angular/localize`
2. add `i18n` to any element that you would like translated
3. extract into a translation file via `ng extract-i18n`
4. create a copy of the translation file for each locale
5. (optional) create a `serve` config for each locale

- `ng serve --configuration=en`

6. create `build` configuration for each locale
7. configure server to serve appropriate locale

## Angular i18n with Transloco

`ng add @ngneat/transloco`

## reference

- [Internationalization and localization](https://en.wikipedia.org/wiki/Internationalization_and_localization)
- [Language localisation - Language tags and codes](https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes)
- [Angular i18n guide](https://angular.io/guide/i18n)
- [Transloco](https://ngneat.github.io/transloco/)
- [ngx-translate](http://www.ngx-translate.com)
- [English-to-Klingon translations](https://www.bing.com/translator)
- [Klingon Language Institute](https://www.kli.org)
- [Codes for constructed languages](https://en.wikipedia.org/wiki/Codes_for_constructed_languages)
