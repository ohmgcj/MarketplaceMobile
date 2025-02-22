module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel" // Removi a duplicação
        ],
        plugins: [
            ["module-resolver", {
                root: ["./"],
                alias: {
                    "@": "./",
                    "tailwind.config": "./tailwind.config.js"
                }
            }]
        ]
    };
};
