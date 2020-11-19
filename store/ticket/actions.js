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
}
