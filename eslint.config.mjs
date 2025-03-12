import eslint from "@eslint/js";
import tslint from "typescript-eslint";

export default tslint.config(
    {
        ignores: ["dist/**/*"],
        extends: [
            eslint.configs.recommended,
            tslint.configs.stylistic
        ],
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-require-imports": "error",
            "no-underscore-dangle": "error",
        }
    }
);