// how about now can u see the site?
// no
// wait u r using vs code desktop right?
// ye
// i gave u write access try writing yarn start
// how about now
// nope lol
// fuck i will just push it to github and u can build it locally ig
const toolbox = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "category",
            name: "Logic",
            colour: "#5C81A6",
            contents: [
                {
                    kind: "block",
                    type: "controls_if",
                },
                {
                    kind: "block",
                    type: "logic_compare",
                },
                {
                    kind: "block",
                    type: "logic_operation"
                },
                {
                    kind: "block",
                    type: "logic_negate"
                }
            ],
        },
        {
            kind: "category",
            name: "Math",
            colour: "#5CA65C",
            contents: [
                {
                  kind: "block",
                  type: "math_round",
                },
                {
                  kind: "block",
                  type: "math_number",
                },
            ]
        }
    ]
}
export default toolbox