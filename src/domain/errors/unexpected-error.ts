export class UnexpectedError extends Error {
  constructor() {
    super('Aldo de errado aconteceu. Tente novamente')
    this.name = 'UnexpectedError'
  }
}
