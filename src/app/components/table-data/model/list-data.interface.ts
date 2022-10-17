export interface ListData {
    data: Array<any>;
    totalElements?: number;
    totalPages?: number;
    limit?: number;
    currentPage?: number;
    sort?: string | null;
    sortASC?: boolean | null;
    fromPage?: number;
    toPage?: number;
    query?: Array<any> | null;
    isReset?: boolean;
    originalData?: Array<any>;
}
