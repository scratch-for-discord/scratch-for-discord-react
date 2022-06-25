const toolbox = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "category",
            name: "Logic",
            colour: "#5C81A6",
            contents: [
                {
                    kind: "controls_if",
                    type: "block"
                },
                {
                    kind: "block",
                    type: "logic_compare"
                },
                {
                    kind: "block",
                    type: "logic_operation"
                },
                {
                    kind: "block",
                    type: "logic_negate"
                },
                {
                    kind: "block",
                    type: "logic_null"
                },
                {
                    kind: "block",
                    type: "logic_ternary"
                },
            ],
        },
        {
            kind: "category",
            name: "Loops",
            colour: "#5ba55b",
            contents: [
                {
                    kind: "block",
                    type: "controls_repeat_ext"
                },
                {
                    kind: "block",
                    type: "controls_for",
                    inputs: {
                        FROM: {
                            block: {
                                type: "math_number",
                                fields: {
                                    NUM: 1
                                }
                            }
                        },
                        TO: {
                            block: {
                                type: "math_number",
                                fields: {
                                    NUM: 10
                                }
                            }
                        },
                        BY: {
                            block: {
                                type: "math_number",
                                fields: {
                                    NUM: 1
                                }
                            }
                        },
                    }
                }
            ]
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