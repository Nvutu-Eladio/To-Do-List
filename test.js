let add = [];
// let safe = [];
const product = document.getElementById("produto")

const sum = document.getElementById("valor")

const btnSave = document.querySelector("#save")

const btnDelete = document.querySelector("#delete")

btnSave.addEventListener("click", function(e){

    e.preventDefault();

    let vProduct = product.value
    
    // let result = sum.value

    if (!vProduct) return alert("Preencha os campos")

    add.push(vProduct)

    product.value = ""
    // safe.push(result)

    renderList()
    
    return
    

    // console.log(btnSave)
    
    // console.log(result)
})

function renderList() {
     m
}

