function diag1Sym(s) {
  const lines = s.split("\n");
  const n = lines.length;
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => lines[j][i]).join("")
  ).join("\n");
}

function rot90Clock(s) {
  const lines = s.split("\n");
  const n = lines.length;
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => lines[n - j - 1][i]).join("")
  ).join("\n");
}

function selfieAndDiag1(s) {
  const lines = s.split("\n");
  const transformed = diag1Sym(s).split("\n");
  return lines.map((line, i) => `${line}|${transformed[i]}`).join("\n");
}

function oper(fct, s) {
  return fct(s);
}
