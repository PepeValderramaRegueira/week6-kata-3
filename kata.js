const streetFighterSelection = (fighters, position, moves) => {
  let currentPosition = [position[0],position[1]]
  let movements = []

  moves.forEach((move, idx) => {
    if (move === "up" && currentPosition[1] === 0) { /* Do nothing */}

    else if (move === "up" && currentPosition[1] === 1) { currentPosition[1] = 0 }

    else if (move === "left" && currentPosition[0] === 0) { currentPosition[0] = fighters[0].length - 1 }

    else if (move === "left" && currentPosition[0] !== 0) { currentPosition[0] = currentPosition[0] - 1 }

    else if (move === "right" && currentPosition[0] === fighters[0].length - 1) { currentPosition[0] = 0 }

    else if (move === "right" && currentPosition[0] !== fighters[0].length - 1) { currentPosition[0] += 1 }

    else if (move === "down" && currentPosition[1] === 1) { /* Do nothing */ }

    else if (move === "down" && currentPosition[1] === 0) { currentPosition[1] = 1 }

    movements.push(
      fighters[currentPosition[1]][currentPosition[0]]
    )
  })

  return movements;
}

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]

// let movements = ['up', 'left', 'right', 'left', 'left']
let movements = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

console.log(
  streetFighterSelection(
    fighters,
    [0, 0],
    movements
  )
)
