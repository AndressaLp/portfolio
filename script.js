let dropdown = document.getElementsByClassName('dropdown')[0];
let modal = document.getElementsByClassName('modal')[0];

function abrirMenu(){
    dropdown.style.display = 'flex';
}

function fecharMenu(){
    dropdown.style.display = 'none';
}

document.querySelectorAll('.project').forEach(function(project){
    project.addEventListener('click', function(){
        const modalId = project.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    })
})

document.querySelectorAll('.close').forEach(function(closeBtn){
    closeBtn.addEventListener('click', function(){
        const modal = closeBtn.closest('.modal');
        modal.style.display = 'none';
    })
})

document.getElementById("data").textContent = "- " + new Date().getFullYear();