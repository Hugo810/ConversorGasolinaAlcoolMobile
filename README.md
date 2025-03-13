ConversorGasolinaAlcoolMobile
Este é um aplicativo móvel que ajuda a calcular se é mais vantajoso usar gasolina ou álcool com base nos preços fornecidos.
Funcionalidades

- Entrada de valores para gasolina e álcool
- Cálculo da proporção entre álcool e gasolina
- Exibição do resultado indicando qual combustível é mais vantajoso
  
- Estrutura do projeto
.gitignore App.js app.json index.js package.json .expo/ devices.json README.md assets/ adaptive-icon.png favicon.png icon.png splash-icon.png src/ components/ Form/ index.js style.js ResultProporcao/ index.js style.js Title/ index.js style.js
Estrutura dos Componentes
App.js
O componente principal que renderiza os componentes Title e Form.

src/components/Title
Componente que exibe o título do aplicativo.

src/components/Form
Componente que contém o formulário para entrada dos valores de gasolina e álcool, e exibe o resultado da proporção.

src/components/Form/ResultProporcao
Componente que exibe a mensagem de resultado da proporção calculada.

Estilos
Os estilos são definidos nos arquivos style.js dentro de cada diretório de componente.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
