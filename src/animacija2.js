/* eslint-disable no-unused-vars */
/**
 * kako rešavamo različit raspored ciglica na različitim nivoima
 *
 *                   xx                 x
 *                   xx                x
 *
 *
 */
const level = 2
const levels = [
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1. red
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 2. red
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 3. red
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 4. red
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]// 5. red
  ],
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1. red
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 2. red
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1], // 3. red
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1], // 4. red
    [2, 2, 1, 1, 1, 1, 1, 1, 2, 2]// 5. red
  ]
]
const bat = { width: 100, height: 10, x: 0 }
const bricks = levels[level - 1]
const frame = { width: 1000, height: 600 }
const score = 0
const highScores = [] // niz objekata koje čuvamo u localStorage
let lives = 3
const settings = { // add missing bonuses
  defaultSpeed: 10,
  balSpeed: 10,
  glue: false
}

function levelUp () {}
function batMove () {}
function destroy () {}

// Bonuses
function doubleBall () {}
function glue () {}
function changeBatSize () {}
function changeBallSize () {}
function changeSpeed () {}
function shoot () {}
function strongerBall () { }

// startGame, game and scores are ids

function startGame () {
  drawFrame()
  drawBat()
  drawBall()
  drawBricks()
}

function livesChange (num) { // num is -1 or +x
  lives += num
}

// document.createElement('div')

// drawBat, drawBall, drawBricks

function d (id) {
  return document.getElementById(id)
}

function c (element) {
  return document.createElement(element)
}

function drawBat () {
  const el = c('div')
  el.id = 'bat'
  el.style.width = bat.width + 'px'
  el.style.height = bat.height + 'px'
  el.style.background = 'blue'
  el.style.borderRadius = '5px'
  el.style.position = 'absolute'
  el.style.bottom = 0
  el.style.left = bat.x
  d('frame').appendChild(el)
}
function drawFrame () {
  const el = c('div')
  el.id = 'frame'
  el.style.width = frame.width + 'px'
  el.style.height = frame.height + 'px'
  el.style.border = 'solid red 2px'
  el.style.position = 'relative'
  d('game').appendChild(el)
  d('startGame').disabled = true
}
function drawBall () {

}
function drawBricks () {
  const currentLevel = levels[level - 1]
  const table = createTable(currentLevel.length, currentLevel[0].length)
  d('frame').appendChild(table)
}

// TODO - translate code in createTable
function createTable (redova, kolona) {
  const tabela = document.createElement('table')
  for (let i = 0; i < redova; i++) {
    const newRow = document.createElement('tr')
    for (let j = 0; j < kolona; j++) {
      const newColumn = document.createElement('td')
      newColumn.setAttribute('id', 'cell_' + i + '_' + j)
      const brickNumber = levels[level - 1][i][j]
      newColumn.classList.add('brick')
      newColumn.classList.add('brick-' + brickNumber)
      // newColumn.textContent =  levels[level-1][i][j]
      // console.log(j,i,levels[level-1][i][j])
      newRow.appendChild(newColumn)
    }
    tabela.appendChild(newRow)
  }
  return tabela
}

document.getElementById('startGame').addEventListener('click', startGame)

function animacija () {
  const w = 20
  const h = 20
  let y = w / 2
  let x = (innerWidth / 2 - w / 2)
  let smer = 'dole'
  let smer2 = 'desno'
  const speedHorizontal = 1
  const speedVertical = 1
  const bgColor = '#' + Math.random().toString(16).substr(2, 3)

  const loptica = document.createElement('div')
  loptica.id = 'loptica'
  loptica.style.position = 'absolute'
  loptica.style.top = y + 'px'
  loptica.style.left = x + 'px'
  loptica.style.background = bgColor
  loptica.style.borderRadius = (Math.random() < 0.5 ? 100 : 0) + '%'
  loptica.style.width = w + 'px'
  loptica.style.height = h + 'px'
  document.body.appendChild(loptica)

  loptica.style.left = x + 'px'

  function renderAnimation () {
    if (smer === 'gore') y -= speedVertical
    else y += speedVertical

    if (smer2 === 'desno') x += speedHorizontal
    else x -= speedHorizontal

    if (y > innerHeight) smer = 'gore'
    if (y < 0) smer = 'dole'

    if (x > innerWidth) smer2 = 'levo'
    if (x < 0) smer2 = 'desno'

    loptica.style.top = y + 'px'
    loptica.style.left = x + 'px'
    window.requestAnimationFrame(renderAnimation)
  }

  window.requestAnimationFrame(renderAnimation)
}
// animacija();
