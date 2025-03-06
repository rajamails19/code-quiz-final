export const reactSet1 = [
    {
      category: "Set 1",
      questions: [
    {
      id: 1,
      title: "React State Initialization",
      description: "Fill in the missing state initialization to make the counter work.",
      code: `function Counter() {
    const [count, setCount] = /* Missing state initialization */;
   
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }`,
      solution: "useState(0)",
      explanation: "We initialize the count state to 0 using the useState hook. The useState function returns an array with the current state value and a function to update it."
    },
    {
      id: 2,
      title: "Form Input Event Handler",
      description: "Fill in the missing event handler code to update the name state.",
      code: `function NameForm() {
    const [name, setName] = useState('');
  
    return (
      <form>
        <input
          type="text"
          value={name}
          onChange={/* Missing onChange handler */}
        />
        <p>Hello, {name || 'stranger'}!</p>
      </form>
    );
  }`,
      solution: "(e) => setName(e.target.value)",
      explanation: "The onChange event handler receives an event object and we use e.target.value to get the current value of the input field. This value is then passed to the setName function to update the state."
    },
    {
      id: 3,
      title: "Object State Update",
      description: "Fill in the missing update handler to correctly update only the email property in the user state object.",
      code: `function UserForm() {
    const [user, setUser] = useState({
      name: 'John',
      email: 'john@example.com'
    });
  
    const handleEmailChange = (e) => {
      /* Missing state update code */
    };
  
    return (
      <div>
        <input
          type="text"
          value={user.email}
          onChange={handleEmailChange}
        />
        <p>{user.name}: {user.email}</p>
      </div>
    );
  }`,
      solution: "setUser({...user, email: e.target.value})",
      explanation: "When updating an object in state, we need to create a new object that includes all the previous properties using the spread operator (...user) and then override the specific property we want to update."
    }
]
}
]