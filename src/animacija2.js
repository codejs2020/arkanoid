/* eslint-disable no-unused-vars */

/**
 * kako rešavamo različit raspored ciglica na različitim nivoima
 *
 *                   xx                 x
 *                   xx                x
 *
 *
 */
let level = 1
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

function levelUp () {
  level++
}

function batMove (event) {
  if (event.key === 'ArrowLeft') {
    bat.x -= 10
    if (bat.x < 0) {
      bat.x = 0
    }
  } else if (event.key === 'ArrowRight') {
    bat.x += 10
    if (bat.x > frame.width - bat.width) {
      bat.x = frame.width - bat.width
    }
  }
  redrawBat()
}

function destroy () { }

// Bonuses
function doubleBall () { }
function glue () { }
function changeBatSize () { }
function changeBallSize () { }
function changeSpeed () { }
function shoot () { }
function strongerBall () { }

// startGame, game and scores are ids

function startGame () {
  drawFrame()
  drawBat()
  drawBall()
  drawBricks()
  d('scores').style.fontSize = '2rem'
  d('lives').style.fontSize = '2rem'
  d('scores').textContent = `Score: ${score}`
  d('lives').textContent = `Lives: ${lives}`
  document.body.addEventListener('keydown', batMove)
}

function livesChange (num, givenLives) { // num is -1 or +x
  givenLives += num
  d('lives').textContent = `Lives: ${givenLives}`
  if (givenLives === 0) gameOver()
  return givenLives
}

function gameOver () {
  d('frame').style.cssText = 'font-size:3rem;margin:100px'
  d('frame').innerHTML = 'GAME OVER'
  d('ball').style.display = 'none'
  d('frame').removeChild('ball')
  // Linija 107 iz nekog razloga ne radi
  d('startGame').disabled = false
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
  el.style.left = bat.x + 'px'
  d('frame').appendChild(el)
}
function redrawBat () {
  const el = d('bat')
  el.style.left = bat.x + 'px'
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
  var w = 20
  var h = 20
  var y = w / 2
  var x = (innerWidth / 2 - w / 2)
  var direction = 'down'
  var direction2 = 'right'
  var speedHorizontal = 3
  var speedVertical = 3
  var bgColor = '#' + Math.random().toString(16).substr(2, 3)

  var ball = document.createElement('div')
  ball.id = 'ball'
  ball.style.position = 'absolute'
  ball.style.top = y + 'px'
  ball.style.left = x + 'px'
  ball.style.background = bgColor
  ball.style.borderRadius = 100 + '%'
  ball.style.width = w + 'px'
  ball.style.height = h + 'px'
  document.body.appendChild(ball)

  ball.style.left = x + 'px'

  function renderAnimation () {
    if (direction === 'up') y -= speedVertical
    else y += speedVertical

    if (direction2 === 'right') x += speedHorizontal
    else x -= speedHorizontal

    if (y > frame.height) {
      direction = 'up'
      lives = livesChange(-1, lives)
    }
    if (y < 0) direction = 'down'

    if (x > frame.width) direction2 = 'left'
    if (x < 0) direction2 = 'right'

    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    window.requestAnimationFrame(renderAnimation)
  }

  window.requestAnimationFrame(renderAnimation)
}

function drawBricks () {
  const currentLevel = levels[level - 1]
  const table = createTable(currentLevel.length, currentLevel[0].length)
  d('frame').appendChild(table)
}

// TODO - translate code in createTable
function createTable (rows, columns) {
  var table = document.createElement('table')
  for (var i = 0; i < rows; i++) {
    var newRow = document.createElement('tr')
    for (var j = 0; j < columns; j++) {
      var newColumn = document.createElement('td')
      newColumn.setAttribute('id', 'cell_' + i + '_' + j)
      const brickNumber = levels[level - 1][i][j]
      newColumn.classList.add('brick')
      newColumn.classList.add('brick-' + brickNumber)
      // newColumn.textContent =  levels[level-1][i][j]
      // console.log(j,i,levels[level-1][i][j])
      newRow.appendChild(newColumn)
    }
    table.appendChild(newRow)
  }
  return table
}

document.getElementById('startGame').addEventListener('click', startGame)

// animacija();
