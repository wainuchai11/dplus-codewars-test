function accum(list) {
  let result = "";
  for (let i = 0; i < list.length; i++) {
    let upperChar = list[i].toUpperCase();
    result += upperChar;
    for (let j = 0; j < i; j++) {
      result += list[i].toLowerCase();
    }
    if (i !== list.length - 1) {
      result += "-";
    }
  }
  return result;
}
