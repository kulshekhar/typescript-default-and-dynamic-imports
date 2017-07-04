declare module 'data.maybe' {
  const Maybe: {
    fromNullable: <T>(nullable: T | undefined | null) => Maybe<T>;
    Just: <T>(t: T) => Maybe<T>;
    of: <T>(t: T) => Maybe<T>;
    Nothing: () => Maybe<never>;
  };
  interface Maybe<T> {
    value: T;
    get: () => T;
    getOrElse: <T2>(fallback: T2) => T | T2;
    map: <T2>(fn: (t: T) => T2) => Maybe<T2>;
    chain: <T2>(fn: (t: T) => Maybe<T2>) => Maybe<T2>;
    isNothing: boolean;
    isJust: boolean;
  }
  export default Maybe;
}
