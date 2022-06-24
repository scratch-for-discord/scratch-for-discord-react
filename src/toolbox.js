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