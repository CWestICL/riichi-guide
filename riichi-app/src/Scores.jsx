const SIMPLEPOINTS = [
  300,
  500,
  1000,
  2000,
  3000,
  4000,
  6000,
  8000,
]

const FULLROWHEADS = [
  ["mangan", "5"],
  ["haneman", "6-7"],
  ["baiman", "8-10"],
  ["sanbaiman", "11-12"],
  ["yakuman", "13+"],
]

const FULLPOINTS = {
  mangan: {
    non: {
      ron: 8000,
      tsumo: [2000, 4000],
    },
    dealer: {
      ron: 12000,
      tsumo: 4000,
    },
  },
  haneman: {
    non: {
      ron: 12000,
      tsumo: [3000, 6000],
    },
    dealer: {
      ron: 18000,
      tsumo: 6000,
    },
  },
  baiman: {
    non: {
      ron: 16000,
      tsumo: [4000, 8000],
    },
    dealer: {
      ron: 24000,
      tsumo: 8000,
    },
  },
  sanbaiman: {
    non: {
      ron: 24000,
      tsumo: [6000, 12000],
    },
    dealer: {
      ron: 36000,
      tsumo: 12000,
    },
  },
  yakuman: {
    non: {
      ron: 32000,
      tsumo: [8000, 16000],
    },
    dealer: {
      ron: 48000,
      tsumo: 16000,
    },
  },
}

const FUPOINTS = {
  1: {
    20: {
      non: {
        ron: 0,
        tsumo: [0, 0],
      },
      dealer: {
        ron: 0,
        tsumo: 0,
      },
    },
    25: {
      non: {
        ron: 0,
        tsumo: [0, 0],
      },
      dealer: {
        ron: 0,
        tsumo: 0,
      },
    },
    30: {
      non: {
        ron: 1000,
        tsumo: [300, 500],
      },
      dealer: {
        ron: 1500,
        tsumo: 500,
      },
    },
    40: {
      non: {
        ron: 1300,
        tsumo: [400, 700],
      },
      dealer: {
        ron: 2000,
        tsumo: 700,
      },
    },
    50: {
      non: {
        ron: 1600,
        tsumo: [400, 800],
      },
      dealer: {
        ron: 2400,
        tsumo: 800,
      },
    },
    60: {
      non: {
        ron: 2000,
        tsumo: [500, 1000],
      },
      dealer: {
        ron: 2900,
        tsumo: 1000,
      },
    },
    70: {
      non: {
        ron: 2300,
        tsumo: [600, 1200],
      },
      dealer: {
        ron: 3400,
        tsumo: 1200,
      },
    },
  },
  2: {
    20: {
      non: {
        ron: 0,
        tsumo: [400, 700],
      },
      dealer: {
        ron: 0,
        tsumo: 700,
      },
    },
    25: {
      non: {
        ron: 1600,
        tsumo: [0, 0],
      },
      dealer: {
        ron: 2400,
        tsumo: 0,
      },
    },
    30: {
      non: {
        ron: 2000,
        tsumo: [500, 1000],
      },
      dealer: {
        ron: 2900,
        tsumo: 1000,
      },
    },
    40: {
      non: {
        ron: 2600,
        tsumo: [700, 1300],
      },
      dealer: {
        ron: 3900,
        tsumo: 1300,
      },
    },
    50: {
      non: {
        ron: 3200,
        tsumo: [800, 1600],
      },
      dealer: {
        ron: 4800,
        tsumo: 1600,
      },
    },
    60: {
      non: {
        ron: 3900,
        tsumo: [1000, 2000],
      },
      dealer: {
        ron: 5800,
        tsumo: 2000,
      },
    },
    70: {
      non: {
        ron: 4500,
        tsumo: [1200, 2300],
      },
      dealer: {
        ron: 6800,
        tsumo: 2300,
      },
    },
  },
  3: {
    20: {
      non: {
        ron: 0,
        tsumo: [700, 1300],
      },
      dealer: {
        ron: 0,
        tsumo: 1300,
      },
    },
    25: {
      non: {
        ron: 3200,
        tsumo: [800, 1600],
      },
      dealer: {
        ron: 4800,
        tsumo: 1600,
      },
    },
    30: {
      non: {
        ron: 3900,
        tsumo: [1000, 2000],
      },
      dealer: {
        ron: 5800,
        tsumo: 2000,
      },
    },
    40: {
      non: {
        ron: 5200,
        tsumo: [1300, 2600],
      },
      dealer: {
        ron: 7700,
        tsumo: 2600,
      },
    },
    50: {
      non: {
        ron: 6400,
        tsumo: [1600, 3200],
      },
      dealer: {
        ron: 9600,
        tsumo: 3200,
      },
    },
    60: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
    70: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
  },
  4: {
    20: {
      non: {
        ron: 0,
        tsumo: [1300, 2600],
      },
      dealer: {
        ron: 0,
        tsumo: 2600,
      },
    },
    25: {
      non: {
        ron: 6400,
        tsumo: [1600, 3200],
      },
      dealer: {
        ron: 9600,
        tsumo: 3200,
      },
    },
    30: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
    40: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
    50: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
    60: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
    70: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
  },
}

export {SIMPLEPOINTS, FULLROWHEADS, FULLPOINTS, FUPOINTS};