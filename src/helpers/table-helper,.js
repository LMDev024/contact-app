
{/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<th scope="row">3</th>
<td colspan="2">Larry the Bird</td>
<td>@twitter</td>
</tr> */}

const insertContactTable = ( contac )=>{

}
const deleteContactTable = ( id )=>{

}
export const loadTable = ( contactArray )=>{

    const tbody = document.getElementById('table-body');
    
    let i = 1
    
    for(let contact of contactArray){
        
        let trTable = document.createElement('tr')
        trTable.id =contact.id;

        let tdIndex = document.createElement('td');
        tdIndex.textContent = i;
        i=i+1
        
        let tdName = document.createElement('td');
        tdName.textContent = contact.name;
    
        let tdLastName = document.createElement('td');
        tdLastName.textContent = contact.lastName;
    
        let tdPhoneNumber = document.createElement('td');
        tdPhoneNumber.textContent = contact.phoneNumber;
    
        let tdButtons = document.createElement('td');

        let watchButton = document.createElement('button');
        watchButton.textContent = 'Ver Info';//TODO: remplazar con logo svg (mirar)
        watchButton.className = 'btn btn-primary';
        watchButton.addEventListener('click', () => {
            alert('Aqui va la info del contacto') 
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar'; //TODO: remplazar con logo svg
        deleteButton.className = 'btn btn-danger';
        deleteButton.addEventListener('click', () => {
            alert('Aqui va el eliminar contacto')
        });

        tdButtons.appendChild(watchButton);
        tdButtons.appendChild(deleteButton);

        trTable.appendChild(tdIndex)
        trTable.appendChild(tdName);
        trTable.appendChild(tdLastName);
        trTable.appendChild(tdPhoneNumber);
        trTable.appendChild(tdButtons);
    
        tbody.appendChild(trTable);
    }

}