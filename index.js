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
<<<<<<< HEAD
  const next_node = document.querySelectorAll('div#grand-node div')
  return next_node[next_node.length - 1]
=======
  const next_node = document.getElementById('grand-node')
  while (next_node.querySelector('div')) {
    next_node = next_node.children
  } 
  return next_node
>>>>>>> 66cb09d5f20f6d276c7eaa0ebaa54c289b922805
}