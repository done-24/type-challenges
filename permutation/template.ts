type Permutation<T, Acc = T> = [T] extends [never]
? []
: T extends any ? [T, ...Permutation<Exclude<Acc, T>>] : never;
