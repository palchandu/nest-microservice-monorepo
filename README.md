# Monorepo Project

## Resources and command to create monorepo and microservice application
[Workspaces](https://docs.nestjs.com/cli/monorepo)
[Libraries](https://docs.nestjs.com/cli/libraries)
[Microservices](https://docs.nestjs.com/microservices/basics)
[Learn NestJS Microservices in 20 Minutes](https://www.youtube.com/watch?v=I8cs8fJYF_w&t=419s)
[Nest JS Microservices Code Baseline](https://www.youtube.com/watch?v=rKRzTfsGk4o&list=PLT5Jhb7lgSBMsAZ7SiV7qksYLQbwIDHtY&index=2)
[Understanding Nx Monorepo](https://www.youtube.com/watch?v=8IWV6I1mK6U&list=PLIGDNOJWiL1-zscX224pibRBb4RChTpgM)
## Commands
- Create App inside monorepo/miceroservice
```
nest generate app book-app
```
- Create App inside api gateway

```
nest generate module book --project api-gateway
nest generate controller book --project api-gateway
nest generate service book --project api-gateway
```
