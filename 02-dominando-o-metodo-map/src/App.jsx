import "./App.css";

const users = [
  {
    id: 0,
    name: "Carlos",
    address: "Rua X",
    age: 28,
    isAdmin: false,
  },
  {
    id: 1,
    name: "Maria",
    address: "Rua XX",
    age: 31,
    isAdmin: true,
  },
  {
    id: 2,
    name: "Matheus",
    address: "Rua XI",
    age: 22,
    isAdmin: false,
  },
];

function App() {
  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name}, {user.age}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
