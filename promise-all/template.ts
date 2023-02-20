declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [k in keyof T]: Awaited<T[k]>
}>

// why keyof T ?