# HeroGS
HeroGS is a tool that helps you to produce your grid system in simple ways.

## Inspired of amazing packages
- [flexiblegs-scss](https://github.com/flexiblegs/flexiblegs-scss) - Flexible Grid System Scss.
- [bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3.

## Usage
```sass
.grid {
  @include gs(wrap); // init wrapper
  @include gs(gutter, -30px); // use negative value for setting gutter for wrapper
}
.grid__col {
  @include gs(col); // init column
  @include gs(gutter, 30px); // use positive value for setting gutter for columns
  @media (min-width: 768px){
    @include gs(col, 1, 4); // set width for tablet devices and upper
  }
}
```
