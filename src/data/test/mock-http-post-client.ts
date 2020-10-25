import { HttpPostClient } from 'data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(url: string) {
    this.url = url
    return Promise.resolve()
  }
}

export default HttpPostClientSpy
