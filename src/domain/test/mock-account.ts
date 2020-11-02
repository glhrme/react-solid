import { AccountModel } from 'domain/models/account-model'
import faker, { fake } from 'faker'
import { AuthenticationParams } from '../usecases'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
