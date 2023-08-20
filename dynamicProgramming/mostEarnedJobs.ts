//OPT(i)
//OPT(8) max select      4 + OPT(5)
//OPT(8) max not select  OPT(7)

class Job {
  value: number;
  timeRange: [number, number];

  constructor(value: number, timeRange: [number, number]) {
    this.value = value;
    this.timeRange = timeRange;
  }
}

const max = (num1: number, num2: number) => (num1 > num2 ? num1 : num2);

const mostEarnedJobs = () => {
  const jobs: Job[] = [
    new Job(5, [1, 4]),
    new Job(1, [3, 5]),
    new Job(8, [0, 6]),
    new Job(4, [4, 7]),
    new Job(6, [3, 8]),
    new Job(3, [5, 9]),
    new Job(2, [6, 10]),
    new Job(4, [8, 11]),
  ];

  const isOverlapJobs = (job1: Job, job2: Job): boolean => {
    if (job1.timeRange[1] <= job2.timeRange[0]) return false;
    if (job2.timeRange[1] <= job1.timeRange[0]) return false;

    return true;
  };

  const prevs = jobs.map((job, index) => {
    if (index === 0) return 0;
    if (index === 1) return 0;

    for (let i = index - 1; i >= 0; i--) {
      if (!isOverlapJobs(job, jobs[i])) {
        return i + 1;
      }
    }

    return 0;
  });

  //opt = max(vi + opt[prev[i]], opt(i-1))
  let opt = [0];
  let results: number[][]= [[0]]

  for (let i = 1; i <= jobs.length; i++) {
    if(jobs[i-1].value + opt[prevs[i-1]] > opt[i-1]) {
        results = [...results, [...results[prevs[i-1]], i]]
    } else {
        results = [...results, results[i-1]]
    }
    opt = [...opt, max(jobs[i-1].value + opt[prevs[i-1]], opt[i-1])]
  }
};

mostEarnedJobs();
