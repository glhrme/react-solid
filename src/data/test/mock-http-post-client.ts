import { HttpPostClient, HttpPostParams } from 'data/protocols/http'
import { HttpResponse, HttpStatusCode } from 'data/protocols/http/http-responses'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string

  body?: T

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}

export default HttpPostClientSpy
