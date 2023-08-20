// /**
//  * Given a list of non-overlapping intervals sorted by their start time,
//  * insert a given interval at the correct position and merge all necessary intervals to produce a list that
//  * has only mutually exclusive intervals.
//  *
//  * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
//  * Output: [[1,3], [4,7], [8,12]]
//  * Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
//  */

class Interval {
  start: number;
  end: number;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  printInterval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function (intervals: Array<Interval>, newInterval: Interval) {
  let merged = [newInterval];

  for (const interval of intervals) {
    const toBeAssessedInterval = merged.pop();
    if (isIntervalsOverlap(toBeAssessedInterval, interval)) {
      const mergedInterval = mergeTwoIntervals(toBeAssessedInterval, interval);

      merged = [...merged, mergedInterval];
      continue;
    }

    if (toBeAssessedInterval.start < interval.start) {
      merged.push(toBeAssessedInterval);
      merged.push(interval);
    } else {
      merged.push(interval);
      merged.push(toBeAssessedInterval);
    }
  }
  return merged;
};

const isIntervalsOverlap = (
  intervalA: Interval,
  intervalB: Interval,
): boolean => {
  if (intervalA.end < intervalB.start || intervalB.end < intervalA.start) {
    return false;
  }

  return true;
};

const mergeTwoIntervals = (
  intervalA: Interval,
  intervalB: Interval,
): Interval => {
  if (
    intervalA.start <= intervalB.start &&
    intervalA.end >= intervalB.start &&
    intervalA.end <= intervalB.end
  ) {
    return new Interval(intervalA.start, intervalB.end);
  }

  if (intervalA.start >= intervalB.start && intervalA.end <= intervalB.end) {
    return intervalB;
  }

  if (
    intervalA.start >= intervalB.start &&
    intervalA.start <= intervalB.end &&
    intervalA.end >= intervalB.end
  ) {
    return new Interval(intervalB.start, intervalA.end);
  }

  if (intervalB.start >= intervalA.start && intervalB.end <= intervalA.end) {
    return intervalA;
  }

  return intervalA;
};

export const run = () => {
  process.stdout.write('Intervals after inserting the new interval: ');
  let result = insert(
    [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
    new Interval(4, 6),
  );
  for (let i = 0; i < result.length; i++) {
    result[i].printInterval();
  }
  console.log();

  process.stdout.write('Intervals after inserting the new interval: ');
  result = insert(
    [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
    new Interval(4, 10),
  );
  for (let i = 0; i < result.length; i++) {
    result[i].printInterval();
  }
  console.log();

  process.stdout.write('Intervals after inserting the new interval: ');
  result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
  for (let i = 0; i < result.length; i++) {
    result[i].printInterval();
  }
  console.log();
};
