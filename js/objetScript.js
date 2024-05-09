var items = localStorage.getItem('itemList')
items = items ? JSON.parse(items) : []
showItems()

function addItem() {
    let Producto = document.getElementById('Producto').value
    let Costo = document.getElementById('Costo').value
    let Observaciones = document.getElementById('Observaciones').value
        
    if (Producto && Observaciones) {
        items.push({
            
            'Producto': Producto,
            'Costo': Costo,
            'Observaciones': Observaciones
        }
       ) 
      
      showItems() 
    }
}

function showItems() {
    document.getElementById('Producto').value = ''
    document.getElementById('Costo').value = ''
    document.getElementById('Observaciones').value = ''
    document.getElementById('Producto').focus()

    let html = ''
    items.forEach((data,indice) => {

    html += '<div class="row border border-warning mt-2 mb-2 ms-2 me-2">'    
        html += ` <div class = "col 4"> ${data.Producto} </div>`
        html += ` <div class = "col 4"> ${data.Costo} </div>`
        html += ` <div class = "col 4"> ${data.Observaciones} </div>`
        html += `<div class="col-2 mt-2 mb-2"> 
                        <a href="#" class="btn btn-danger" onclick=deleteItem(${indice}) > X </a>  
                    </div>`
    html += '</div>'
       
    });


    localStorage.setItem('itemList', JSON.stringify(items) )
    document.getElementById('items-list').innerHTML = html

}

function deleteItem(indice) {
    items.splice(indice, 1)
    showItems()
}


