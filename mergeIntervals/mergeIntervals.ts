/**
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 */

class Interval {
  start: number;
  end: number;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return '[' + this.start + ', ' + this.end + ']';
  }
}

const merge = (intervals: Array<Interval>): Array<Interval> => {
  const merged = [];

  if (intervals.length < 2) {
    return intervals;
  }

  merged.push(intervals[0]);

  for (let index = 1; index < intervals.length; index++) {
    const intervalA = merged.pop();
    const intervalB = intervals[index];

    if (isTwoIntervalsOverlapped(intervalA, intervalB)) {
      const mergedInterval = mergeTwoIntervals(intervalA, intervalB);
      merged.push(mergedInterval);
    } else {
      merged.push(intervalA);
      merged.push(intervalB);
    }
  }

  return merged;
};

const isTwoIntervalsOverlapped = (intervalA: Interval, intervalB: Interval) =>
  !(intervalA.start >= intervalB.end || intervalA.end <= intervalB.start);

const mergeTwoIntervals = (intervalA: Interval, intervalB: Interval) => {
  // intervalA contains intervalB
  if (intervalA.start <= intervalB.start && intervalA.end >= intervalB.end)
    return intervalA;
  // intervalB contains intervalA
  if (intervalB.start <= intervalA.start && intervalB.end >= intervalA.end)
    return intervalB;

  // intervalA left overlap intervalB
  if (
    intervalA.start < intervalB.start &&
    intervalA.end > intervalB.start &&
    intervalA.end < intervalB.end
  ) {
    return new Interval(intervalA.start, intervalB.end);
  }

  //intervalA right overlap intervalB

  if (
    intervalA.start > intervalB.start &&
    intervalA.start < intervalB.end &&
    intervalA.end > intervalB.end
  ) {
    return new Interval(intervalB.start, intervalA.end);
  }

  return null;
};

export const run = () => {
  let mergedIntervals = merge([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ]);

  let result = '';
  for (let i = 0; i < mergedIntervals.length; i++) {
    result += mergedIntervals[i].getInterval() + ' ';
  }
  console.log(`Merged intervals: ${result}`);

  mergedIntervals = merge([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(5, 9),
  ]);
  result = '';
  for (let i = 0; i < mergedIntervals.length; i++) {
    result += mergedIntervals[i].getInterval() + ' ';
  }
  console.log(`Merged intervals: ${result}`);

  mergedIntervals = merge([
    new Interval(1, 4),
    new Interval(2, 6),
    new Interval(3, 5),
  ]);
  result = '';
  for (let i = 0; i < mergedIntervals.length; i++) {
    result += mergedIntervals[i].getInterval() + ' ';
  }
  console.log(`Merged intervals: ${result}`);
};
