# letters-graphQL

## env 설정

```
SECRET_KEY=[SECRET KEY]
DB_HOST=[url]
DB_user=[user]
DB_password=[password]
```

- JWT Scret Key 설정
- DB 정보 설정

--- 

## DB 설치 및 초기화

- Docker 설치 후

```shell
npm run db:init
npm run db:migrate
```


### migration 추가
``` shell
npx babel-node migration.js add migration [migration name]
```