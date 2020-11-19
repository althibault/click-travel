import service from './service'

export default {
  loadTickets(state,codeDestination) {
    service.getAllByCode(codeDestination)
      .then((data) => {
        console.log(data);
        state.commit('setTickets', data);        
      })
      .catch(() => {
        state.commit('setTickets', []);        
      });
  },

  loadTicket(state,number) {
    service.getTicket(number)
      .then((data) => {
        console.log(data);
        console.log(data);
        state.commit('setTicket', data);        
      })
      .catch(() => {
        state.commit('setTicket', []);        
      });
  },

}
