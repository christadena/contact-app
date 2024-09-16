import "./App.css";
import Card from "./Card";
import contacts from "./contacts";

function App() {
  return (
    <div>
      <h1>MY CONTACTS</h1>
      {contacts.map((c, i) => (
        <Card
          key={i}
          name={c.name}
          img= {c.imgURL}
          tel={c.phone}
          email={c.email}
        />
      ))}
      
    </div>
  )
  
}

export default App;
