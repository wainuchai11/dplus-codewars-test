function phone(s, n) {
  const arr = s.split("\n");
  let foundEntry = null;
  let matchCount = 0;
  arr.forEach((entry) => {
    if (entry.includes(n)) {
      const startNameIndex = entry.indexOf("<") + 1;
      const endNameIndex = entry.indexOf(">");
      if (startNameIndex > 0 && endNameIndex > startNameIndex) {
        const name = entry.substring(startNameIndex, endNameIndex).trim();
        const phoneIndex = entry.indexOf(n);
        if (phoneIndex !== -1) {
          matchCount++;
          if (matchCount > 1) {
            return;
          }
          let address = entry
            .replace(
              entry.substring(entry.indexOf("<"), entry.indexOf(">") + 1),
              ""
            )
            .replace(n, "")
            .replace(/[\/$!?*;:,+]+/g, " ")
            .replace(/_/g, " ")
            .replace(/\s\s+/g, " ")
            .trim();

          foundEntry = `Phone => ${n}, Name => ${name}, Address => ${address}`;
        }
      }
    }
  });

  if (matchCount === 0) {
    return `Error => Not found: ${n}`;
  }
  if (matchCount > 1) {
    return `Error => Too many people: ${n}`;
  }
  return foundEntry;
}
