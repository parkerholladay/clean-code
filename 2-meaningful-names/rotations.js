const keys = [
  1,
  2,
  4,
  8,
  16,
  32
]
const SOLO = 'solo'

function getNext(keys, offset) {
  const rotation = [keys[0]]
  const temp = keys.slice(1)

  for (let i = 1; i < keys.length; i++) {
    let idxOffset = i + offset
    if (idxOffset > temp.length - 1) {
      idxOffset = idxOffset - temp.length
    }

    rotation[i] = temp[idxOffset]
  }

  return rotation
}

function getPairs(keys, pairCount) {
  const set1 = keys.slice(0, pairCount)
  const set2 = keys.slice(pairCount, keys.length).reverse()

  let pairSequence = []
  for (let i = 0; i < pairCount; i++) {
    if (set1[i] === SOLO || set2[i] === SOLO) {
      const temp1 = set1.splice(i, 1)[0]
      const temp2 = set2.splice(i, 1)[0]

      if (temp2 === SOLO) {
        set1.push(temp1)
        set2.push(temp2)
      } else {
        set1.push(temp2)
        set2.push(temp1)
      }
    }

    pairSequence.push(set1[i], set2[i])
  }

  return pairSequence
}

function shiftFirstPair(pairs, i) {
  const spliceCount = (i % 2 === 0 ? i : i - 1)
  const temp = pairs.splice(0, spliceCount)
  pairs.push(temp)
}

function print(rounds, pairCount) {
  const header = `Round,${Array(pairCount).fill().map((_, i) => `${i + 1}-1,${i + 1}-2`).join(',')}`
  console.log(header)
  rounds.map((pairs, i) => {
    if (pairs[0] !== SOLO)
      shiftFirstPair(pairs, i)
    console.log(`${i + 1},${pairs.join(',')}`)
  })
}

function getPairingRotation() {
  if (keys.length % 2 !== 0) {
    keys.unshift(SOLO)
  }
  const count = keys.length / 2
  const r = []

  for (let i = 1; i < keys.length; i++) {
    const x = i - 1
    const next = getNext(keys, x)

    const p = getPairs(next, count)
    r.push(p)
  }

  print(r, count)
}

getPairingRotation()
