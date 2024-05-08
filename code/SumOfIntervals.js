function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  intervals.forEach((interval) => {
    if (mergedIntervals.length === 0) {
      mergedIntervals.push(interval);
    } else {
      const lastInterval = mergedIntervals[mergedIntervals.length - 1];
      if (lastInterval[1] >= interval[0]) {
        lastInterval[1] = Math.max(lastInterval[1], interval[1]);
      } else {
        mergedIntervals.push(interval);
      }
    }
  });

  let sum = 0;
  mergedIntervals.forEach(([start, end]) => {
    sum += end - start;
  });

  return sum;
}
