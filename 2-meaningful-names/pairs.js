const keys = [
  1,
  2,
  4,
  8,
  16,
  32
]

function getPairs() {
  const permutations = keys.reduce((acc, curr) => {
    keys.map(k => {
      if (curr !== k && !acc[curr + k]) {
        acc[curr + k] = { k1: curr, k2: k }
      }
    })

    return acc
  }, {})

  console.log(Object.keys(permutations).join('\n'))
}

getPairs()
