function wordMesh(arr) {
  let meshedLetters = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const currentWord = arr[i];
    const nextWord = arr[i + 1];
    let mesh = "";
    for (let j = 0; j < currentWord.length; j++) {
      if (currentWord.endsWith(nextWord.substr(0, j + 1))) {
        mesh = nextWord.substr(0, j + 1);
      }
    }
    if (!mesh) return "failed to mesh";
    meshedLetters.push(mesh);
  }
  return meshedLetters.join("");
}
