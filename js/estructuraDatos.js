let lista = []


//espacio.innerHTML= lista
for (let index = 0; index < 5; index++) {
    this.vistaAgregar(index,index+1)
    lista[index] = index+1;
}
function agregar(){
    let valor = parseInt(document.getElementById('input-agregar').value)
    let indice = parseInt(document.getElementById('input-indice-agregar').value)
    console.log('valor= ',valor)
    console.log('inedice= ',indice)
    if (valor){
        if ( indice < 0 ){
            console.log('indice < 0')
        } else if( isNaN(indice)){
            console.log('No hay indice')
            this.vistaAgregar(lista.length,valor)
            lista.push(valor)
        } else  if(indice==0){
            console.log('Indice igual a 0')
            this.vistaAgregar(indice,valor)
            lista.splice(indice,0,valor)
            this.actualizarValoraAgregar(indice)
        } else if(indice <= lista.length && indice>=0){
            console.log('indice dentro del rango de la lista')
            this.vistaAgregar(indice,valor)
            lista.splice(indice,0,valor)
            this.actualizarValoraAgregar(indice)

        }else{
            //Cuando el indice es mayor que el tamaño de la lista
            console.log('indice es mayor que el tamaño de la lista')
        }
    }else{
        console.log('Error en valor')
    }
    //espacio.innerHTML=lista
    console.log('Se oprimio agregar')
}

function vistaAgregar(index, valor){
    let espacio = document.getElementById('contenedor')
    let nuevoNodo = document.createElement('div')
    nuevoNodo.className = 'nodo'
    console.log('indice ', index, ' valor ', valor, ' tamaño lista ', lista.length)
    if(index==lista.length){
        if(index>0){
            let flecha = document.createElement('div')
            flecha.className = 'flecha'
            flecha.id = `flecha${index-1}`
            espacio.appendChild(flecha)
        }
        nuevoNodo.innerHTML = `<h1>${valor}</h1><span id="sub-indice${index}">${index}</span>`
        nuevoNodo.id = `nodo${index}`
        espacio.appendChild(nuevoNodo)
    }else if(index>0 && index<lista.length-1){
        let flecha = document.createElement('div')
        let nodoActual = document.getElementById(`nodo${index}`)
        flecha.className = 'flecha'
        flecha.id = `flecha-1`//Espacio logico para poder organizar todos los id que se corren con la funcion actualizarValores()
        nuevoNodo.innerHTML = `<h1>${valor}</h1><span id="sub-indice-1">${index}</span>`//Sub-indice-1 es el espacio logico del nuevo nodo para cuando se re organice conn la funcion actualizar valores
        nuevoNodo.id = 'nodo-1'
        console.log('Buscando Nodo',index+1)
        console.log('vista agregar:',nodoActual)
        nodoActual.before(nuevoNodo)
        nodoActual.before(flecha)
    }else{
        console.log('Entro en indice 0 ', lista)
        let flecha = document.createElement('div')
        let nodoActual = document.getElementById(`nodo0`)
        flecha.className = 'flecha'
        flecha.id = `flecha-1`
        nuevoNodo.innerHTML = `<h1>${valor}</h1><span id="sub-indice-1">${index}</span>`
        nuevoNodo.id = 'nodo-1'
        nodoActual.before(nuevoNodo)
        nodoActual.before(flecha)
    }
}

function eliminar(){
    
    let valor = parseInt(document.getElementById('input-eliminar').value)
    let indice = parseInt(document.getElementById('input-indice-eliminar').value)
    // console.log('valor= ',valor)
    // console.log('inedice= ',indice)
    if(lista.length>0){
        if (isNaN(valor)){
            if ( indice < 0 ){
                // console.log('indice < 0')
    
            } else if(isNaN(indice)){
                console.log('No hay indice')
                this.vistaEliminar(lista.length-1)
                lista.pop()
            } else if(indice <= lista.length && indice>=0){
                console.log('indice dentro del rango de la lista')
                this.vistaEliminar(indice)
                lista.splice(indice,1)
                this.actualizarValoraEliminar(indice)
            }else{
                //Cuando el indice es mayor que el tamaño de la lista
                // console.log('indice es mayor que el tamaño de la lista')
            }
        }else{
            console.log('Buscando valor')
            let indice = lista.indexOf(valor)
            if(indice>=0){
                lista.splice(indice,1)
            }
        }
    }
    console.log('Se oprimio eliminar')
}

function vistaEliminar(indexE){
    let espacio = document.getElementById('contenedor')
    console.log(indexE)
    let nodoE = document.getElementById(`nodo${indexE}`)
    espacio.removeChild(nodoE)
    if(indexE==lista.length-1 && indexE!=0){
        let flechaE = document.getElementById(`flecha${indexE-1}`)
        espacio.removeChild(flechaE)
    }else if(lista.length>indexE && indexE>=0){
        let flechaE = document.getElementById(`flecha${indexE}`)
        espacio.removeChild(flechaE)
    }
}
function modificar() {
    let valor = parseInt(document.getElementById('input-modificar').value)
    let indice = parseInt(document.getElementById('input-indice-modificar').value)
    if(isNaN(indice) && isNaN(valor)){ //Cuadno los dos inputs estan vacios
        console.log('error porque estan vacios')
    }else if(isNaN(indice) || isNaN(valor)){//Cuando alguno de los dos inputs estan vacios
        console.log('error porque alguno de los inputs esta vacio')
    }else if(indice>=0 && indice<lista.length){//cuando esta el indice dentro el rango de indices
        console.log('Esta en el rango de los indices')
        lista[indice]=valor
    }else{//Cuando no esta el indice en el rango de los indices
        console.log(`El indice ${indice} no esta en el rango [0,${lista.length}]`)
    }
    console.log('Se oprimio modificar')
}
/**
 * Ene esta función se busca al momento de agregar un valor cambiar los indices de los nodos
 */
function actualizarValoraAgregar(indice){
    console.log('Actualizar valor con indice', indice,' lista.length ', lista.length)

    for (let index = lista.length-2; index >= indice; index--) {
        console.log('nodo',index,': ',document.getElementById(`nodo${index}`))   
        let cambiarNodo = document.getElementById(`nodo${index}`)
        cambiarNodo.id =  `nodo${index+1}`
        console.log('cambiar nodo:',cambiarNodo)
        let subIndice = document.getElementById('sub-indice'+index)
        subIndice.id=index+1
        subIndice.innerHTML=index+1
        if(index>indice){
            let flecha = document.getElementById(`flecha${index-1}`)
            flecha.id = index
            console.log('flecha',flecha)
        }
    }
    let flechaNegativa = document.getElementById('flecha-1')
    flechaNegativa.id = `flecha${indice}`
    let nodoNegativo = document.getElementById('nodo-1')
    nodoNegativo.id =`nodo${indice}`
    let spanNegativo = document.getElementById('sub-indice-1')
    spanNegativo.id = `sub-indice${indice}`

    for (let j = lista.length-2; j >= indice; j--) {

        // console.log('sub indice ', j)
        // let subIndice = document.getElementById('sub-indice'+j)
        // console.log('sub tag',subIndice)
        // subIndice.innerHTML = j+1
        // subIndice.id = j+1
        // let nodo = document.getElementById(`nodo${j}`)
        // console.log(`Tag nodo${j}`,document.getElementById(`nodo${j}`))
        // console.log('nodo.id antes',nodo.id)
        // nodo.id = `nodo${j+1}`
        // console.log('nodo.id despues',nodo.id)
        // let flecha = document.getElementById(`flecha${j}`)
        // flecha.id = `flecha${j+1}`
    }
    // let nodoNegativo = document.getElementById('nodo-1')
    // nodoNegativo.id =`nodo${indice}`
    // let spanNegativo = document.getElementById('sub-indice-1')
    // spanNegativo.id = `sub-indice${indice}`
    // if(indice>0){
    //     let flechaNegativa = document.getElementById('flecha-1')
    //     flechaNegativa.id = `flecha${indice}`
    // }
}
function actualizarValoraEliminar(indice){
    if(indice!=lista.length-1){
        for (let index = lista.length-1; index >= indice; index--) {
            let cambiarNodo = document.getElementById(`nodo${index+1}`)
            cambiarNodo.id =  `nodo${index}`
            console.log('Actualizando el nodo ', cambiarNodo.id)
            let subIndice = document.getElementById('sub-indice'+(index+1))
            subIndice.id=`sub-indice${index}`
            subIndice.innerHTML=index
            if(index!=indice){
                let flecha = document.getElementById(`flecha${index}`)
                flecha.id = `flecha${index-1}`
            }
        }
    }
    // for (let index = indice; index < lista.length; index++) {
    //     console.log('sub indice ', index)
    //     let subIndice = document.getElementById(`sub-indice${index+1}`)
    //     subIndice.innerHTML = index
    //     subIndice.id = index
    //     let nodo = document.getElementById(`nodo${index+1}`)
    //     nodo.id = `nodo${index}`
    //     let flecha = document.getElementById(`flecha${index}`)
    //     flecha.id = `flecha${index-1}`
    // }
}