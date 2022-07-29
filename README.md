# YarnPnpScss

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.
# Reproduce

1. Run `yarn install`
2. Run `yarn build`

In order to see the root error open src\styles.scss

```
// DO NOT WORK
@use 'sass:meta';

@include meta.load-css('tippy.js/dist/tippy.css');
@include meta.load-css('tippy.js/themes/light.css');
@include meta.load-css('tippy.js/animations/scale.css');

// WORKS
// @import 'tippy.js/dist/tippy.css';
// @import 'tippy.js/themes/light.css';
// @import 'tippy.js/animations/scale.css';
```

