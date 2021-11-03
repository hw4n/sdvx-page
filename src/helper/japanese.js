const halfWidths = 'ｧｨｩｪｫｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁｯﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓｬｭｮﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝｦ';
const fullWidths = 'ァィゥェォアイウエオカキクケコサシスセソタチッツテトナニヌネノハヒフヘホマミムメモャュョヤユヨラリルレロワンヲ';

export function halfToFull(str) {
  return fullWidths[halfWidths.indexOf(str)];
};

export function lineOf(str) {
  let line = '';
  if ('アイウエオ'.includes(str)) {
    line = 'あ';
  } else if ('カキクケコ'.includes(str)) {
    line = 'か';
  } else if ('サシスセソ'.includes(str)) {
    line = 'さ';
  } else if ('タチツテト'.includes(str)) {
    line = 'た';
  } else if ('ナニヌネノ'.includes(str)) {
    line = 'な';
  } else if ('ハヒフヘホ'.includes(str)) {
    line = 'は';
  } else if ('マミムメモ'.includes(str)) {
    line = 'ま';
  } else if ('ヤユヨ'.includes(str)) {
    line = 'や';
  } else if ('ラリルレロ'.includes(str)) {
    line = 'ら';
  } else if ('ワヲン'.includes(str)) {
    line = 'わ';
  } 
  return `${line}行`;
}
