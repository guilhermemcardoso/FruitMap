## Sobre o Projeto

Este aplicativo tem como objetivo permitir que um usuário cadastre e vejas árvores frutíferas próximas de alguma localização. O usuário pode logar ou cadastrar-se utilizando seu número de telefone. A validação do número é feita através de um código enviado via SMS e, caso o número ainda não tenha sido cadastrado no sistema, um nome de usuário será solicitado.

O projeto foi desenvolvido utilizando o [Template Avançado Da Rocketseat](https://github.com/Rocketseat/react-native-template-rocketseat-advanced "`Template Avançado Da Rocketseat`"). Que possui as configurações iniciais de algumas das dependências citadas abaixo.

### Feito Com

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;
- [Firebase](https://firebase.google.com/) - O Firebase é uma plataforma de desenvolvimento com diversas funcionalidades que possibilitam a criação de aplicações móveis e web sem a necessidade de backend;
  - [Firebase Auth](https://firebase.google.com/products/auth) - O Firebase Authentication possui diversos métodos de autentição, como a utilização de email e senha, Google, Facebook e também autenticação via telefone, além de outros tipos de autenticação;
  - [Firebase Firestore](https://firebase.google.com/products/firestore) - O Firestore é um banco de dados de documentos NoSQL que permite armazenar, sincronizar e consultar dados facilmente para seus apps para dispositivos móveis e da Web, em escala global;
  - [React Native Firebase](https://rnfirebase.io/) - 
O React Native Firebase é a coleção de pacotes oficialmente recomendada que oferece suporte ao React Native para todos os serviços do Firebase nos aplicativos Android e iOS;

### Pré-requisitos

Seguindo as recomendações do próprio template da Rocketseat, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native. Para isso, você pode seguir o próprio guia da Rocketseat no link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Como executar o projeto
Antes de mais nada, é preciso instalar todas as dependências do projeto, para isso digite o seguinte comando em seu terminal, dentro do diretório do projeto:
> yarn
// ou npm install

Depois de instaladas todas as dependências, é preciso ter os arquivos de configuração do firebase. Para obter estes arquivos, crie um projeto no Firebase, vá em configurações do projeto e adicione um novo aplicativo ao projeto (Android ou iOS), seguindo as orientações do próprio Firebase. Após adicionar o aplicativo ao projeto, você fará download do seguinte arquivo:

`GoogleService-Info.plist // para iOS - salve-o no diretório ios/ do projeto`

`google-services,json // para Android - salve-o no diretório android/app do projeto`

Depois de configurar o projeto Firebase ao projeto React Native, basta executar o comando `yarn ios` para executar o projeto em um dispositivo ou emulador iOS ou `yarn android` para executar o projeto em um dispositivo ou emulador Android.

### Printscreens

[![Splash Screen](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.47.13.png?alt=media&token=20a0b7aa-092b-48d2-a62d-d34e5ae05752 "Splash Screen")](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.47.13.png?alt=media&token=20a0b7aa-092b-48d2-a62d-d34e5ae05752 "Splash Screen")

[![Login](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.49.14.png?alt=media&token=b4955a2a-dd4a-481d-9c2b-6e661d06505a "Login")](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.49.14.png?alt=media&token=b4955a2a-dd4a-481d-9c2b-6e661d06505a "Login")

[![Validação do Código](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.49.47.png?alt=media&token=c2873c4b-0b2b-43a3-abf7-a6b2cdab1575 "Validação do Código")](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.49.47.png?alt=media&token=c2873c4b-0b2b-43a3-abf7-a6b2cdab1575 "Validação do Código")

[![Configurações](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.50.49.png?alt=media&token=9287095e-3690-4156-a40e-2f912c8aa499 "Configurações")](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.50.49.png?alt=media&token=9287095e-3690-4156-a40e-2f912c8aa499 "Configurações")

[![Mapa](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.50.57.png?alt=media&token=0377790f-e62c-44d3-b2cd-5b47f01d35a1 "Mapa")](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.50.57.png?alt=media&token=0377790f-e62c-44d3-b2cd-5b47f01d35a1 "Mapa")

[![Nova Fruta](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.51.07.png?alt=media&token=d4f9fd34-c525-42b9-833d-0d7614870af3 "Nova Fruta")](https://firebasestorage.googleapis.com/v0/b/map-app-3a33b.appspot.com/o/Screen%20Shot%202020-04-27%20at%2016.51.07.png?alt=media&token=d4f9fd34-c525-42b9-833d-0d7614870af3 "Nova Fruta")
