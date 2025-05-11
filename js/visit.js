class Visit {
    constructor(doctor,title,description,terms,full_name,status) {
        this.doctor = doctor;
        this.title = title;
        this.description = description;
        this.terms = terms;
        this.full_name = full_name;
        this.status = status;
    }
}
export class VisitCardiologist extends Visit {
    constructor(doctor,title,description,terms,full_name,status,heart_rate,body_weight_index,illnesses,age) {
        super(doctor,title,description,terms,full_name,status);
        this.heart_rate = heart_rate;
        this.body_weight_index = body_weight_index;
        this.illnesses = illnesses;
        this.age = age;
    }   
    add(){
        const token = localStorage.getItem("token");
        return fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: this.doctor,
                title: this.title,
                description: this.description,
                terms: this.terms,
                full_name: this.full_name,
                status: this.status,
                heart_rate: this.heart_rate,
                body_weight_index: this.body_weight_index,
                illnesses: this.illnesses,
                age: this.age,
            })
        })
    }
    edit(id) {
        const token = localStorage.getItem("token");
        return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: this.doctor,
                title: this.title,
                description: this.description,
                terms: this.terms,
                full_name: this.full_name,
                status: this.status,
                heart_rate: this.heart_rate,
                body_weight_index: this.body_weight_index,
                illnesses: this.illnesses,
                age: this.age
            })
        })
    }
}
export class VisitDentist extends Visit {
    constructor(doctor,title,description,terms,full_name,status,last_visit) {
        super(doctor,title,description,terms,full_name,status);
        this.last_visit = last_visit;
    }   
    add(){
        const token = localStorage.getItem("token");
        return fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: this.doctor,
                title: this.title,
                description: this.description,
                terms: this.terms,
                status: this.status,
                full_name: this.full_name,
                last_visit: this.last_visit,
            })
        })
    }
    edit(id){
        const token = localStorage.getItem("token");
        return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: this.doctor,
                title: this.title,
                description: this.description,
                terms: this.terms,
                full_name: this.full_name,
                status: this.status,
                last_visit: this.last_visit
            })
        })
    }
}
export class VisitTherapist extends Visit {
    constructor(doctor,title,description,terms,full_name,status,age) {
        super(doctor,title,description,terms,full_name,status);
        this.age = age;
    }
    add(){
        const token = localStorage.getItem("token");
        return fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: this.doctor,
                title: this.title,
                description: this.description,
                terms: this.terms,
                full_name: this.full_name,
                status:this.status,
                age:this.age,
            })
        })
    }
    edit(id){
        const token = localStorage.getItem("token");
        return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                doctor: this.doctor,
                title: this.title,
                description: this.description,
                terms: this.terms,
                full_name: this.full_name,
                status: this.status,
                age:this.age
            })
        })
    }
}