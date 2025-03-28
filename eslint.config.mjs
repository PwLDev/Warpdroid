import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tslint.config(
    {
        ignores: ["dist/**/*", "node_modules/**/*", "src/**/*.js"],
        extends: [
            eslint.configs.recommended,
            tslint.configs.stylistic
        ],
        plugins: {
            react
        },
        rules: {
            // Some JS Eslint rules are disabled to avoid false positives
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-require-imports": "error",
            "no-underscore-dangle": "error",
        }
    }
);