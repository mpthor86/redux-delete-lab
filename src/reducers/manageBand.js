import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {name: action.name, id: uuid()}
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return { bands: (state.bands.filter((b) => b.id !== action.id))}

    default:
      return state;
  }
};
