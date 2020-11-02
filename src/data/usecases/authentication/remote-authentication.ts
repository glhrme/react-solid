import { HttpPostClient } from 'data/protocols/http'
import { HttpStatusCode } from 'data/protocols/http/http-responses'
import { UnexpectedError, InvalidCredentialsError } from 'domain/errors'
import { AccountModel } from 'domain/models/account-model'
import { Authentication, AuthenticationParams } from 'domain/usecases'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return Promise.resolve(httpResponse.body)
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

export default RemoteAuthentication
