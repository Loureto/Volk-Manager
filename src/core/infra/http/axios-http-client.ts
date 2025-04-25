import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/core/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        axiosResponse = error.response
      } else {
        return {
          statusCode: 500,
          body: { message: 'Unexpected error' },
        }
      }
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
