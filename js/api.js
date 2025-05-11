export class Api {
    async getAll() {
        const token = localStorage.getItem("token");
        try{
            const response = await fetch("https://ajax.test-danit.com/api/v2/cards",{
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.text(); 
            return data;
        }
        catch(err){
            console.log(err);
        }
    }
    async deleteVisit(id) {
        const token = localStorage.getItem("token");
        return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`
            },
        })
    }
    async getOne(id) {
        const token = localStorage.getItem("token");
        return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            },
        })
    }
}