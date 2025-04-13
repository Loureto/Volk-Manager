export class AuthError extends Error {
  constructor(
    readonly message: string,
    readonly name: string,
  ) {
    super(message);
    this.name = name;
  }

  static accessDeniedError(): AuthError {
    return new AuthError("Acesso negado.", "AccessDeniedError");
  }

  static invalidCredentialsError(): AuthError {
    return new AuthError("Credenciais inválidas.", "InvalidCredentialsError");
  }

  static unexpectedError(): AuthError {
    return new AuthError(
      "Algo de errado aconteceu. Tente novamente em breve.",
      "unexpectedError",
    );
  }
}
