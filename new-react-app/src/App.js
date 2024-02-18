import logo from "./logo.svg";
import "./App.css";

const textcenter = {
  textAlign: "center",
};

const singers = [
  {name:"Shakil", job:"singer"},
  {name:"Riaj", job:"singer2"},
  {name:"Atik", job:"singer3"},
  {name:"Mintu", job:"singer4"},
]

//simeler in loop different in data
function App() {
  const nayoks = ["Bapparaj", "Kuber", "Mithun"];
  return (
    <div className="App">
      {nayoks.map((nayok) => <li>Name={nayok}</li>
      
      
      )}
      {/* {nayoks.map((nayok) => <Person name={nayok}></Person>
      
      
      )} */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayeka="Moushumi"></Person> */}
      {/* <Person name="Firoj vaiya" nayeka="Simi"></Person>
      <Person nayeka="Porimoni"></Person> */}
      <h2 style={{ textAlign: "center" }}>My new friend</h2>
      <h2 style={textcenter}>rock mama React mama</h2>
      <Friend name="Sajib" phone="017"></Friend>
      <Friend name="Firoj Vai" phone="018"></Friend>
      <Friend name="Saidul Vai" phone="019"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      {/* <p>Nayeka : {props.nayeka}</p> */}
    </div>
  );
}

function Friend(props) {
  return (
    <div className="component">
      <h1>All Friends</h1>
      <p>{props.name}</p>
      <p>{props.phone}</p>
    </div>
  );
}

export default App;
