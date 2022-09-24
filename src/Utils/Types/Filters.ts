export enum EFilterKey {
  SORTBY = 'SORTBY',
  SEARCHBY = 'SEARCHBY',
  FILTERBY = 'FILTERBY',
}

export type TFilterString = keyof typeof EFilterKey;

export type TFilterState = {
  [key: string]: string | { [key: string]: boolean };
};

export type TFilter = {
  text: string;
  value: string;
};

export type TFilterOptions = {
  sortByOptions?: TFilter[];
  filterByOptions?: TFilter[];
};
