import { http, HttpResponse } from 'msw'

import { TEST_DATA } from './mocks'

export const realTimeHandlers = [
  http.get(`/realtime`, () => {
    return HttpResponse.json(TEST_DATA)
  }),
]
