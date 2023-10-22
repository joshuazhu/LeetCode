//https://leetcode.com/problems/finding-the-users-active-minutes/

function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  let countMap: Map<number, number> = new Map<number, number>()
  let actionHistoryMap: Map<number, Set<number>> = new Map<number, Set<number>>()

  logs.forEach(log => {
    let actionInMinute = actionHistoryMap.get(log[0])

    if (actionInMinute === undefined) {
      actionHistoryMap.set(log[0], new Set([log[1]]))
      countMap.set(log[0], 1)
      return
    }

    if (actionInMinute.has(log[1])) {
      return
    }

    actionHistoryMap.set(log[0], actionInMinute.add(log[1]))
    countMap.set(log[0], countMap.get(log[0])! + 1)
  })

  const actionHistoryArray = Array.from(countMap, (v, _) => ({ count: v[1], id: k[0] }))

  actionHistoryArray.sort((a, b) => a.count - b.count)

  let result: number[] = Array(k).fill(0)

  actionHistoryArray.forEach(({ count, id }) => result[count - 1]++)

  return result
};
