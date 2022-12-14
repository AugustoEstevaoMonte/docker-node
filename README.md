<div align="center">
  <a href="https://github.com/flolu/auth">
    <img width="100px" height="auto" src="./.github/debugging.png" />
  </a>
  <br>
  <h1>Docker Typescript Debugging</h1>
  <p>Example for Debugging Node.js + Typescript Running inside Docker Containers with Hot Reload</p>
</div>

# Features

- Node.js + TypeScript app
- Runs in Docker container
- With hot reload
- Ability to debug with VSCode
- Multiple applications
- A shared library

# Usage

**Recommended OS**: Linux

**Requirements**: Yarn, Docker, Docker Compose

**Setup**

- `yarn install`

**Development**

- `make dev` or `yarn dev` (Start development backend services, http://localhost:3000)
- `Ctrl+F5` (Start debugging and choose which container to debug)

# Codebase

- [`src/server.ts`](app1.ts) simple Node.js server
- [`app2.ts`](app2.ts) another simple Node.js server

# Important files

- [`docker-compose.yml`](docker-compose.yml) backend development environment
- [`package.json`](package.json) contains nodemon configuration for hot reload
- [`.vscode/launch.json`](.vscode/launch.json) launch configuration for debuggers

# Modificando o arquivo docker-compose.yml

- Mexa nos volumes caso queira adicionar alguma pasta fora da ``src``, exemplo de estrutura ``- ./app2.ts:/app2.ts``
- Não se esqueça também de alterar o nodemonConfig watch no arquivo ``package.json`` para incluir a nova pasta ou arquivo

# Credits

<p>Florian Ludewig<a href="https://flolu.de/"></a></p>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
