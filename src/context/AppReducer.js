export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(address => {
          return address.id !== action.payload;
        })
      }
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: action.payload, ...state.addresses
      }
    case 'UPDATE_ADDRESS':
      const updatedAddress = action.payload;
      const updateAddress = { ...state, address: updatedAddress } 
      // in this case we are overriding

      // const updateAddress = state.addresses.map(address => {
      //   if (address.id === updatedAddress.id) {
      //     return updatedAddress;
      //   }
      //   return address;
      // })
      return {
        ...state,
        addresses: updateAddress
      }

    default:
      return state;
  }
}