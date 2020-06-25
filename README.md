# Gerenciador-de-tarefas-com-PDO-MySQL-e-JavaScript
//criando classes
1- criar uma classe chamada tarefa dentro da pasta fora do diretório publico declarando atributos privados respctivos ao do banco de dados da tabea tarefas
2- dentro da classe taferfas, criar metodos magicos para acessar valores privados
3-criar a classe de conexao do banco 
(
Atributos private
host,dbname,user,pass que recebem os valores que correspondem ao banco de dados
)
4-criar um metodo para conectar,
(criar os atributos e depos instanciar passando dbname, host,root, senha)
5- criar dentro do diretório protegido, um script tarefa service, crie funções public para inserir, ler, atualizar e remover os dados

// enviando dados para o back-end
adiocionar o metodo e a action na tag form
proteger o controle da aplicação- para isso salve o codigo em uma pasta fora do diretorio, e insira ele com um require no arquivo do diretório

//ENTENDO O CODIGO
o script tarefa_controller será responsavel por centralizar todas as funções existentes na aplicação, ele ira receber e enviar os dados do front para o back end.
o tabela model contem o a classe que sera instanciada 
o tabela service ira receber a instancia e registrar conforme a nescessidade

//PREPARANDO PARA INSERIR REGISTROS
iremos trabalhar no script controller
1- recuperar atraves do require, todas as classes que serao usadas.
OBS: OS SCRIPTS QUE SERAO RECUPERADOS ESTAO DENTRO DO DIRETÓRIO PROTEGIDO, MAS ELES SERAO EXECUTADO PELO SCRIPT CONTROLLER DO DIRETÓRIO PUBLICO, SENDO ASSIM E PRECISO ACESSAR ESSES SCRIPTS DE DENTRO DO DIRETORIO PUBLICO
(model,service,conexao)
**
 2- instanciar as classes recuperadas (var = new tarefa(), tabela.service(), conexao())
 3- passar o valor do post para o objeto tarefa
 **
 4- na classe tarefa service,  começaremos a escrever o codigo do metodo inserir mas antes:
 5- crie uma função contrutora para iniciar os valores
 6- os parametros devem ser 1°-conexao com o banco, 2°- o objeto tarefa que foi instanciado a partit da classe tarefa.
7- crie duas variaveis privadas para receber o valor dos parametros
 8- dentro da função, no parametro conexao iremos acessar a função conectar da classe Conexao, para que retornemos apenas o link de conexao e nao o objeto inteiro. ($this->conexao = $conexao->Conectar();)

//INSERIR REGISTROS
1-crie a query do comando sql
2- o stmt recebe a variavel conexao que ira acessar o metodo prepare que ira receber a query
3- o stmt acessa a função bindvalue que, associa o valor que vamos recuperar ao valor que sera inserido no BD para isso:
4-passe o valoe associativo como 1° parametro, a variavel tarefa que representa um objeto da classe tarefa, ira acessar o metodo get da classe para recuperar o valor que ira para o BD
5- o stmt acessa a funçao execute, para executar o código
6- apos feito o codigo de inserção, instancie um objeto de tarefa service passando  as variaveis conexao e tarefa como parametros 
7-o objeto tarefa service ira acessar o metodo inserir
---------------------

//feedback da inserção
1- utilizar header direcionando para a pagina de nova tarefa
2- criar uma mensagem de feedback

// PREPARANDO AMBIENTE DE LISTAGEM DOS REGISTROS
1-no action do formulario de nova tarefa, passe um valor via URL
2- no SCRIPT tarefa controller, recupere o valor passado através da global GET
* a partir desse valor entraremos numa logica de execução
3-vamos vereficar se o valor recebido esta setado e se tem valor igual ao passado na URL, se tudo tudo certo, vamos incluir o codigo do tarefa controller criado na sessao //PREPARANDO PARA INSERIR REGISTROS tópicos 2 e 3 dentro do bloco if
4- no script todas tarefas abra uma tag php, e declare uma variável 'acao' recebendo valor recuperar
5-de um require de tarefa_controller no script todas tarefas.
6- em tarefa controller,vamos verificar os indicesacao passado via  GET para tomar uma decisao, 'acao'  contem 2 valores: recuperar passado manualmente no script e  inserir passado via GET
7-em um if verifique se o valor passado via get esta setado, senao acao recebe o valor que esta em GET[], senao
crie a variavel ação.
8- no script de tarefa_controller, verifique se acao é igual inserir, se for inclua o codigo dentro do bloco if.
9- crie outro if e verifique se acao é igual a recuperar, se for crie um bloco para fazer a consulta das tarefas.

//RECUPERANDO REGISTROS
dentro do bloco if, vamos instanciar um objeto de Tarefa e Conexao
1-vamos escrever a query de consulta no metodo recuperar da classe tarefa service.

//atualizando registros
1-front end, para facilitar, as intruções serao comentadas diretamente no script que em quetão é o todas_tarefas
2-bacl end. passe o script tarefa controller no action do front end, passe via get um valor para o indice acao
3- no tarefa controller, verifique o valor contido no indice acao, se tudo ok, inicie um bloco de codigo
4- nesse bloco de codigo, crie os objetos de tarefa, tarefa service e conexao
5- no objeto tarefa, vamos acessar os metodos set para alterar os valores do id e da tarefa, os novos valores serao passados via post atraves do preenchimento do formulario
6- o objeto tarefa service ira acessar o metodo de Atualização, qual iremos programar no próximo passo
7- crie a query SQL de update 

//REMOVER 
no script, todas tarefas, vamos localizar o icone lixeira, e capturar o click sobre ela com a função onclick
1- essa função sera chamada de remover, tera como parametro o id da informação que sera removida
2-no  script JS, vamos criar a função remover, passe um valor para ser o parametro do id
3-vamos força o redirecionamento da pagina para a própia pagina usando o location.href= ''
4- vamos passar no link o scrpt nova tarefa que iremos trabalhar, e vamos passar um valor pela URL, esse valor sera acao 
recebendo remover + o id (concatenado)
5- vamos criar mais uma bloco de if no script tarefa controller, vamos verificar se acao e igual a remover se sim vamos realizar o cod
6- vamos instanciar um objeto de tarefa, conexao e tarefa service
7-no objto tarefa, vamos acessar o metodo set para passar o valor do ID recuperado
8- o objeto tarefaservice ira acessar o metodo remover da classe tarefa service
9- vamos criar a query de delete na função remover do script tarefa service

//MARCANDO TAREFA CONCLUIDA
no script, todas tarefas, vamos localizar o icone checklist, e capturar o click sobre ela com a função onclick
1- vamos criar a função atualizar e passar um parametro de id que represente a informação selecionada
2-no scrpt do JS, vamos criar a função, passando o parametro id, vamos direcionar o request para a mesma pagina, passano via URL o valor marca para acao + o ID(concatenado) da informação
3-no script tarefa controller, vamos criar mais um bloco de codigo a partir da verificação da variavel acao
4-se acao for igual a marcar, instancie as classes conexao,tarefa,tarefaService
5- no objeto Tarefa, acesse o metodo set,para passar o valor do id recebido e mudar o status do id
6- no objeto TS passe a conexao e o onj tarefa
7- o OBJ TS vai acessar um metodo que iremos criar, para realizar o update dos status
8- no script tarefa service, crie um metodo marcartarefa()
9- crie uma query de update para mudar o status da tarefa
10- no scrpt tarefa controller, acesse o metodo criado acima
11- feedback, qnd o usuario realizar uma tarefa, vamos retirar os icones de checklist e editar
12- no script todas tarefas, abra um if que encapsule esses 2 icones, na condição iremos recuperar o objeto que acessa o status e verificar se ele e igual a pendente, somente se for exibimos os icones

//LISTANDO TAREFAS PENDENTES
1- buscar as informções no banco,
2- criar variavel acao e passar o valor pendente
3- inserir o require na pagina index
4- verificar o valor da  var acao para iniciar o bloco de codigo da 2 consulta
5- instanciar as classes e acessar o metodo recuperar
