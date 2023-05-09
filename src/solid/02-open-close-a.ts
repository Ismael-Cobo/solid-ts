import { Photos, PhotosService, PostService, Posts, TodoService, Todos } from './02-open-close-b'
import { HttpClient } from './02-open-close-c'
;(async () => {
  const todoHttpClient = new HttpClient<Todos>()
  const postHttpClient = new HttpClient<Posts>()
  const photoHttpClient = new HttpClient<Photos>()

  const todoService = new TodoService(todoHttpClient)
  const postService = new PostService(postHttpClient)
  const photosService = new PhotosService(photoHttpClient)

  const todos = await todoService.getTodoItems()
  const posts = await postService.getPosts()
  const photos = await photosService.getPhotos()

  console.log({ todos, posts, photos })
})()
