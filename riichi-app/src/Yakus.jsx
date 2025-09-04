const YAKUS = [
    {
        jname: "Menzenchin Tsumohou",
        ename: "Win by Self-Draw",
        type: "gameplay",
        closedh: 1,
        openh: 0,
        description: (
            <>
                Closed hand that wins by <i><b>"Tsumo"</b></i>.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "basic",
    },
    {
        jname: "Riichi",
        ename: "Ready Hand",
        type: "gameplay",
        closedh: 1,
        openh: 0,
        description: (
            <>
                Declare <i><b>"Riichi"</b></i> when in tenpai and bet 1,000 points.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "basic",
    },
    {
        jname: "Pinfu",
        ename: "Minimum Fu",
        type: "closed",
        closedh: 1,
        openh: 0,
        description: (
            <>
                Closed hand that scores no fu:
                <ul>
                    <li>All melds are sequences</li>
                    <li>Pair isn't a <b>1</b>, <b>9</b>, honor, round wind or player's seat wind</li>
                    <li>Waiting to complete sequence with two non-terminal tiles at tenpai</li>
                </ul>
            </>
        ),
        note: null,
        examplehand: {
            hand: "234m45789p45688s",
            kan: null,
            winning: ["3p","6p"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Iipeikou",
        ename: "Identical Sequences",
        type: "closed",
        closedh: 1,
        openh: 0,
        description: (
            <>
                Closed hand that contains two identical sequences.
            </>
        ),
        note: null,
        examplehand: {
            hand: "12m445566p11678s",
            kan: null,
            winning: ["3m"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Chiitoitsu",
        ename: "Seven Pairs",
        type: "closed",
        closedh: 2,
        openh: 0,
        description: (
            <>
                Closed hand that contains seven unique pairs.
            </>
        ),
        note: null,
        examplehand: {
            hand: "2266m44p33699s33z",
            kan: null,
            winning: ["6s"],
            tsumo: false,
        },
        difficulty: "intermediate",
    },
    {
        jname: "Ryanpeikou",
        ename: "Two Sets of Identical Sequences",
        type: "closed",
        closedh: 3,
        openh: 0,
        description: (
            <>
                Closed hand that contains two sets of two identical sequences.
            </>
        ),
        note: null,
        examplehand: {
            hand: "112233m77p56677s",
            kan: null,
            winning: ["5s"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Chantaiyao",
        ename: "Terminal or Honor in Each Group",
        type: "penalty",
        closedh: 2,
        openh: 1,
        description: (
            <>
                All melds and the pair contain <b>1</b>, <b>9</b> or an honor tile.
            </>
        ),
        note: null,
        examplehand: {
            hand: "11789m11p123s555z",
            kan: null,
            winning: ["1m","1p"],
            tsumo: false,
        },
        difficulty: "basic",
    },
    {
        jname: "Sanshoku Doujun",
        ename: "Three-Colored Straight",
        type: "penalty",
        closedh: 2,
        openh: 1,
        description: (
            <>
                Hand contains three of the same sequence melds, one in each suit.
            </>
        ),
        note: null,
        examplehand: {
            hand: "456m22246p45688s",
            kan: null,
            winning: ["5p"],
            tsumo: false,
        },
        difficulty: "intermediate",
    },
    {
        jname: "Ittsu",
        ename: "Straight",
        type: "penalty",
        closedh: 2,
        openh: 1,
        description: (
            <>
                Hand contains sequence melds of <b>123</b>, <b>456</b> and <b>789</b> in the same suit.
            </>
        ),
        note: null,
        examplehand: {
            hand: "12345678m678s22z",
            kan: null,
            winning: ["9m"],
            tsumo: false,
        },
        difficulty: "intermediate",
    },
    {
        jname: "Junchan Taiyao",
        ename: "Terminal in Each Meld",
        type: "penalty",
        closedh: 3,
        openh: 2,
        description: (
            <>
                All melds and the pair contain <b>1</b> or <b>9</b>.
            </>
        ),
        note: (
            <>
                (Note: Does not stack with <b>Chantaiyao</b>)
            </>
        ),
        examplehand: {
            hand: "1999m111789p123s",
            kan: null,
            winning: ["1m"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Honitsu",
        ename: "Half Flush",
        type: "penalty",
        closedh: 3,
        openh: 2,
        description: (
            <>
                Hand contains only one suit of number tiles, as well as honor tiles.
            </>
        ),
        note: null,
        examplehand: {
            hand: "12366789p22444z",
            kan: null,
            winning: ["6p","2z"],
            tsumo: false,
        },
        difficulty: "intermediate",
    },
    {
        jname: "Chinitsu",
        ename: "Flush",
        type: "penalty",
        closedh: 6,
        openh: 5,
        description: (
            <>
                Hand is composed entirely of number tiles in the same suit.
            </>
        ),
        note: null,
        examplehand: {
            hand: "1233455667999m",
            kan: null,
            winning: ["3m","6m"],
            tsumo: false,
        },
        difficulty: "intermediate",
    },
    {
        jname: "Tanyao",
        ename: "All Simples",
        type: "open",
        closedh: 1,
        openh: 1,
        description: (
            <>
                Hand contains only the numbers <b>2</b>-<b>8</b>.
            </>
        ),
        note: null,
        examplehand: {
            hand: "33344m222567p88s",
            kan: null,
            winning: ["4m","8s"],
            tsumo: false,
        },
        difficulty: "basic",
    },
    {
        jname: "Yakuhai (Sangenpai)",
        ename: "Dragon Triplet",
        type: "open",
        closedh: "1 Han each",
        openh: "1 Han each",
        description: (
            <>
                Hand contains a triplet of a dragon tile.
            </>
        ),
        note: null,
        examplehand: {
            hand: "123m55p23477s777z",
            kan: null,
            winning: ["5p","7s"],
            tsumo: false,
        },
        difficulty: "basic",
    },
    {
        jname: "Yakuhai (Kazehai)",
        ename: "Wind Triplet",
        type: "open",
        closedh: "1 Han each",
        openh: "1 Han each",
        description: (
            <>
                Hand contains a triplet of the round wind tile or the player's seat wind tile.
            </>
        ),
        note: null,
        examplehand: {
            hand: "22278m567p11166z",
            kan: null,
            winning: ["6m","9m"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Toitoi",
        ename: "All Triplets",
        type: "open",
        closedh: 2,
        openh: 2,
        description: (
            <>
                All melds are triplets.
            </>
        ),
        note: null,
        examplehand: {
            hand: "111m77888p44s222z",
            kan: null,
            winning: ["7p","4s"],
            tsumo: false,
        },
        difficulty: "intermediate",
    },
    {
        jname: "Sanankou",
        ename: "Three Closed Triplets",
        type: "open",
        closedh: 2,
        openh: 2,
        description: (
            <>
                Hand contains three triplets that were entirely self-drawn.
            </>
        ),
        note: (
            <>
                (Note: Closed triplets can't be completed by calling <b>"Ron"</b>)
            </>
        ),
        examplehand: {
            hand: "666m2388p444s333z",
            kan: null,
            winning: ["1p","4p"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Sanshoku Doukou",
        ename: "Three-Colored Triplets",
        type: "open",
        closedh: 2,
        openh: 2,
        description: (
            <>
                Hand contains three of the same triplet, one in each suit.
            </>
        ),
        note: null,
        examplehand: {
            hand: "666m234666p5666s",
            kan: null,
            winning: ["5s"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Sankantsu",
        ename: "Three Kans",
        type: "open",
        closedh: 2,
        openh: 2,
        description: (
            <>
                Hand contains three quadruplet melds made by calling <i><b>"Kan"</b></i>.
            </>
        ),
        note: null,
        examplehand: {
            hand: "345p2s",
            kan: ["4m","9p","5s"],
            winning: ["2s"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Honroutou",
        ename: "Terminals and Honors",
        type: "open",
        closedh: 4,
        openh: 4,
        description: (
            <>
                Hand contains only the numbers <b>1</b>, <b>9</b> and honor tiles.
            </>
        ),
        note: (
            <>
                (Note: Score for <b>Toitoi</b> or <b>Chiitoitsu</b> is accounted for)
            </>
        ),
        examplehand: {
            hand: "11199m999s11333z",
            kan: null,
            winning: ["9m","1z"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Shousangen",
        ename: "Small Three Dragons",
        type: "open",
        closedh: 4,
        openh: 4,
        description: (
            <>
                Hand contains two triplets of dragon tiles, plus a pair of the third dragon tile.
            </>
        ),
        note: (
            <>
                (Note: Score for dragon tile <b>Yakuhai</b> is accounted for)
            </>
        ),
        examplehand: {
            hand: "234m567p5556677z",
            kan: null,
            winning: ["6z","7z"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Kokushi Musou",
        ename: "Thirteen Orphans",
        type: "closedyakuman",
        closedh: "Yakuman",
        openh: 0,
        description: (
            <>
                Closed hand that contains every terminal and honor tile, plus one extra terminal or honor tile.
            </>
        ),
        note: null,
        examplehand: {
            hand: "19m1p19s11234567z",
            kan: null,
            winning: ["9p"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Suuankou",
        ename: "Four Closed Triplets",
        type: "closedyakuman",
        closedh: "Yakuman",
        openh: 0,
        description: (
            <>
                Closed hand that contains four triplets.
            </>
        ),
        note: (
            <>
                (Note: Closed triplets can't be completed by calling <b>"Ron"</b>)
            </>
        ),
        examplehand: {
            hand: "333m666888p4477z",
            kan: null,
            winning: ["4z","7z"],
            tsumo: true,
        },
        difficulty: "full",
    },
    {
        jname: "Chuuren Poutou",
        ename: "Nine Gates",
        type: "closedyakuman",
        closedh: "Yakuman",
        openh: 0,
        description: (
            <>
                Closed hand that contains <b>1112345678999</b> in the same suit, plus one extra tile of that suit.
            </>
        ),
        note: null,
        examplehand: {
            hand: "1112345567899s",
            kan: null,
            winning: ["9s"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Daisangen",
        ename: "Big Three Dragons",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains triplets of all three dragon tiles.
            </>
        ),
        note: null,
        examplehand: {
            hand: "7m345s555666777z",
            kan: null,
            winning: ["7m"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Shousuushii",
        ename: "Small Winds",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains three triplets of wind tiles, plus a pair of the fourth wind tile.
            </>
        ),
        note: null,
        examplehand: {
            hand: "555p1222333444z",
            kan: null,
            winning: ["1z"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Daisuushii",
        ename: "Big Winds",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains triplets of all four wind tiles.
            </>
        ),
        note: null,
        examplehand: {
            hand: "9s111222333444z",
            kan: null,
            winning: ["9s"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Tsuuiisou",
        ename: "All Honors",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains only honor tiles.
            </>
        ),
        note: null,
        examplehand: {
            hand: "1112223355777z",
            kan: null,
            winning: ["3z","5z"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Chinroutou",
        ename: "All Terminals",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains only the numbers <b>1</b> and <b>9</b>.
            </>
        ),
        note: null,
        examplehand: {
            hand: "111999m111p1199s",
            kan: null,
            winning: ["1s","9s"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Ryuuiisou",
        ename: "All Green",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains only the <b>2</b>,<b>3</b>,<b>4</b>,<b>6</b> and/or <b>8</b> of bamboo, and/or the green dragon tile.
            </>
        ),
        note: null,
        examplehand: {
            hand: "22334466688s66z",
            kan: null,
            winning: ["8s","6z"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Suukantsu",
        ename: "Four Kans",
        type: "openyakuman",
        closedh: "Yakuman",
        openh: "Yakuman",
        description: (
            <>
                Hand contains four quadruplet melds made by calling <i><b>"Kan"</b></i>.
            </>
        ),
        note: null,
        examplehand: {
            hand: "1z",
            kan: ["3m","7p","5s","7z"],
            winning: ["1z"],
            tsumo: false,
        },
        difficulty: "full",
    },
    {
        jname: "Ippatsu",
        ename: "One Shot",
        type: "lucky",
        closedh: 1,
        openh: 0,
        description: (
            <>
                Win by your next tile draw after calling <i><b>"Riichi"</b></i>, without any player making a tile call in the meantime.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Double Riichi",
        ename: "Double Ready",
        type: "lucky",
        closedh: 2,
        openh: 0,
        description: (
            <>
                Call <i><b>"Riichi"</b></i> before your first discard, and before any player makes a tile call.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Haitei Raoyue",
        ename: "Win by Last Draw",
        type: "lucky",
        closedh: 1,
        openh: 1,
        description: (
            <>
                Win by drawing the last tile from the live wall and calling <i><b>"Tsumo"</b></i>.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Houtei Raoyui",
        ename: "Win by Last Discard",
        type: "lucky",
        closedh: 1,
        openh: 1,
        description: (
            <>
                Win by calling <i><b>"Ron"</b></i> on the last discard of the round.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Rinshan Kaihou",
        ename: "Win by Dead Wall Draw",
        type: "lucky",
        closedh: 1,
        openh: 1,
        description: (
            <>
                Call <i><b>"Kan"</b></i> to draw a tile from the dead wall, then win by calling <i><b>"Tsumo"</b></i> on that tile.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Chankan",
        ename: "Robbing a Kan",
        type: "lucky",
        closedh: 1,
        openh: 1,
        description: (
            <>
                Win by calling <i><b>"Ron"</b></i> on a tile an opponent draws and adds to their open triplet to form a quadruplet.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Tenhou",
        ename: "Double Ready",
        type: "luckyyakuman",
        closedh: "Yakuman",
        openh: 0,
        description: (
            <>
                Dealer has a winning hand by their first tile draw.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Chiihou",
        ename: "Earthly Hand",
        type: "luckyyakuman",
        closedh: "Yakuman",
        openh: 0,
        description: (
            <>
                Non-dealer has a winning hand by their first tile draw, and before any player makes a tile call.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
    {
        jname: "Nagashi Mangan",
        ename: "Terminal Honor Discards",
        type: "special",
        closedh: "Mangan",
        openh: "Mangan",
        description: (
            <>
                Reach exhaustive draw while every tile in your discard pile is a terminal or honor tile. None of your discards can be called by another player.
            </>
        ),
        note: null,
        examplehand: null,
        difficulty: "full",
    },
]

export default YAKUS;