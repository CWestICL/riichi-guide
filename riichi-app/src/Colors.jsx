const style = window.getComputedStyle(document.body)

function getColor(cssVar) {
  return style.getPropertyValue('--' + cssVar);
}

const YAKUCOLORS = {
  gameplay: getColor("purple_mid"),
  closed: getColor("blue_light"),
  penalty: getColor("blue_mid"),
  open: getColor("blue_dark"),
  closedyakuman: getColor("red_mid"),
  openyakuman: getColor("red_dark"),
  lucky: getColor("yellow_mid"),
  luckyyakuman: getColor("yellow_dark"),
  special: getColor("green_mid"),
  closedhan: getColor("gray_light"),
  openhan: getColor("gray_dark"),
  anyhan: getColor("gray_mid"),
}

export default YAKUCOLORS;