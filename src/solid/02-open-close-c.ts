type HttpclientModel<T> = {
  data: T[]
  status: number
}

export class HttpClient<T> {
  //   async get(url: string): Promise<HttpclientModel<T>> {
  //     const { data, status } = await axios.get(url)
  //     return { data, status }
  //   }

  async get(url: string): Promise<HttpclientModel<T>> {
    const resp = await fetch(url)
    const data = await resp.json()

    return { data, status: resp.status }
  }
}
