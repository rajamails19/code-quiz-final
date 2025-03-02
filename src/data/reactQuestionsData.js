export const reactQuestionsData = [
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
  },
  {
    id: 4,
    title: "Conditional Rendering",
    description: "Fill in the missing condition to show the loading indicator when isLoading is true and the data when it's available.",
    code: `function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(result => {
        setData(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Missing conditional rendering */}
    </div>
  );
}`,
    solution: "isLoading ? <p>Loading...</p> : <p>Data: {data}</p>",
    explanation: "We use the ternary operator to conditionally render different content based on the isLoading state. If isLoading is true, we show a loading message; otherwise, we display the data."
  },
  {
    id: 5,
    title: "useEffect Dependency Array",
    description: "Fill in the missing dependency array to make the effect run only when the userId changes.",
    code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData(userId).then(data => {
      setUser(data);
    });
  }, /* Missing dependency array */);

  return (
    <div>
      {user ? <h1>{user.name}</h1> : <p>Loading user...</p>}
    </div>
  );
}`,
    solution: "[userId]",
    explanation: "The dependency array [userId] tells React to only re-run the effect when the userId prop changes. This prevents unnecessary API calls when other props or state values change."
  },
  {
    id: 6,
    title: "List Rendering with Keys",
    description: "Fill in the missing key prop to help React identify items in the list efficiently.",
    code: `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li /* Missing key prop */>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
    solution: "key={todo.id}",
    explanation: "When rendering lists in React, each item needs a unique 'key' prop to help React identify which items have changed, been added, or removed. The key should be a unique identifier, often an ID from your data."
  },
  {
    id: 7,
    title: "useRef Hook",
    description: "Fill in the missing useRef hook to create a reference to the input element.",
    code: `function FocusInput() {
  const inputRef = /* Missing useRef initialization */;

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`,
    solution: "useRef(null)",
    explanation: "The useRef hook creates a mutable reference object with a .current property initialized to the provided argument (null). This ref object can then be attached to a React element via the ref attribute to gain direct access to the DOM node."
  },
  {
    id: 8,
    title: "useCallback Hook",
    description: "Fill in the missing useCallback hook to memoize the increment function.",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = /* Missing useCallback hook */ {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`,
    solution: "useCallback(() =>",
    explanation: "The useCallback hook returns a memoized callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders."
  },
  {
    id: 9,
    title: "useState with Functional Updates",
    description: "Fill in the missing functional update to safely increment the counter value based on the previous state.",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(/* Missing functional update */);
    setCount(/* Missing functional update */);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Add 2</button>
    </div>
  );
}`,
    solution: "prevCount => prevCount + 1",
    explanation: "When updating state based on the previous state value, you should use the functional form of setState. This ensures that you're working with the most current state value, especially when multiple state updates are batched together."
  },
  {
    id: 10,
    title: "useMemo Hook",
    description: "Fill in the missing useMemo hook to memoize the expensive calculation.",
    code: `function ProductList({ products, filterText }) {
  const filteredProducts = /* Missing useMemo hook */ {
    return products.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [products, filterText]);

  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}`,
    solution: "useMemo(() =>",
    explanation: "The useMemo hook memoizes the result of a calculation between re-renders. It recalculates the value only when one of the dependencies changes. This helps avoid expensive calculations on every render, improving performance."
  },
  {
    id: 11,
    title: "React Fragment",
    description: "Fill in the missing React Fragment syntax to avoid adding unnecessary divs to the DOM.",
    code: `function UserInfo({ user }) {
  return (
    /* Missing fragment syntax */
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    /* Missing fragment closing */
  );
}`,
    solution: "<>",
    explanation: "React Fragments let you group a list of children without adding extra nodes to the DOM. The shorthand syntax is to use empty angle brackets (<> and </>) which is equivalent to <React.Fragment> and </React.Fragment>."
  },
  {
    id: 12,
    title: "React Context Consumer",
    description: "Fill in the missing Context Consumer code to access the theme value.",
    code: `const ThemeContext = React.createContext('light');

function ThemedButton() {
  return (
    /* Missing context consumer */
      {theme => (
        <button className={theme}>
          Themed Button
        </button>
      )}
    /* Missing closing tag */
  );
}`,
    solution: "<ThemeContext.Consumer>",
    explanation: "ThemeContext.Consumer lets you subscribe to a context within a function component. The Consumer requires a function as a child which receives the current context value and returns a React node."
  },
  {
    id: 13,
    title: "React Context Provider",
    description: "Fill in the missing Context Provider code to provide the theme value to all children components.",
    code: `const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    /* Missing context provider */
      <div className={theme}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}`,
    solution: "<ThemeContext.Provider value={theme}>",
    explanation: "ThemeContext.Provider allows consuming components to subscribe to context changes. The Provider accepts a value prop to be passed to consuming components that are descendants of this Provider."
  },
  {
    id: 14,
    title: "useContext Hook",
    description: "Fill in the missing useContext hook to consume the theme context value.",
    code: `const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = /* Missing useContext hook */;
  
  return (
    <button className={theme}>
      Themed Button
    </button>
  );
}`,
    solution: "useContext(ThemeContext)",
    explanation: "The useContext hook accepts a context object (the value returned from React.createContext) and returns the current context value. It's a cleaner alternative to using Context.Consumer."
  },
  {
    id: 15,
    title: "React useReducer Hook",
    description: "Fill in the missing useReducer hook to initialize the state and dispatch function.",
    code: `function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = /* Missing useReducer hook */;
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`,
    solution: "useReducer(counterReducer, { count: 0 })",
    explanation: "The useReducer hook accepts a reducer function and an initial state. It returns an array with two elements: the current state and a dispatch function that lets you trigger state changes by dispatching actions to the reducer."
  },
  {
    id: 16,
    title: "Controlled Form Input",
    description: "Fill in the missing controlled input value and onChange handler.",
    code: `function LoginForm() {
  const [username, setUsername] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted username:', username);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        /* Missing value prop */
        /* Missing onChange handler */
      />
      <button type="submit">Log In</button>
    </form>
  );
}`,
    solution: "value={username} onChange={(e) => setUsername(e.target.value)}",
    explanation: "A controlled input in React has two key parts: a value prop set to a state variable, and an onChange handler that updates that state. This makes React the 'single source of truth' for the input's state."
  },
  {
    id: 17,
    title: "Custom Hook Creation",
    description: "Fill in the missing return statement for this custom hook that manages a toggle state.",
    code: `function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  
  const toggle = () => {
    setState(prevState => !prevState);
  };
  
  /* Missing return statement */
}`,
    solution: "return [state, toggle];",
    explanation: "Custom hooks in React typically return an array or object with the state value and functions to manipulate that state. Here, we return the toggle state and a function to toggle it, similar to how useState returns a value and setter function."
  },
  {
    id: 18,
    title: "React Portal",
    description: "Fill in the missing ReactDOM.createPortal code to render the modal outside the parent DOM hierarchy.",
    code: `function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return /* Missing ReactDOM.createPortal code */;
}`,
    solution: "ReactDOM.createPortal(<div className=\"modal\">{children}</div>, document.body)",
    explanation: "ReactDOM.createPortal lets you render children into a different part of the DOM. This is useful for components like modals, tooltips, or popovers that need to visually 'break out' of their parent container."
  },
  {
    id: 19,
    title: "Error Boundary",
    description: "Fill in the missing componentDidCatch method to make this component work as an error boundary.",
    code: `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  /* Missing componentDidCatch method */
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`,
    solution: "componentDidCatch(error, errorInfo) { console.log(error, errorInfo); }",
    explanation: "The componentDidCatch lifecycle method is used in error boundaries to catch JavaScript errors in their child component tree and display a fallback UI instead of crashing. It receives the error that was thrown and additional information about where the error occurred."
  },
  {
    id: 20,
    title: "useEffect Cleanup",
    description: "Fill in the missing cleanup function in the useEffect hook to prevent memory leaks.",
    code: `function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    /* Missing cleanup return */
  }, []);
  
  return <h1>{count}</h1>;
}`,
    solution: "return () => clearInterval(intervalId);",
    explanation: "When your effect creates resources that need to be cleaned up before the component leaves the screen (like subscriptions or timers), your effect should return a cleanup function. This prevents memory leaks by ensuring timers are cleared when the component unmounts."
  }
];