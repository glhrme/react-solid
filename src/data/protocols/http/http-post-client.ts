export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  url?: string
  post(params: HttpPostParams): Promise<void>
}
