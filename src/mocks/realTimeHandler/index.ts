import { http, HttpResponse } from 'msw'

import { TEST_DATA } from './mocks'

export const realTimeHandlers = [
  /* ----- 회원가입 api ----- */
  http.get(`/realtime`, () => {
    return HttpResponse.json(TEST_DATA)
  }),
]
