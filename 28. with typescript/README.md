## React + Typescript + css Module
- `*.module.css` 파일을 import 시 에러가 발생한다.
  > Cannot find module './*.module.css' or its corresponding type declarations.
- 에러 해결을 위해서는 module 추가를 해주어야 한다.

    ```ts
    // [].d.ts
    declare module "*.module.css"
    ```

- `tsconfig.json` 에 해당 파일을 컴파일시 추가해 주어야 한다.
    ```json
    "include": [
        "src",
        "[].d.ts"
    ]
    ```