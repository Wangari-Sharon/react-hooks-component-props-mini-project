
import React from 'react';

function Article ({ minutes, title, date = "January 1, 1970", preview}){
  const coffee = '☕️';
  const bento = '🍱';
  var coffeeNum;
  var bentoNum;
  
  const emojiConcat = (variable, emoji, times) => {
    variable = emoji;
    for(let i = 1; i < times; i++) variable += emoji;
    return variable
  }

  coffeeNum = emojiConcat(coffeeNum, coffee, (minutes/5));
  bentoNum = emojiConcat(bentoNum, bento, (minutes/10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} <span>&#183;</span> {minutes <= 10 ? coffeeNum : bentoNum} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article; 


