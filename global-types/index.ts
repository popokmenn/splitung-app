/** *
 * Declare global types
 */
type Dispatch<P> = (p: P) => void
type ActionObj<P> = { type: string; payload: P }
type ActionFunc<P> = (dispatch: Dispatch<ActionObj<P>>) => void

declare namespace GlobalTypes {
  export type TAction<PayloadReturn, PayloadArg = void> = (
    arg: PayloadArg
  ) => ActionFunc<PayloadReturn> | ActionObj<PayloadReturn>
  interface ICustomValidator<TData> {
    isError: boolean
    data: TData
  }
  interface ICustomDataStates {
    skip: number
    take: number
    total: number
    sortable: boolean
    filterable: boolean
    reorderable: boolean
    filter: customFilter
    sort: customSort[]
    sortField: customSortField[]
    token: string
  }
  type customFilter = {
    logic: 'and' | 'or' | ''
    filters: filters[]
    isLoading?: boolean
    searchValue: string
  }
  type filters = {
    field: string
    operator: 'contains' | 'eq' | 'uuid'
    value: string | number
  }
  type customSort = {
    field: string
    dir: 'asc' | 'desc'
  }
  type customSortField = {
    field: string
    label: string
  }
  type TOnSortChange = TAction<
    customSort[] | undefined,
    customSort[] | undefined
  >
  type TOnFilterChange = TAction<
    customFilter | undefined,
    customFilter | undefined
  >
  export interface IGlobalInitialState {
    isLoading: boolean
    isError: boolean
    errorCode: number
    errorMessage: string
  }
  export interface IServiceResponse<TData> {
    isError: boolean
    errorMessage: string
    errorCode: number
    data: TData
  }

  interface ISetErrorPayload {
    isError: boolean
    errorMessage: string
    errorCode: number
  }
  interface IEnumItem {
    id: string
    type: string
    value: string
    is_active: boolean
    created_by: string
    created_date: Date
    modified_by: string
    modified_date: Date
  }
}
export default GlobalTypes
