  let botao = document.querySelector('#btnOK');
        let itens_lista = document.querySelector('.lista');
        let addTarefa = document.querySelector('#add-tarefa');
        botao.addEventListener('click', RunBtn)
        let tarefas = []

        document.querySelector('#btnDelete').addEventListener('click', function deletar(excluir)
        { //so funciona quando ao menos 1 item foi marcado
            let desejaExcluir = window.confirm('Deseja mesmo excluir os itens selecionados?')
            console.log(desejaExcluir)
            if(desejaExcluir == true)
            {
                let filtroConcluidas = tarefas.filter(function(item) //pega tudo que estiver dentro de tarefas e que tenha "concluida: false (as não marcadas)"
                {
                    return item.concluida === false 
                })
                    console.log(filtroConcluidas)
            
            //removendo do html
            itens_lista.innerHTML = ''
            let retask = document.createElement('li');
            for(let i = 0; i < filtroConcluidas.length; i++)
            {
                retask = document.createElement('li');
                retask.innerHTML =  `<input type="checkbox" data-id="${i}"> ${filtroConcluidas[i].texto}` //"data-id" foi a formar de identificar no HTML o itemID do js
                itens_lista.appendChild(retask)

            }
            
            tarefas = filtroConcluidas //importante reatribuição para fazer com q tarefas perca os valores antigos que foram deletados.

            }
                
        })


        itens_lista.addEventListener('click', function marcados(checked){
            let nItem = parseInt(checked.target.dataset.id)

             
                if (checked.target.type === 'checkbox'){
                console.log(checked.target.dataset.id) //LEMBRAR QUE ISSO PEGA O ID DO CHECK
                tarefas[nItem].concluida = !tarefas[nItem].concluida //atencao

                 

                }

               
        })

        function RunBtn(event){
            if(addTarefa.value == '')
            {
                alert('Texto invalido')
            }

            else
            {
            let itemID = tarefas.length; //Isso me diz qual item é esse dentro do array para manipula-lo
            console.log(itemID)
    
            let tarefaTXT = {
            texto: addTarefa.value,
            concluida: false
            }
            tarefas.push(tarefaTXT)
            
            let task = document.createElement('li');
            task.innerHTML =  `<input type="checkbox" data-id="${itemID}"> ${tarefaTXT.texto}` //"data-id" foi a formar de identificar no HTML o itemID do js
            
            itens_lista.appendChild(task) //coloca o elemtento <li> dentro do ul
            console.log(tarefas.at(-1))
            }
            
                
        }
        
            
    