export class UserError extends Error {
  constructor(
    readonly message: string,
    readonly name: string,
  ) {
    super(message);
    this.name = name;
  }

  static accessDeniedError(): UserError {
    return new UserError("Acesso negado.", "AccessDeniedError");
  }

  static notFoundError(): UserError {
    return new UserError("Usuário não encontrado.", "NotFoundError");
  }

  static unexpectedError(): UserError {
    return new UserError(
      "Algo de errado aconteceu. Tente novamente em breve.",
      "unexpectedError",
    );
  }
}
