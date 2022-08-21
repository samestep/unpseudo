module.exports = grammar({
  name: "unpseudo",

  rules: {
    source_file: ($) => repeat(field("algorithm", $.algorithm)),

    algorithm: ($) => seq("\\begin{algorithmic}", "\\end{algorithmic}"),
  },
});
