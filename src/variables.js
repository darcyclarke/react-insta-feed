import color from 'Color'

var vars = {}

vars.baseColor = '#282828'
vars.bgColor = '#ffffff'
vars.accentColor = ''

vars.bodyBgColor = color(vars.baseColor).darken(0.25).hexString()
vars.borderColor = color(vars.bgColor).lighten(0.9).hexString()

vars.bgSelectionColor = color(vars.baseColor).lighten(0.15).hexString()
vars.selectionColor = vars.bgColor

vars.baseFontSize = 16
vars.baseLineHeight = '180%'
vars.baseFontFamily = 'Helvetica, Arial, sans-serif'
vars.iconFontFamily = 'icon'
vars.copyMaxWidth = 700

export default vars
