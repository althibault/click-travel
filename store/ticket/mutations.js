export default {
    setTickets({ tickets }, value) {
        tickets.splice(0, tickets.length);
        tickets.push(...value);
    },



    setTicket(state, value) {
        state.ticket = value;
      },


    
   
  }
  