export interface IPaginationComponentInputs {
  totalCount: number;
  changePage: (current: number) => void;
  current: number;
}
