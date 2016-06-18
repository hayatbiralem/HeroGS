# HeroGS
HeroGS is a tool that helps you to produce your grid system in simple ways.

![HeroGS](src/images/hero.png)

## Inspired of amazing packages
- [flexiblegs-scss](https://github.com/flexiblegs/flexiblegs-scss) - Flexible Grid System Scss.
- [bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3.

## Example
```sass
.grid {
  @include gs-wrap-init(); // init wrapper
}

.grid__col {
  @include gs-col-init(); // init column
}

.grid--gutter-30 {
  @include gs-gutter(-30); // use negative value for setting gutter for wrapper
  .grid__col {
    @include gs-gutter(30); // use positive value for setting gutter for columns
  }
}

@media (min-width: 768px){
  .grid--sm-4 .grid__item {
      @include gs-col(1, 4); // set width for tablet devices and upper
  }
}
```

## Working with Gulp

1. Go to the project directory

    ```bash
    cd path/to/HeroGS
    ```

2. Install npm dependencies

    ```bash
    npm install
    ```

3. Connect to the server, build examples and watch for changes

    ```bash
    gulp
    ```

then open [localhost:4376](http://localhost:4376) from your browser

## Browser support
IE8+ - Because [IE8 is back from the dead](http://www.webdesignerdepot.com/2016/01/ie8-is-back-from-the-dead/)

## Credits
- [Superhero by Moriah Rich from the Noun Project](https://thenounproject.com/search/?q=hero&i=12709)

## TODO
- [ ] Examples
- [x] ~~Masonry layout metodology~~
- [ ] Flexbox support for modern browsers
- [ ] Feature polyfills for old browsers
