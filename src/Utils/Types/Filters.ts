export enum EFilterKey {
  SORTBY,
  SERACHBY,
  FILTERBY,
}

export type TFilterString = keyof typeof EFilterKey;
