const getEventAdd = function() {
  const getBtn = document.querySelector('#get-btn')
  const ulId = document.querySelector('ul')
  let flag = true
  getBtn.addEventListener('click', (event)=>{
    // console.log(event.target)
    // axios랑 axios.get 이랑 차이점 확인하기

    // 왜 백엔드URL을 아래 처럼 작성했을까? 꼭 알아야함
    if (flag) {
    const backendURL = 'http://127.0.0.1:8000/api/v1/articles/'
    axios({
      method: 'GET',
      url: backendURL,
      // GET일 때
      params : { 
        content: 'test'
      },
      // data: {
      //   content: 'test',
      //   title: 'title',
      // }
    }).then((response) => {
      response.data.forEach((element) => {
        const li = document.createElement('li')
        const title = document.createElement('span')
        const delBtn = document.createElement('button')
        title.textContent = `${element.id} : ${element.title}`
        delBtn.textContent = '삭제'
        li.appendChild(title)
        li.appendChild(delBtn)
        ulId.appendChild(li)
        delBtn.addEventListener('click', (event) =>{
          event.target.parentNode.remove()
        })
      })
    }).catch((error) => {
      console.log('error = ', error)
    })
    flag = false
  }
  })
}