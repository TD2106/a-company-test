module.exports = {
    root: true,
    env: {
        "node": true,
        "es6": true,
        "jest": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:import/errors",
        "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        semi: ["error", "always"],
        indent: ["error", 4]
    }
}