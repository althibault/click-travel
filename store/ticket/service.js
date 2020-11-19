import api from '../../service/api.js';


export default {
    getAllByCode(codeDestination) {
      return new Promise((resolve, reject) => {
        api.get('tickets',{
          params:        
          {
            filter:{
            offset: 0,
            limit: 100,      
            skip: 0,  
            where: {    
              "to": codeDestination
                    }  
            }
          }
          }
        )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => console.log(error))
      })
    },

    getTicket(number) {
      return new Promise((resolve, reject) => {
        api.get('tickets/'+ number,{
          params:        
          {
           
            offset: 0,
            limit: 100,      
            skip: 0,  
            
            
          }
          }
        )
          .then(response => {
            resolve(response.data)
          })
          .catch(error => console.log(error))
      })
    },
    
}