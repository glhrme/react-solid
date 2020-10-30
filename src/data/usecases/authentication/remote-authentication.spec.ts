import { HttpStatusCode } from 'data/protocols/http/http-responses'
import { HttpPostClientSpy } from 'data/test'
import { InvalidCredentialsError } from 'domain/errors/invalid-credentials-error'
import { mockAuthentication } from 'domain/test'
import faker from 'faker'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('RemoteAuthentcation', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })
  test('Should call HttpPostClient with correct Body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const authenticationParams = mockAuthentication()
    const promise = sut.auth(authenticationParams)
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
