# ngx-raw-mdc

Пакет, упрощающий использование MDC в Angular-проектах.

Идея:
* В отличии от других аналогичных пакетов, этот пакет не предоставляет компонентов-оберток вокруг MDC-компонентов. Пакет предусматривает использование "сырого" HTML/CSS/JavaScript из документации по MDC.
* Многие MDC-компоненты требуют JavaScript инициализацию (и последующую очистку). Это выполняется через набор легковесных Angular directives.
* Эти директивы выполняют JavaScript-инициализацию MDC-компонентов, предоствляют run-time доступ к созданным объектам и последующую очистку.
* Такой подход максимально упрощает библиотеку и требует минимум усилий для поддержки новый версий MDC, так как JavaScript-инициализация практически не меняется.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
