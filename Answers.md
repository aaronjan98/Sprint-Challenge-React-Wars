# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a Javascript library for building user interfaces by creating components that manage their own state and interact with the DOM in such a way to optimize the browser's rendering.

1. What does it mean to think in react?

Building a web application in React means thinking about what components should be created so that the site runs most efficiently. We also have to think about how React will handle our state.

1. Describe state.

State is used in components to keep track of information because state can change data according to user interactions with the UI.

1. Describe props.

Unlike state, props are immutable and don't change. Props are used to pass data from parent components to their child components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Any changes that are effected outside a function scope, besides the return value of the calculation itself, is a side effect. When pure functions, without side effects, execute, arguments are taken and values are returned. This is the only thing that happens in pure functions. One can sync effects in a React component to state or prop changes by using the .get method after retrieving the information from the API. Inside the .get, the second argument in the deconstructed array from useState should be passed the new data from the API; therefore syncing state and props with the current changes.