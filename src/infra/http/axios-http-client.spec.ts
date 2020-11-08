import axios from 'axios'
import { mockAxios } from 'infra/test'
import { mockPostRequest } from 'data/test'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
type SutTypes = {
  sut: AxiosHttpClient<any, any>,
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', () => {
    const { sut, mockedAxios } = makeSut()
    const request = mockPostRequest()
    sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('Should return the correct values', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
