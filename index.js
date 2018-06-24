function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  const next_node = document.querySelectorAll('div#grand-node div')
  return next_node[next_node.length - 1]
}