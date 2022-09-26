export enum EFilterKey {
  SORTBY = 'SORTBY',
  SEARCHBY = 'SEARCHBY',
  FILTERBY = 'FILTERBY',
}

export type TFilterString = keyof typeof EFilterKey;

export type TFilterState = {
  SEARCHBY: string;
};

export type TFilter = {
  text: string;
  value: string;
};

export type TFilterOptions = {
  sortByOptions?: TFilter[];
  filterByOptions?: TFilter[];
};
