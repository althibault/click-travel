export default {
    setDestinations({ destinations }, value) {
        destinations.splice(0, destinations.length);
        destinations.push(...value);
    },
   
  }
  