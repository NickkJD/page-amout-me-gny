// alert('hello!')

// confirm('Вы учите JS?')

// prompt("Какой язык вы учите?", "JS")

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')

// console.log(skill)
// console.log(skill.innerText)

// const skillText = prompt("Какой язык вы учите?", "JS")
// const isLoveValue = confirm("Любите ли вы изучаемый язык?")

// console.log(isLoveValue)

// skill.innerText = skillText
// isLove.innerText = isLoveValue

const getRandomNumInRange = (max, min) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)

    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"

    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}
// console.log(getTask())

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

// const isPlus = Math.random() > 0.5

const gameElements = document.getElementById("myGameId").children

const titelGame = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        titelGame.innerText = "Game start!"
        userAnswer.value = null
        //генерируем задачу и ответ (вызовем функцию при показе пользователю ниже)
        // const task = getTask()
        //показываем задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Check!"
        toggleGameState()
        //меняем кнопку
        //меняем состояние
    } else {
        //сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        titelGame.innerText = (isRight) ? "You win:)" : "You lose:("
        btnGame.innerText = "Start over!"
        toggleGameState()
        //вывести верный результат
        //поменять кнопку и состояние
    }
}

btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        // titelGame.innerText = "Play Game"
        // userAnswer.hidden = true
        // btnGame.innerText = "Начать!"
        // userTask.innerText = null
    }
})

// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

// console.log(gameElements)

const chooserEl = document.querySelectorAll(".choosedBlockContainer > div")
const counterEl = document.querySelector(".choosedBlock span")

// const choosedState = {
//     countsElements: 0,
// }

// const changeCount = (value) => {
//     choosedState.countsElements += value
//     counterEl.innerText = choosedState.countsElements
// }

const choosedState = {
    countsElements: 0,
    setCountValue(value) {
        this.countsElements += value
        counterEl.innerText = this.countsElements
    }
}

const eventFunc = (e) => {
    // chooserEl[i].addEventListener("click", (e) => {
    if (e.target.className === "") {
        // chooserEl[i].className = "choosedElement"
        e.target.className = "choosedElement"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < chooserEl.length; i++) {
    chooserEl[i].addEventListener("click", eventFunc)
}

//убрать у второго элемента обработчки событий
// choosedEl[2].removeEventListener("click", eventFunc)

const postsBlock = document.querySelector(".postsBlockContainer")



function addPost(title, body) {
    const postsTitle = document.createElement("h3")
    const postsBody = document.createElement("span")
    const postItem = document.createElement("p")

    postsTitle.innerText = title
    postsBody.innerText = body

    postsBlock.append(postItem)
    postItem.append(postsTitle, postsBody)
}

//Пример GET запроса на получение записей
function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)
        }
        // addPost(data[7].title, data[7].body)
    })
    //обработчик ошибок
    .catch((err) => {
        console.log(err.message)
    })
}

getPost()

//Пример POST запроса на создание записи
// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify ({
//             title,
//             body,
//             userID,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then(res => {
//             console.log(res)
//             return res.json()
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })
// }

// createPost("title", "body", "15")


b = 576 / "8"

console.log(b)