import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { UserPayload } from "./jwt.strategy";

/**
 * Criando um custom decorator para um parâmetro
 */
export const CurrentUser = createParamDecorator(
  // 1o Param: Param para enviar para o decorator
  // 2o Param: Contexto
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.user as UserPayload;
  }
);
