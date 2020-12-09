let listGroup = document.querySelector('.list-group');
let groupItem = document.querySelectorAll('.list-group-item')
let info = document.querySelector('#info');
let btnHoudini = document.getElementById('houdini');

info.style.display = 'none';
listGroup.classList.add('d-none');

btnHoudini.addEventListener('click', function (e) {
    if (listGroup.classList.contains('d-none')) {
        listGroup.classList.remove('d-none');
        btnHoudini.innerHTML = 'Hide destinations'
    }
    else{
        listGroup.classList.add('d-none');
        btnHoudini.innerHTML = 'Show destinations';
        groupItem.forEach(el => el.classList.remove('active'));
        info.style.display = 'none';
    }
});

listGroup.addEventListener('click', function(e) {
    groupItem.forEach(el => el.classList.remove('active'));
    info.style.display = 'block';
    info.innerHTML = e.target.innerHTML;
    e.target.classList.add('active');
      
})


