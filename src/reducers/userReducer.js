export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUTS":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      break;
  }
}
