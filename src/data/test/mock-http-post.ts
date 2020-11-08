import faker from 'faker'
import { HttpPostParams } from 'data/protocols/http'

type MockRequest = { request: string }

export const mockPostRequest = (): HttpPostParams<MockRequest> => ({
  url: faker.internet.url(),
  body: { request: faker.name.title() }
})
