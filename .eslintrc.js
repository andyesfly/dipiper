module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 6,
        sourceType: "module"
    },
    plugins: ["babel"],
    rules: {
        indent: ["off", "tabs"],
        "no-tabs": 0,
        "no-mixed-spaces-and-tabs": 0,
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-unused-components": 0,
        "prettier/prettier": [
            "error",
            // 如果插件配置中修改了相关选项，
            // 则必须在此添加相对应的自定义规则否则就会出现编辑器格式化后ESlint检查无法通过的情况。
            {
                arrowParens: "always",
                bracketSpacing: true,
                htmlWhitespaceSensitivity: "ignore",
                jsxBracketSameLine: true,
                printWidth: 160,
                singleQuote: false,
                semi: true,
                trailingComma: "none",
                tabWidth: 4,
                useTab: false
            },
            { usePrettierrc: true }
        ]
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                jest: true
            }
        }
    ]
};
