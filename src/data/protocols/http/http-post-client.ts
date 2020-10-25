export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  url?: string
  post(params: HttpPostParams): Promise<void>
}
