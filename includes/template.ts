type Includes<T extends readonly any[], U> = T extends [infer Key, ...infer RestKeys]
  ? IsEqual<Key, U> extends true
    ? true
    : Includes<RestKeys, U>
  : false;

type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true: false;