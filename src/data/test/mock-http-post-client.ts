import { HttpPostClient, HttpPostParams } from 'data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  body?: object

  async post(params: HttpPostParams) {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}

export default HttpPostClientSpy
