// Generated by https://quicktype.io

import { Producto } from "./producto.model";

export interface ResponseWrapper<T> {
    status:  number;
    ok:      boolean;
    message: string;
    errors:  null|Errors[];
    body:    T;
}

export interface Errors{
    campo: string|null,
    error: string
}

export interface BodyPagination<T> {
    content:          T[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
