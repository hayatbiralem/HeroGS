# HeroGS
HeroGS is a tool that helps you to produce your grid system in simple ways.

## Inspired of amazing packages
- [flexiblegs-scss](https://github.com/flexiblegs/flexiblegs-scss) - Flexible Grid System Scss.
- [bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3.

## Example
```sass
.grid {
  @include gs(wrap); // init wrapper
  @include gs(gutter, -30); // use negative value for setting gutter for wrapper
}
.grid__col {
  @include gs(col); // init column
  @include gs(gutter, 30); // use positive value for setting gutter for columns
  @media (min-width: 768px){
    @include gs(col, 1, 4); // set width for tablet devices and upper
  }
}
```

## Working with Gulp
- `cd path/to/HeroGS` Go to the project directory
- `npm install` Install npm dependencies
- `gulp` Connect to the server, build examples and watch for changes

then open [localhost:8080](http://localhost:8080) from your browser

## Browser support
IE8+ - Because [IE8 is back from the dead](http://www.webdesignerdepot.com/2016/01/ie8-is-back-from-the-dead/)

## TODO
- [ ] Examples
- [ ] Masonry layout metodology
- [ ] Flexbox support for modern browsers
- [ ] Feature polyfills for old browsers
