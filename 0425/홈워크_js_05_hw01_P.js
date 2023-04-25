axios.get('https://api.example.com/data')
	.then(function (response) {
	console.log(response)
})


// 다음은 axios 를 사용하여 API 서버로 요청을 보내고, 정상적으로 응답이 왔을 때 응답 데이터를 출력하는 코드이다. (a), (b), (c) 에 들어갈 코드를 작성하시오.
// 동기함수 : 실행 중인 코드의 작업이 끝날 때까지 다음 코드가 실행되지 않는다. (순차적 실행)
// 비동기함수 : 코드가 실행되는 동안에도 다른 작업이 실행될 수 있음.(콜백, 프로미스, async/await 함수를 사용할 수 있음)

// 차이점 :  동기는 '직렬적'으로 작동하는 방식 , 비동기는 '병렬적'으로 작동하는 방식

