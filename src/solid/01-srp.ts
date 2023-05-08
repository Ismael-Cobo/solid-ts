;(() => {
  interface Product {
    id: number
    name: string
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private _productService: ProductService
    private _mailer: Mailer

    constructor(productService: ProductService, mailer: Mailer) {
      this._productService = productService
      this._mailer = mailer
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      const { name } = this._productService.getProduct(id)
      console.log('Producto: ', { id, name })
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      const productDb = this._productService.saveProduct(product)
      console.log('Guardando en base de datos', productDb)
    }

    notifyClients() {
      const mail = this._mailer.notifyClients([], 'to-client')
      console.log(mail)
    }
  }

  class CartBloc {
    onAdd(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId)
    }
  }

  type MailerTemplate = 'to-client' | 'to-admin'

  class Mailer {
    private masterMail: string = 'ismael@gmail.com'

    notifyClients(emailList: string[], template: MailerTemplate): MailerTemplate {
      return template
    }
  }

  class ProductService {
    getProduct(id: number): { name: string; id: number } {
      // Realiza un proceso para obtener el producto y retornarlo
      return { id, name: 'OLED Tv' }
    }

    saveProduct(product: Product): Product {
      return product
    }
  }

  const productService = new ProductService()
  const mailer = new Mailer()
  const productBloc = new ProductBloc(productService, mailer)
  const cartBloc = new CartBloc()

  productBloc.loadProduct(10)
  productBloc.saveProduct({ id: 10, name: 'OLED TV' })
  productBloc.notifyClients()
  cartBloc.onAdd(10)
})()
