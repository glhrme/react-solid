import { HttpPostClient, HttpPostParams } from 'data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(params: HttpPostParams) {
    this.url = params.url
    return Promise.resolve()
  }
}

export default HttpPostClientSpy