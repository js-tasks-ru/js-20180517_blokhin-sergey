'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
 function makeFriendsList (obj) {

    let ul = document.createElement("ul");

  for (key of obj) {
  let li = document.createElement("li");
  li.innerHTML = key["firstName"] + " " + key["lastName"];
  ul.appendChild(li);

     }
     return ul;
  }
