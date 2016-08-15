import vars from './variables'
import color from 'Color'

var styles = {}

styles[`*, *:before, *:after`] = {
  boxSizing: 'inherit',

  [`&, &:hover, &:visited, &:active`] = {
    outline: 'none !important'
  }
}

styles[`html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr,
acronym, address, big, cite, code, del, dfn, em, img,
ins, kbd, q, s, samp, small, strike, strong,
sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video`] = {
  margin: 0,
  padding: 0,
  border: 0,
  verticalAlign: 'baseline',
  position: 'relative'
}

styles[`article, aside, details, figcaption,
figure, footer, header, hgroup,
main, nav, section, summary`] = {
  display: 'block'
}

styles[`audio, canvas, video`] = {
  display: 'inline-block'
}

styles[`input:-webkit-autofill`] = {
  '-webkit-box-shadow': '0 0 0px 1000px white inset'
}

styles[`html, body`] = {
  background: vars.bgColor,
  color: vars.baseColor,
  fontFamily: vars.baseFontFamily,
  fontSize: vars.baseFontSize,
  lineHeight: vars.baseLineHeight,
  padding: 0,
  margin: 0,
  height: 'auto',
  width: 'auto',
  fontSmoothing: 'antialiased',
  textSizeAdjust: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  boxAlign: 'center'
}

styles[`a`] = {
  color: 'inherit',
  textDecoration: 'none'
}

styles[`a:hover, a:visited, a:active`] = {
  color: inherit
}

styles[`a:focus, a:active`] = {
  outline: 'none'
}

styles[`a:active, a:hover`] = {
  outline: 0
}

styles[`a:hover, button:hover, input[type="submit"]:hover`] = {
  cursor: pointer
}

styles[`h1, h2, h3, h4, h5, h6, p`] = {
  marginBottom: 24
}

styles[`p`] = {
  lineHeight: '180%',
  margin: '0 0 24px'
}

styles[`::-webkit-input-placeholder`] = {
  color: color(vars.baseColor).lighten(0.5)
}

styles[`::-moz-selection`] = {
  background: vars.bgSelectionColor,
  color: vars.selectionColor,
  textShadow: none
}

styles[`::selection`] = {
  background: vars.bgSelectionColor,
  color: vars.selectionColor,
  textShadow: none
}

export default styles
