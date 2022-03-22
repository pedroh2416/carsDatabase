var input = document.getElementById('carInput');
var table = document.getElementById("table");

document.getElementById('btn').addEventListener('click', ()=> {
    getCar(input.value);

})

function getCar() {
    axios.get(`/api/cars`)
    .then(({ data }) => {
        //console.log(data);

        while (table.rows.length > 1)
        {
            table.deleteRow(1);
        }
        for(var i = 0; i <= data.length; i++)
        {
            if(input.value == data[i].make || input.value == data[i].model || input.value == data[i].year){

            var newRow = table.insertRow(table.length)
            cell1 = newRow.insertCell(0);
            cell2 = newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
            
            cell1.innerHTML = data[i].year;
            cell2.innerHTML = data[i].make;
            cell3.innerHTML = data[i].model;
            }
        }
    })
    .catch(err => console.log(err))
}


    /*axios.get('/api/products')
    .then(({ data }) => {
        console.log(data);
    })
    .catch(err => console.log(err))
*/