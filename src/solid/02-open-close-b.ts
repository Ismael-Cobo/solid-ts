import { HttpClient } from './02-open-close-c'

export type Todos = {
  completed: boolean
  id: number
  title: string
  userId: number
}

export type Posts = {
  body: string
  id: number
  title: string
  userId: number
}

export type Photos = {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

export class TodoService {
  constructor(private _httpClient: HttpClient<Todos>) {}

  async getTodoItems() {
    const { data, status } = await this._httpClient.get('https://jsonplaceholder.typicode.com/todos/')
    return data
  }
}

export class PostService {
  constructor(private _httpClient: HttpClient<Posts>) {}

  async getPosts() {
    const { data, status } = await this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
    return data
  }
}

export class PhotosService {
  constructor(private _httpClient: HttpClient<Photos>) {}

  async getPhotos() {
    const { data, status } = await this._httpClient.get('https://jsonplaceholder.typicode.com/photos')
    return data
  }
}
