# Fundamentos-JavaScript
 Tipos, variaveis e funções

 *formas de escritas de VARIAVEIS:*
- camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
- snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.
- kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.
- PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

- var: forma mais antiga e pode ser usada de forma solta no codigo podendo dar margem a erros, pois, podem ser declaradas de novo e atualizadas.

- let: let pode ser atualizado, mas não declarado novamente fora daquele escopo. Usado quando o valor da variavel vai precisar mudar no decorrer do codigo.

- const: mantêm valores constantes. Declarações com const compartilham algumas semelhanças com as declarações com let, porém, Ela não pode ser atualizada nem declarada novamente. Cada declaração com const, deve ser inicializada novamnete no momento da declaração. 


- Booleanos sendo verdadeiro ou falso, sim ou não.
- conversoes Implícita permite que declaremos Verdadeiro ou falso, expondo a relação entre os valores apresentados, se eles são realmente semelhantes, mesmo que escritos ou apresentados de forma diferentes.
- Conversão Explicita- usada para transformar valores. converte valor contido naquela declaração, sendo numero para "String" ou string para "Number"


- toLowerCase()  converte todos os caracteres da string informada 

- A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém

- typeof - determinar o tipo de dado inserido na variavel 

- Null é um valor atribuido a uma variavel.

- Undefined é quando existe uma ausencia de valor. Quando nenhuma valor é atribuido a var

- A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém

- NaN = NOT A NUMBER(NÃO É UM NUMERO)

- Console Ferramente usada para colocar frases para fora da aplicação. "log" é a criação de um registro podendo colocar qualquer informação dentro dele. "error" vem indicando um tratamento para possiveis erros, usado para inserir erros ou avisar sobre erros.

- Operador de comparação 
== só compara o valor, independente dos tipos apresentador 
=== compara o valor e analisa a semelhança entre o tipo de dado.

- Operador Tenário é indicado para operações mais curtas.
tem função de realizar comparações em uma única linnha, esse operador é, basicamente, um "if/else" que torna o coódigo mais curto usando as sentenças "?" e ":" .

- template-strings surgiu para facilitar a função de concatenação. Para realizar essa transformação é necessario substituir as aspas duplas("), pelo acento grave (`) e colocando os valores das variaveis dentro da string, substituindo os simbolos de soma (+), pelo simbolo de cifrão seguido por chaves (${}) inserindo dentro dela o nome da variavel.

-A cláusula que chamamos de return tem que ser a última linha da função.

- O JavaScript nos oferece algumas funções, como é o caso de funções matemáticas (Math.) usada para realizar e declarar operações matematicas, ex. Math.round() Faz o arredondamento, Math.trunc()Faz truncamentos, ou seja, Desconsidera os números decimais. etc.

- Parametros de função servem para a função receber informações que são necessárias para ela executar corretamente. Ou seja, para uma função, que soma dois números, funcionar corretamente e funcionar com qualquer conjunto de dois números.

- As funções que criamos com Expressão de Funções, normalmente, são anônimas, elas não têm um nome. O que tem nome é a const(variavel) que usamos para executar ela, mas, a função em si, embora ela possa ter um nome, normalmente, não é usada, a deixamos sem nome e atribuimos a função a essa variável.

- Hoisting, que é içar ou levantar; traz todas as declarações para cima do nosso código. É quando o interpretador do JavaScript passa pelo nosso código e puxa todas as declarações para o topo do código. Então, ele vai, primeiro, iniciar todas essas declarações e todas as nossas var, e depois vai executar o nosso código, listando as funções que são declaradas e o que é declarado como var, e antes de começar qualquer coisa.

- Arrow representa uma flexa (=>) em sua sintaxe. Com essa função o codigo passa a ter apenas 1 linha. Ela sempre vem com uma Const e o nome da variavel que usaremos antes de ser declarada. Em caso de duas linhas ou mais de codigo, deve-se usar as chaves e o return.