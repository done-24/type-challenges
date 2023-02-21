type Whitespace = '\n' | '\t' | ' '

type Trim<S extends string> = S extends `${Whitespace}${infer U}` | `${infer U}${Whitespace}` ? Trim<U> : S