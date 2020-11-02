import faker from 'faker'
import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const sut = new AxiosHttpClient()
    const url = faker.internet.url()
    sut.post({
      url
    })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
