//https://leetcode.com/problems/rank-teams-by-votes/

function rankTeams(votes: string[]): string {
  let winnerRanks: Map<string, number[]> = new Map<string, number[]>()

  votes.forEach(v => {
    let currentRank = v.split("")

    currentRank.forEach((team, rank) => {
      if (!winnerRanks.get(team)) {
        winnerRanks.set(team, [])
      }

      winnerRanks.set(team, [...winnerRanks.get(team)!, rank + 1])
    })
  })

  let numberOfRounds = votes.length

  const result = Array.from(winnerRanks.keys()).sort((a, b) => {
    let r = 0
    for (let i = 0; i < numberOfRounds; i++) {
      const rankA = winnerRanks.get(a)![i]
      const rankB = winnerRanks.get(b)![i]

      r += rankA - rankB
    }

    return r === 0 ? a.charCodeAt(0) - b.charCodeAt(0) : r
  })

  return result.join("")
}


rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"])
rankTeams(["WXYZ", "XYZW"])
rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"])
