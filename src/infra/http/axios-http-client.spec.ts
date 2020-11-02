import faker from 'faker'
import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const sut = makeSut()
    const url = faker.internet.url()
    sut.post({
      url
    })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
