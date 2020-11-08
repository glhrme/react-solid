import axios from 'axios'
import faker from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: { response: faker.name.title() },
    status: faker.random.number({ min: 100, max: 400 }),
    config: {},
    headers: {},
    statusText: ''
  })
  return mockedAxios
}
