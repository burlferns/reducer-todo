export function appReducer(state, action) {
  switch (action.type) {
    case "TGL_DONE":
      return state.map(elem => {
        if(elem.id===action.payload) {
          return {
            item: elem.item,
            completed: !elem.completed,
            id: elem.id
          }
        } else {
          return elem;
        }
      });
    case "ADD":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        }
      ];
    case "CLEAR":
      return state.filter(elem=>elem.completed===false);
    default:
      throw new Error("No action matched!");
  }
};


export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: -1
  },
  {
    item: 'Fill gas in car',
    completed: false,
    id: -2
  },
  {
    item: 'Buy grocieries',
    completed: false,
    id: -3
  }
]