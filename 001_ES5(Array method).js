/**
 * ES5
 * Array methods (map, filter, reduce, some, every)
 */

function getRandomNumber(start, end) {
  var gap = Math.max(end - start, 0)
  return Math.round(Math.random() * gap + start)
}

var genderList = ["M", "F"]

var users = [
  { id: 0, name: "바닐라크림콜드브루", age: 30, gender: "M" },
  { id: 1, name: "세디", age: getRandomNumber(20, 37), gender: "F" },
  {
    id: 2,
    name: "으어",
    age: getRandomNumber(20, 37),
    gender: genderList[getRandomNumber(0, 1)],
  },
  {
    id: 4,
    name: "나마드",
    age: getRandomNumber(20, 37),
    gender: genderList[getRandomNumber(0, 1)],
  },
]

/**
 * @description Array.prototype.map
 * get user name
 */

// ["바닐라크림콜드브루", "세디", "으어", "나마드"]
function getUserNames() {
  var result = []
  for (var i = 0; i < users.length; i++) {
    result.push(users[i].name)
  }
  return result
}
var userages = users.map(function(user) {
  return user.age
})
var usernames = users.map(u => u.name)

/**
 * @description Array.prototype.filter
 * get 30살 이상
 */

function getUserUpper30() {
  var result = []

  for (var i = 0; i < users.length; i++) {
    if (users[i].age > 30) result.push(users[i])
  }

  return result
}

var upper30Users = users.filter(function(user) {
  return user.age > 30
})

//  reduce, some, every

/**
 * @description Array.prototype.reduce
 * 나이의 총합
 */
function sumAge() {
  var sum = 0

  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    sum += user.age
  }

  return sum
}

var summaryAge = users.reduce(function(acc, user) {
  return acc + user.age
}, 0)
