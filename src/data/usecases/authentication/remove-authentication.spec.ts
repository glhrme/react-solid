import { HttpPostClientSpy } from '../../test'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentcation', () => {
  test('Should call HttpPostClient with correct URL', () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
