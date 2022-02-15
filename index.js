var id = 0;
document.getElementById('submitBtn').addEventListener('click', () => {
    let date = new Date();
    let table = document.getElementById('leaderboard');
    let newRow = table.insertRow(1);
    newRow.className = "col-auto"
    newRow.setAttribute('id', `entry-${id}`);
    newRow.insertCell(0).innerHTML = document.getElementById('username').value;
    newRow.insertCell(1).innerHTML = document.getElementById('score').value;
    newRow.insertCell(2).innerHTML = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    let deleteBtnLoc = newRow.insertCell(3);
    deleteBtnLoc.appendChild(deleteButton(id++));
    document.getElementById('username').value = '';
});
function deleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let deleteElement = document.getElementById(`entry-${id}`);
        deleteElement.parentNode.removeChild(deleteElement);
    };
    return btn
}



