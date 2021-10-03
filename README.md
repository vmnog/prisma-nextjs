# Prisma + Nextjs

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/vmnog/prisma-nextjs?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/vmnog/prisma-nextjs?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/vmnog/prisma-nextjs?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/vmnog/prisma-nextjs?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/vmnog/prisma-nextjs?style=for-the-badge)

> Projeto FullStack criado para estudos de Prisma com Nextjs a partir das documentações das tecnologias listadas a baixo. O projeto tem funcionalidades simples para fins de aprendizado e testes.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

Backend:

- [x] Configuração do Prisma
- [x] Integração com Express
- [x] Validação das rotas com Yup
- [x] Desenvolvimento do CRUD de User
- [ ] Criar hash da password do User
- [ ] Criar sessão do usuário com JWT
- [ ] Mapear rotas que exigem JWT

Frontend:

- NextJS (SSR, SSG)
- TailwindCSS
- SWR
- Yup
- React Hook Form

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais estável de `nodejs`
- Ter `yarn` instalado localmente

## 🚀 Instalando projeto

Para instalar o projeto, siga estas etapas:

- Instale as dependências

```
yarn
```

- Configure seu .env

```
cp .env.example .env
```

## ☕ Usando projeto

Para usar projeto, siga estas etapas:

- Rodar servidor

```
yarn dev
```

- Em outro terminal, execute o comando abaixo para ter acesso ao prisma studio:

```
yarn prisma:studio
```

## 📫 Contribuindo para projeto

Para contribuir com projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin projeto / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://www.github.com/vmnog.png" width="100px;" alt="Foto do Victor Nogueira no GitHub"/><br>
        <sub>
          <b>Victor Nogueira</b>
        </sub>
      </a>
    </td>

  </tr>
</table>

## 😄 Seja um dos contribuidores<br>

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
