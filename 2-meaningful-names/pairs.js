const teamMemberIds = [
  1,
  2,
  4,
  8,
  16,
  32
]

function getPairsForCurrentTeamMember(permutations, teamMemberId) {
    teamMemberIds.map(pairId => {
      const temp = teamMemberId + pairId
      if (teamMemberId !== pairId && !permutations.includes(temp)) {
        permutations.push(temp)
      }
    })

    return permutations
}

function printAllPairs() {
  const permutations = teamMemberIds.reduce(getPairsForCurrentTeamMember, [])

  console.log(permutations.sort((a, b) => a > b ? 1 : -1).join('\n'))
}

printAllPairs()
