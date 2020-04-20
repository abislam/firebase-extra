import React from 'react';
import './App.css';
import fire from './Fire';

function App() {

  const [people, setPeople] = React.useState([]);

  const db = fire.firestore();

  React.useEffect( ()=>{
    let newPeople=[];

    db.collection("people").get().then(function(snapshot){
      snapshot.forEach(function(doc){
        const object = doc.data();

        let people={
          name: object.name,
          age: object.age,
          coolness: object.coolness
        }

        newPeople.push(people)
      })

      setPeople(newPeople)
    })
  }, [db]);

  let peopleEles = people.map((ppl, idx) => 
    <div key={idx}>
      <h1>Name: {ppl.name}</h1>
      <h3>Age: {ppl.age}</h3>
      <h3>Cool: {ppl.coolness.toString()}</h3>
    </div>

  )

  return (
    <div className="App">
      {peopleEles}
    </div>
  );
}

export default App;
