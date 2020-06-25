//no icone de edição do form, adicione a função onclick
			function editar(id,txt_tarefa){
				//criar um form
				let form = document.createElement('form')
				//atributos do form
				form.action = 'tarefa_controller.php?acao=atualizar'
				form.method = 'post'
				form.className = 'row'


				//criar um input para a entrada do texto
				let inputTarefa = document.createElement('input')
				//atributos do form
				inputTarefa.type = 'text'
				inputTarefa.name = 'tarefa'
				inputTarefa.className = 'form-control col-sm-8'
				inputTarefa.value = txt_tarefa


				//vamos vriar um input hidden para guargar o id da tarefa
				let inputId = document.createElement('input')
				inputId.type = 'hidden'
				inputId.name = 'id'
				inputId.value = id

				//criar um button para o envio
				let button = document.createElement('button')
				//atributos do form
				button.type = 'submit'
				button.className = 'btn btn-warning col-sm-2 ml-3'
				button.innerHTML = 'Atualizar' 

				
				//vamos criar uma arvore de elementos para depois adicionar na pagina
				//1- incluir os elementos no form (linhas 46,47)
				//appendChild espera um parametros que indica qual sera o elemento filho(input) do elemento pai(form)
				form.appendChild(inputTarefa)
				form.appendChild(button)
				form.appendChild(inputId)

				console.log(form)
				//vamos criar um id para recuperamos cada tarefa (linha 101)
				//1- adicione o id na linha de texto do form e concatene ele com o objeto  tarefa acessando o id(variavel da classe tarefa) (linha 101)
				//2-enviar o objeto tarefa com acesso ao id como parametro para a função onclick (linha 17)
				//3- declare o parametro na função editar dentro do script (linha 17)
				
				//selecionar a div que contem a  tarefa e seu respectivo id
				let tarefa = document.getElementById('tarefa_'+id)
				
				//limpando caixa de texto
				tarefa.innerHTML =''

				//vamos incluir o formulario na pagina
				//a função insert before inseri um valor apos a criação dos elementos da pagina, ela espera 2 parametros 1-arvore de elementos 2- nó(elementos filhos) como nao temos elementos filhos adicionaremos apenas o indice de tarfa como 0
				tarefa.insertBefore(form, tarefa[0])
				
				//recuperar a informação e inserir dentro do form  de edição
				//1- dentro da função onclick add mais um parametro, esse parametro devera ser o objeto tarefa acessando cada tarefa e deve ser uma string  (linha 107)
				//2- adicione uma variavel que representa este parametro dentro da função editar (linha 17)
				//3- adicione a variavel em inputTarefa (linha 32) 
			}

			function remover(id){
				location.href = 'todas_tarefas.php?acao=remover&id='+id;
			}
			function realizada(id) {
				location.href = 'todas_tarefas.php?acao=marcar&id='+id;
	
			}