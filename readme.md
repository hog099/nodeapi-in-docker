### NodeJS container docker

##### 01 - Criar um dockfile com seguinte conteúdo:
```js
FROM node:14
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm build
EXPOSE 4000
CMD [ "node", "dist/server.js" ]
```
##### 02 - Criar um docker-compose.yml com seguinte conteúdo:
```js
version:  "2"  ## especifica a versão do docker-compose file
services:  ## Define um serviço
  app:  ## nome do serviço
  build:  .  ## localização do dockerfile
  command:  npm start  ## comando a executar
  ports:
      -  "4000:4000"  ## redirecionamento de porta quando chegar alguma requisição na porta 4000 chama o container na porta 4000
  volumes:
      -  .:/u
```

##### 03 - Com docker cli instalado e tudo em ordem, execute o comando abaixo para com as configurações acima, subir e rodar seu serviço:
```bash
docker-compose up -d
```

##### 04 - Para parar de vez o container do serviço execute:
```bash
docker-compose down -d
```


##### 05 - Para buildar e atualizar o serviço com as alterações feitas no código execute:
```bash
docker-compose up -d --build
```


---
 > ###  Comandos docker

```bash
# Listar containers ativos
docker ps
```

```bash
# Listar todos os containers
docker ps -a
```

```bash
# Remover um container
docker rm id_ou_apelido
```

```bash
# Remover imagem
docker rmi >id_da_imagem<
```


```bash
# Remover imagem
docker rmi >id_da_imagem<
```

```bash
# Mapear uma porta para o container
docker run -it -p 8080:80 ubuntu
```

```bash
# Controlar start/stop do container
docker start id_ou_apelido
docker stop id_ou_apelido
```

```bash
# Executar comandos bash sem estar dentro do container
docker exec -it id_ou_apelido comando
```



> ### Outros comandos

```bash
# Criar um container com apelido
docker run --name ubuntinho ubuntu
```

```bash
# Criar um container e entrar no terminal do mesmo
docker run --name ubuntinho ubuntu /bin/bash
```

```bash
# Remover todos containers de uma vez
docker rm $(docker ps -qa)
```

```bash
# Remover todas as imagens de uma vez
docker rmi $(docker images -q)
```
