# Angular i18n

- **Internationalization** (i18n) is the process of designing and preparing your app to be usable in different locales around the world.
- **Localization** (l10n) is the process of building versions of your app for different locales, including extracting text for translation into different languages, and formatting data for particular locales.
- A **locale** identifies a region (such as a country) in which people speak a particular language or language variant. The locale determines the formatting and parsing of dates, times, numbers, and currencies as well as measurement units and the translated names for time zones, languages, and countries.

## Official Angular Steps to Localize an App

### 1. Add the localize package

`ng add @angular/localize`

### 2. Refer to locales by ID

locale ID: `<language-code>-<country-code>`

- English: `en`
- U.S. English: `en-US`
- Canadian English: `en-CA`
- Canadian French: `fr-CA`
- Castilian Spanish: `es-ES`
- Mexican Spanish: `es-MX`
- Klingon: `tlh`

### 3. Format data based on locale

Angular provides the following built-in data transformation pipes that use the LOCALE_ID token to format data according to the locale's rules:

- `DatePipe`: Formats a date value.
- `CurrencyPipe`: Transforms a number to a currency string.
- `DecimalPipe`: Transforms a number into a decimal number string.
- `PercentPipe`: Transforms a number to a percentage string.

### 4. Prepare templates for translations

- Mark text for translations.
- Add helpful descriptions and meanings to help the translator with additional information or context.
- Mark element attributes for translations, such as an image's title - attribute.
- Mark plurals and alternates for translation in order to comply with the pluralization rules and grammatical constructions of different languages.

### 5. Work with translation files

- Extract the source language file. You can optionally change the - location, format, and name.
  - `ng extract-i18n --output-path src/locale`
- Create a translation file for each language by copying the source language file.
- Translate each translation file.
- Translate plurals and alternate expressions separately.

### 6. Merge translations into the app

- you can only `serve` one configuration at a time:
- `ng serve --configuration=en`

To merge the completed translations into the app, use the Angular CLI to `build` a copy of the app's distributable files for each locale.

To build a separate distributable copy of the app for each locale, define the locales in the build configuration in your project's workspace configuration file angular.json.

The build process replaces the original text with translated text, and sets the LOCALE_ID token for each distributable copy of the app. It also loads and registers the locale data.

After merging, you can serve each distributable copy of the app using server-side language detection or different subdirectories.

### 7. Deploy multiple locales

- `npm build`
- `npm run server`

## i18n with transloco

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
