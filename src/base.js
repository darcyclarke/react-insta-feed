
//--------------------------------
// Mixins - Base
//--------------------------------

html, body
  background: $bgColor
  color: $baseColor
  font-family: $baseFontFamily
  font-size: $baseFontSize
  line-height: $baseLineHeight
  padding: 0
  margin: 0
  height: auto
  width: auto
  -webkit-font-smoothing: antialiased
  font-smoothing: antialiased
  text-size-adjust: 100%
  box-sizing: border-box
  display: flex
  flex-direction: column
  box-align: center
  overflow-x: hidden

a
  color: inherit
  text-decoration: none

a:hover,
a:visited,
a:active
  color: inherit

a:focus, a:active
  outline: none

a:active, a:hover
  outline: 0

a:hover, button:hover, input[type="submit"]:hover
  cursor: pointer

::-webkit-input-placeholder
  color: lighten($baseColor, 50%)

::-moz-selection
  background: $bgSelectionColor
  color: $selectionColor
  text-shadow: none

::selection
  background: $bgSelectionColor
  color: $selectionColor
  text-shadow: none

.cf:before
.cf:after
  content: ' '
  display: table

.cf:after
  clear: both

.cf
  *zoom: 1

.ir
  font: 0/0 a
  text-shadow: none
  color: transparent

h1, h2, h3, h4, h5, h6, p
  margin-bottom: 24px

p
  line-height: 180%
  margin: 0 0 24px

.break
  display: block

@for $i from 1 through 7
  .color-#{$i}
    color: nth($colors, $i)
  .border-color-#{$i}
    border-color: nth($colors, $i)
  .background-color-#{$i}
    background-color: nth($colors, $i)

.wrapper
  display: block
  position: relative

.header, .footer, .main
  @include flexbox()
  position: relative
  width: 100%

