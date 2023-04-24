const myBtnClicked = function() {
    const btn = document.querySelector('#myBtn')
    btn.addEventListener('click',(event) => {
        Clicked()
    })
}


const init = function() {
    console.log('생성자')
}