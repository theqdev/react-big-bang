const startState = {
  todos: [{ id: 1, done: false, name: 'Buy Milk' }]
};

const finState = toggleDone(startState, 1);

expect(finState.todos).toEqual([
  { id: 1, done: true, name: 'Buy Milk' }
]);
