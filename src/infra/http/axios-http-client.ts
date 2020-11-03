import { HttpPostClient, HttpPostParams, HttpResponse } from 'data/protocols/http'
import axios, { AxiosResponse } from 'axios'

/**
 * AxiosHttpPostClient<RequestBody, ResponseBody>
 */
export class AxiosHttpClient<T, R> implements HttpPostClient<T, R> {
  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const respose = await axios.post<any, AxiosResponse<R>>(params.url, params.body)
    return {
      statusCode: respose.status,
      body: respose.data
    }
  }
}
