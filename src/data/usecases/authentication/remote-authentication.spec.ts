import faker from 'faker'
import { HttpPostClient } from 'data/protocols/http'
import { HttpPostClientSpy } from '../../test'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpPostClient
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('RemoteAuthentcation', () => {
  test('Should call HttpPostClient with correct URL', () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
