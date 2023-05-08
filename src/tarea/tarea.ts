const task = () => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

  class HtmlElement {
    public id: string
    public type: HtmlType
    constructor(id: string, type: HtmlType) {
      this.id = id
      this.type = type
    }
  }

  class InputAttributes {
    public value: string
    public placeholder: string
    constructor(value: string, placeholder: string) {
      this.value = value
      this.placeholder = placeholder
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface IInputElement {
    id: string
    type: HtmlType
    value: string
    placeholder: string
  }

  class InputElement {
    public htmlElements: HtmlElement
    public inputAttr: InputAttributes
    public InputEvents: InputEvents

    constructor({ id, placeholder, type, value }: IInputElement) {
      this.htmlElements = new HtmlElement(id, type)
      this.inputAttr = new InputAttributes(value, placeholder)
      this.InputEvents = new InputEvents()
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({ id: '123', placeholder: 'escriba aquí', type: 'input', value: '' })

  console.log({ nameField })
}
task()
