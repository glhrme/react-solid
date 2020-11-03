import faker from 'faker'
import axios, { AxiosResponse } from 'axios'
import { HttpPostParams } from 'data/protocols/http'
import { AxiosHttpClient } from './axios-http-client'

type MockResponse = { response: string }
type MockRequest = { request: string }

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedResult: AxiosResponse<MockResponse> = {
  data: { response: faker.name.title() },
  status: faker.random.number({ min: 100, max: 400 }),
  config: {},
  headers: {},
  statusText: ''
}
mockedAxios.post.mockResolvedValue(mockedResult)

const makeSut = (): AxiosHttpClient<MockRequest, MockResponse> => new AxiosHttpClient()

const mockPostRequest = (): HttpPostParams<MockRequest> => ({
  url: faker.internet.url(),
  body: { request: faker.name.title() }
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', () => {
    const sut = makeSut()
    const request = mockPostRequest()
    sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('Should return the correct values', async () => {
    const sut = makeSut()
    const response = await sut.post(mockPostRequest())
    expect(response).toEqual({
      statusCode: mockedResult.status,
      body: mockedResult.data
    })
  })
})
