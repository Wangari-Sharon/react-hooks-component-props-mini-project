import React from 'react';

function About ({image='https://via.placeholder.com/215', about, name, texttwo}){
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
      <p>
        <strong style={{textDecorationLine: "underline", color: "pink"}}>
                    {name}
                </strong>
                <br/>
                <i>{texttwo}</i>
      </p>
    </aside>
  )
}

export default About;
