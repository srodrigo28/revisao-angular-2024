### Criando projetos com AngularJS

#### Requisitos
* nodejs 18.13 ou superior

* instalando o angular
npm install -g @angular/cli

* verificar a versão do angular
ng -version

* link
https://v17.angular.io/cli
https://www.youtube.com/watch?v=_26ucwsfQEU

#### Criando projeto
* aqui voce vai habilitar o standalone nesse caso irá que fazer as importações quando chamar um components
ng new aula01

* aqui voce tem o auto-imports já definido. 
ng new aula01 --no-standalone

npx new angular-basico

#### Iniciando o projeto criado
npm start

#### Criando components
ng g c components/component01 --skip-tests=true
ng g c components/component03