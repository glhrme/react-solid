import { HttpResponse } from './http-responses'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  url?: string
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
