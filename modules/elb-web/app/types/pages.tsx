
export type PageProps<T,K>  = {
    params: object & T,
    searchParams: object & K
}