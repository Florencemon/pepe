let tbody = document.getElementById("tabla_body")
const button = document. createElement('button');

 

// filtros - búsqueda
fetch("http://localhost:3000/clientes")
       .then(res => res.json())
       .then(json => {
              json.map(data => {
                     console.log(data)
                     tbody.append(tabla_func(data));
              })
       })

// crear tabla de datos

function tabla_func({
       id,
       nombre,
       apellido,
       Nick,
       status
}) {
       let td = document.createElement('tr');
       td.innerHTML = ` <td>
       
       ${id}
       </td>

       <td>${nombre}
       </td>

       <td >${apellido}
       </td>

       <td >${Nick}
       </td>

       <td >${status}
       <td>
       <button id="btnAdd" type="button">Editar</button>
       </td>
       
       `
       
       ;
       
       

       return td;
}
