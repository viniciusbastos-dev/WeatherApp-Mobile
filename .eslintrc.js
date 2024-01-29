module.exports = {
    root: true,
    extends: "@react-native",
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "prettier/prettier": [
            ["error", { singleQuote: false }],
            ["error", { tabWidth: 4 }],
        ],
    },
};
