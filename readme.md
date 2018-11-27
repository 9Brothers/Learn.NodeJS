Ao configurar o proxy reverso no IIS, será necessário utilizar a regex abaixo para fazer os redirecionamentos de forma correta para a rota /api

```regex
^api*$|api\/(.*)
```