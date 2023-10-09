## Arquiteture Limpa

- HTTP
  Tudo inicia em uma requisição HTTP, que bate na camada mais externa da aplicação (infraestrutura)

- Controllers
  Após chegar na camada de infra, os controllers recaberão a requisição

- Casos de Uso
  Recebe a requisição dos controllers, dependendo do contexto

- Entidade
  Interação com casos de uso, dependendo do contexto

- Repositórios
  Para que cada caso de uso possa buscar dados quando necessário (Prisma)

- Presenter
  Camada que adapta a forma com que a resposta é enviada ao usuário

  - Mesma camada dos controllers
  - Manda ao HTTP (volta da requisição) uma mensagem formatada
