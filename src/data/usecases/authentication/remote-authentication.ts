import { HttpPostClient } from 'data/protocols/http'
import { HttpStatusCode } from 'data/protocols/http/http-responses'
import { InvalidCredentialsError } from 'domain/errors/invalid-credentials-error'
import { AccountModel } from 'domain/models/account-model'
import { Authentication, AuthenticationParams } from 'domain/usecases'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: return Promise.resolve({
        accessToken: ''
      })
    }
  }
}

export default RemoteAuthentication
