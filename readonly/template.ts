type MyReadonly2<T, K extends keyof T = keyof T > = {readonly [P in K]: T[P]} & {
  [Key in keyof T as Key extends K ? never : Key] : T[Key] 
}

// = keyof T 默认赋值