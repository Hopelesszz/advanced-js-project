import { Auth } from "./auth.js";
import { Api } from "./api.js";
import { Modal } from "./modal.js";
import { VisitDentist,VisitCardiologist,VisitTherapist } from "./visit.js";
const auth = new Auth();
const api = new Api();
const modal = new Modal();
const auth_container = document.querySelector(".auth_container");
const create_container = document.querySelector(".create_container");
const visit_container = document.querySelector(".visit_container");
const open_modal = document.getElementById("show_modal");
open_modal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.show_modal(auth_container);
})
const close_auth = document.getElementById("close_auth");
close_auth.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.close_modal(auth_container);
})
const auth_form = document.getElementById("auth");
auth_form.addEventListener("submit", async (e)=>{
    if (!auth_form.checkValidity()) {
        return;
    }
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    auth.auth(email.value,password.value)
    .then(() => {
        modal.close_modal(auth_container);
        loadVisits(data);
    });
})
const create_visit = document.createElement("button");
create_visit.innerText = "Створити візит";
create_visit.className = "btn";
create_visit.id = "create_visit";
const token = localStorage.getItem("token");
const res = await api.getAll();
const data = JSON.parse(res);
if(token) {
    loadVisits(data);
}
create_visit.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.show_modal(create_container);
    const create_modal = document.querySelector(".create_modal");
    const create_btn = document.querySelector("#create_btn");
    create_modal.style.height = "200px";
    const doctor = document.getElementById("doctor");
    doctor.addEventListener("change",()=>{
        create_modal.style.height = "600px";
        const title_label = document.querySelector('label[for="title"]');
        const title = document.querySelector("#title");
        const description_label = document.querySelector('label[for="description"]');
        const description = document.querySelector("#description");
        const terms_label = document.querySelector('label[for="terms"]');
        const terms = document.querySelector("#terms");
        const full_name_label = document.querySelector('label[for="full_name"]');
        const full_name = document.querySelector("#full_name");
        const heart_rate_label = document.querySelector('label[for="heart_rate"]');
        const heart_rate = document.querySelector("#heart_rate");
        const body_weight_index_label = document.querySelector('label[for="body_weight_index"]');
        const body_weight_index = document.querySelector("#body_weight_index");
        const age_label = document.querySelector('label[for="age"]');
        const age = document.querySelector("#age");
        const illnesses_label = document.querySelector('label[for="illnesses"]');
        const illnesses = document.querySelector("#illnesses");
        const last_visit_label = document.querySelector('label[for="last_visit"]');
        const last_visit = document.querySelector("#last_visit");
        const status_label = document.querySelector('label[for="status"]');
        const status = document.querySelector("#status");
        title_label.style.display = "block";
        title.style.display = "block";
        description_label.style.display = "block";
        description.style.display = "block";
        terms_label.style.display = "block";
        terms.style.display = "block";
        full_name_label.style.display = "block";
        full_name.style.display = "block";
        status_label.style.display = "block";
        status.style.display = "block";
        switch(doctor.value) {
            case "Кардіолог":
                create_modal.style.height = "900px";
                heart_rate_label.style.display = "block";
                heart_rate.style.display = "block";
                body_weight_index_label.style.display = "block";
                body_weight_index.style.display = "block";
                age_label.style.display = "block";
                age.style.display = "block";
                illnesses_label.style.display = "block";
                illnesses.style.display = "block";
                last_visit_label.style.display = "none";
                last_visit.style.display = "none";
                create_btn.style.display = "block";
                break;
            case "Стоматолог":
                create_modal.style.height = "700px";
                heart_rate_label.style.display = "none";
                heart_rate.style.display = "none";
                body_weight_index_label.style.display = "none";
                body_weight_index.style.display = "none";
                age_label.style.display = "none";
                age.style.display = "none";
                illnesses_label.style.display = "none";
                illnesses.style.display = "none";
                last_visit_label.style.display = "block";
                last_visit.style.display = "block";
                create_btn.style.display = "block";
                break;
            case "Терапевт":
                create_modal.style.height = "700px";
                heart_rate_label.style.display = "none";
                heart_rate.style.display = "none";
                body_weight_index_label.style.display = "none";
                body_weight_index.style.display = "none";
                last_visit_label.style.display = "none";
                last_visit.style.display = "none";
                age_label.style.display = "block";
                age.style.display = "block";
                illnesses_label.style.display = "none";
                illnesses.style.display = "none";
                create_btn.style.display = "block";
                break;
            default:
                create_modal.style.height = "200px";
                title_label.style.display = "none";
                title.style.display = "none";
                description_label.style.display = "none";
                description.style.display = "none";
                terms_label.style.display = "none";
                terms.style.display = "none";
                full_name_label.style.display = "none";
                full_name.style.display = "none";
                heart_rate_label.style.display = "none";
                heart_rate.style.display = "none";
                body_weight_index_label.style.display = "none";
                body_weight_index.style.display = "none";
                age_label.style.display = "none";
                age.style.display = "none";
                illnesses_label.style.display = "none";
                illnesses.style.display = "none";
                last_visit_label.style.display = "none";
                last_visit.style.display = "none";
                status_label.style.display = "none";
                status.style.display = "none";
                create_btn.style.display = "none";
                break;                  
            }
        })
})
const close_create = document.getElementById("close_create");
close_create.addEventListener("click",(e)=>{
    close_create_window(e);
})
const create_form = document.getElementById("create");
create_form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const doctor = document.getElementById("doctor");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const terms = document.querySelector("#terms");
    const full_name = document.querySelector("#full_name");
    const heart_rate = document.querySelector("#heart_rate");
    const body_weight_index = document.querySelector("#body_weight_index");
    const age = document.querySelector("#age");
    const illnesses = document.querySelector("#illnesses");
    const last_visit = document.querySelector("#last_visit");
    const status = document.querySelector("#status");
    switch(doctor.value) {
        case "Кардіолог":
            const cardiologist = new VisitCardiologist(doctor.value,title.value,description.value,terms.value,full_name.value,status.value,heart_rate.value,body_weight_index.value,illnesses.value,age.value);
            await cardiologist.add()            
            .then(async (res)=>{
                const res_data = await res.json();
                data.push(res_data);
                close_create_window(e);
                while (visit_container.firstChild) {
                    visit_container.firstChild.remove();
                }
                loadVisits(data);
            })
            break;
        case "Стоматолог":
            const dentist = new VisitDentist(doctor.value,title.value,description.value,terms.value,full_name.value,status.value,last_visit.value);
            await dentist.add()
            .then(async (res)=>{
                const res_data = await res.json();
                data.push(res_data);
                close_create_window(e);
                while (visit_container.firstChild) {
                    visit_container.firstChild.remove();
                }
                loadVisits(data);
            })
            break;
        case "Терапевт":
            const therapist = new VisitTherapist(doctor.value,title.value,description.value,terms.value,full_name.value,status.value,age.value);
            await therapist.add()
            .then(async (res)=>{
                const res_data = await res.json();
                data.push(res_data);
                close_create_window(e);
                while (visit_container.firstChild) {
                    visit_container.firstChild.remove();
                }
                loadVisits(data);
            })
            break;
        default:
            break;
    }
})
const visit = document.querySelector(".visit_container");
const main = document.querySelector("main");
visit.addEventListener("click",async (e)=>{
    if(e.target.tagName.toLowerCase() === "i"){
        api.deleteVisit(e.target.dataset.id)
        .then(()=>{
            for(let i = 0; i < data.length; i++){
                if(data[i].id == e.target.dataset.id) {
                    data.splice(i,1);
                }
            }
            while (visit_container.firstChild) {
                visit_container.firstChild.remove();
            }     
            loadVisits(data);
        })
    }
    if(e.target.tagName.toLowerCase() === "button") {
        if(e.target.id === "get_btn") {
            await api.getOne(e.target.dataset.id)
            .then(async (res)=>{
                const data = await res.json();
                const one_visit = document.createElement("div");
                one_visit.className = "one_visit";
    
                const full_visit = document.createElement("div");
                full_visit.className = "full_visit";
    
                const logo = document.createElement("i");
                logo.className = "fa-solid fa-xmark";
                logo.id = "close_one_visit";
    
                main.append(one_visit);
                one_visit.append(full_visit);
                full_visit.append(logo);

                if(data.doctor === "Кардіолог") {
                    const h2  = document.createElement("h2");
                    h2.innerText = data.full_name;

                    const p1 = document.createElement("p");
                    p1.innerText = `Лікар: ${data.doctor}`;

                    const p2 = document.createElement("p");
                    p2.innerText = `Короткий опис: ${data.description}`;

                    const p3 = document.createElement("p");
                    p3.innerText = `Терміновість: ${data.terms}`;

                    const p4 = document.createElement("p");
                    p4.innerText = `Мета візиту: ${data.title}`;

                    const p5 = document.createElement("p");
                    p5.innerText = `Звичайний тиск: ${data.heart_rate}`;

                    const p6 = document.createElement("p");
                    p6.innerText = `Індекс маси тіла: ${data.body_weight_index}`;

                    const p7 = document.createElement("p");
                    p7.innerText = `Перенесені захворювання серцево-судинної системи: ${data.illnesses}`;

                    const p8 = document.createElement("p");
                    p8.innerText = `Вік: ${data.age}`;

                    const p9 = document.createElement("p");
                    p9.innerText = `Статус: ${data.status}`;

                    full_visit.append(h2);
                    full_visit.append(p1);
                    full_visit.append(p2);
                    full_visit.append(p3);
                    full_visit.append(p4);
                    full_visit.append(p5);
                    full_visit.append(p6);
                    full_visit.append(p7);
                    full_visit.append(p8);
                    full_visit.append(p9);
                }
                if(data.doctor === "Терапевт") {
                    full_visit.style.height = "200px";
                    const h2  = document.createElement("h2");
                    h2.innerText = data.full_name;

                    const p1 = document.createElement("p");
                    p1.innerText = `Лікар: ${data.doctor}`;

                    const p2 = document.createElement("p");
                    p2.innerText = `Короткий опис: ${data.description}`;

                    const p3 = document.createElement("p");
                    p3.innerText = `Терміновість: ${data.terms}`;

                    const p4 = document.createElement("p");
                    p4.innerText = `Мета візиту: ${data.title}`;

                    const p5 = document.createElement("p");
                    p5.innerText = `Вік: ${data.age}`;

                    const p9 = document.createElement("p");
                    p9.innerText = `Статус: ${data.status}`;

                    full_visit.append(h2);
                    full_visit.append(p1);
                    full_visit.append(p2);
                    full_visit.append(p3);
                    full_visit.append(p4);
                    full_visit.append(p5);
                    full_visit.append(p9);
                }
                if(data.doctor === "Стоматолог") {
                    full_visit.style.height = "200px";
                    const h2  = document.createElement("h2");
                    h2.innerText = data.full_name;

                    const p1 = document.createElement("p");
                    p1.innerText = `Лікар: ${data.doctor}`;

                    const p2 = document.createElement("p");
                    p2.innerText = `Короткий опис: ${data.description}`;

                    const p3 = document.createElement("p");
                    p3.innerText = `Терміновість: ${data.terms}`;

                    const p4 = document.createElement("p");
                    p4.innerText = `Мета візиту: ${data.title}`;

                    const p5 = document.createElement("p");
                    p5.innerText = `Дата останього візиту: ${data.last_visit}`;

                    const p9 = document.createElement("p");
                    p9.innerText = `Статус: ${data.status}`;

                    full_visit.append(h2);
                    full_visit.append(p1);
                    full_visit.append(p2);
                    full_visit.append(p3);
                    full_visit.append(p4);
                    full_visit.append(p5);
                    full_visit.append(p9);
                }
                logo.addEventListener("click",()=>{
                    one_visit.remove();
                })
            })
        }
        if(e.target.id === "edit_btn") {
            await api.getOne(e.target.dataset.id)
            .then(async (res)=>{
                const data = await res.json();
                const edit_container = document.querySelector(".edit_container");
                const edit_btn = document.getElementById("edit_btn");
                modal.show_modal(edit_container);
                const edit = document.getElementById("edit");
                edit.style.height = "200px";
                edit.dataset.id = data.id;
                const doctor = document.getElementById("edit_doctor");
                doctor.addEventListener("change",()=>{
                    edit.style.height = "600px";
                    const edit_title_label = document.querySelector('label[for="edit_title"]');
                    const edit_title = document.querySelector("#edit_title");
                    const edit_description_label = document.querySelector('label[for="edit_description"]');
                    const edit_description = document.querySelector("#edit_description");
                    const edit_terms_label = document.querySelector('label[for="edit_terms"]');
                    const edit_terms = document.querySelector("#edit_terms");
                    const edit_full_name_label = document.querySelector('label[for="edit_full_name"]');
                    const edit_full_name = document.querySelector("#edit_full_name");
                    const edit_heart_rate_label = document.querySelector('label[for="edit_heart_rate"]');
                    const edit_heart_rate = document.querySelector("#edit_heart_rate");
                    const edit_body_weight_index_label = document.querySelector('label[for="edit_body_weight_index"]');
                    const edit_body_weight_index = document.querySelector("#edit_body_weight_index");
                    const edit_age_label = document.querySelector('label[for="edit_age"]');
                    const edit_age = document.querySelector("#edit_age");
                    const edit_illnesses_label = document.querySelector('label[for="edit_illnesses"]');
                    const edit_illnesses = document.querySelector("#edit_illnesses");
                    const edit_last_visit_label = document.querySelector('label[for="edit_last_visit"]');
                    const edit_last_visit = document.querySelector("#edit_last_visit");
                    const edit_status_label = document.querySelector('label[for="edit_status"]');
                    const edit_status = document.querySelector("#edit_status");
                    edit_title_label.style.display = "block";
                    edit_title.style.display = "block";
                    edit_title.value = data.title;
                    edit_description_label.style.display = "block";
                    edit_description.style.display = "block";
                    edit_description.value = data.description;
                    edit_terms_label.style.display = "block";
                    edit_terms.style.display = "block";
                    edit_terms.value = data.terms;
                    edit_full_name_label.style.display = "block";
                    edit_full_name.style.display = "block";
                    edit_full_name.value = data.full_name;
                    edit_status_label.style.display = "block";
                    edit_status.style.display = "block";
                    edit_status.value = data.status;
                    switch(doctor.value) {
                        case "Кардіолог":
                            edit.style.height = "900px";
                            edit_heart_rate_label.style.display = "block";
                            edit_heart_rate.style.display = "block";
                            edit_heart_rate.value = data.heart_rate;
                            edit_body_weight_index_label.style.display = "block";
                            edit_body_weight_index.style.display = "block";
                            edit_body_weight_index.value = data.body_weight_index;
                            edit_age_label.style.display = "block";
                            edit_age.style.display = "block";
                            edit_age.value = data.age;
                            edit_illnesses_label.style.display = "block";
                            edit_illnesses.style.display = "block";
                            edit_illnesses.value = data.illnesses;
                            edit_btn.style.display = "block";
                            break;
                        case "Стоматолог":
                            edit.style.height = "700px";
                            edit_heart_rate_label.style.display = "none";
                            edit_heart_rate.style.display = "none";
                            edit_body_weight_index_label.style.display = "none";
                            edit_body_weight_index.style.display = "none";
                            edit_age_label.style.display = "none";
                            edit_age.style.display = "none";
                            edit_illnesses_label.style.display = "none";
                            edit_illnesses.style.display = "none";
                            edit_last_visit_label.style.display = "block";
                            edit_last_visit.style.display = "block";
                            edit_last_visit.value = data.last_visit;
                            edit_btn.style.display = "block";
                            break;
                        case "Терапевт":
                            edit.style.height = "700px";
                            edit_heart_rate_label.style.display = "none";
                            edit_heart_rate.style.display = "none";
                            edit_body_weight_index_label.style.display = "none";
                            edit_body_weight_index.style.display = "none";
                            edit_age_label.style.display = "none";
                            edit_age.style.display = "none";
                            edit_illnesses_label.style.display = "none";
                            edit_illnesses.style.display = "none";
                            edit_last_visit_label.style.display = "none";
                            edit_last_visit.style.display = "none";
                            edit_age_label.style.display = "block";
                            edit_age.style.display = "block";
                            edit_age.value = data.age;
                            edit_btn.style.display = "block";
                            break;
                        default:
                            edit.style.height = "200px";
                            edit_title_label.style.display = "none";
                            edit_title.style.display = "none";
                            edit_description_label.style.display = "none";
                            edit_description.style.display = "none";
                            edit_terms_label.style.display = "none";
                            edit_terms.style.display = "none";
                            edit_full_name_label.style.display = "none";
                            edit_full_name.style.display = "none";
                            edit_heart_rate_label.style.display = "none";
                            edit_heart_rate.style.display = "none";
                            edit_body_weight_index_label.style.display = "none";
                            edit_body_weight_index.style.display = "none";
                            edit_age_label.style.display = "none";
                            edit_age.style.display = "none";
                            edit_illnesses_label.style.display = "none";
                            edit_illnesses.style.display = "none";
                            edit_last_visit_label.style.display = "none";
                            edit_last_visit.style.display = "none";
                            edit_btn.style.style.display = "none";                    
                            break;                  
                        }
                })
                
                doctor.value = data.doctor;
                doctor.dispatchEvent(new Event("change"));
                const close_edit = document.getElementById("close_edit");
                close_edit.addEventListener("click",(e)=>{
                    close_edit_window(e);
                })
            })
        }
    }
})
const edit_container = document.querySelector(".edit_container");
const edit = document.getElementById("edit");
edit.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const doctor = document.getElementById("edit_doctor");
    const title = document.getElementById("edit_title");
    const description = document.getElementById("edit_description");
    const terms = document.getElementById("edit_terms");
    const full_name = document.getElementById("edit_full_name");
    const heart_rate = document.getElementById("edit_heart_rate");
    const body_weight_index = document.getElementById("edit_body_weight_index");
    const age = document.getElementById("edit_age");
    const illnesses = document.getElementById("edit_illnesses");
    const last_visit = document.getElementById("edit_last_visit");
    const status = document.getElementById("edit_status");
    switch(doctor.value) {
        case "Кардіолог":
            const cardiologist = new VisitCardiologist(doctor.value,title.value,description.value,terms.value,full_name.value,status.value,heart_rate.value,body_weight_index.value,illnesses.value,age.value);
            await cardiologist.edit(edit.dataset.id)
            .then(async (res)=>{
                const res_data = await res.json();
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === res_data.id) {
                        data[i] = res_data;
                        break;
                    }
                }
                close_edit_window(e);
                while (visit_container.firstChild) {
                    visit_container.firstChild.remove();
                }
                loadVisits(data);
            })          
            break;
        case "Стоматолог":
            const dentist = new VisitDentist(doctor.value,title.value,description.value,terms.value,full_name.value,status.value,last_visit.value);
            await dentist.edit(edit.dataset.id)
            .then(async (res)=>{
                const res_data = await res.json();
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === res_data.id) {
                        data[i] = res_data;
                        break;
                    }
                }
                close_edit_window(e);
                while (visit_container.firstChild) {
                    visit_container.firstChild.remove();
                }
                loadVisits(data);
            })          
            break;
        case "Терапевт":
            const therapist = new VisitTherapist(doctor.value,title.value,description.value,terms.value,full_name.value,status.value,age.value);
            await therapist.edit(edit.dataset.id)
            .then(async (res)=>{
                const res_data = await res.json();
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === res_data.id) {
                        data[i] = res_data;
                        break;
                    }
                }
                close_edit_window(e);
                while (visit_container.firstChild) {
                    visit_container.firstChild.remove();
                }
                loadVisits(data);
            })          
            break;
        default:
            break;
    }
})
const filter = document.getElementById("filter");
filter.addEventListener("submit",(e)=>{
    e.preventDefault();
    const status_filter = document.getElementById("status_filter");
    const priority_filter = document.getElementById("priority_filter");
    const title_filter = document.getElementById("title_filter");
    let tmp_data = data;
    if(status_filter.value === "Не пройдено"){
        tmp_data = tmp_data.filter((el)=>{
            if(el.status === "Не пройдено"){
                return el;
            }
        })
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }
    if(status_filter.value === "Пройдено"){
        tmp_data = tmp_data.filter((el)=>{
            if(el.status === "Пройдено"){
                return el;
            }
        })
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }
    if(status_filter.value === ""){
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }
    if(priority_filter.value === "Висока терміновість"){
        tmp_data = tmp_data.filter((el)=>{
            if(el.terms === "Висока терміновість"){
                return el;
            }
        })
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }  
    if(priority_filter.value === "Середня терміновість"){
        tmp_data = tmp_data.filter((el)=>{
            if(el.terms === "Середня терміновість"){
                return el;
            }
        })
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }
    if(priority_filter.value === "Низька терміновість"){
        tmp_data = tmp_data.filter((el)=>{
            if(el.terms === "Низька терміновість"){
                return el;
            }
        })
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }
    if(priority_filter.value === ""){
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }     
    if(title_filter.value === "")  {
        while (visit_container.firstChild) {
            visit_container.firstChild.remove();
        }
    }
    if(title_filter.value !== ""){
        const str = String(title_filter.value);
        tmp_data = tmp_data.filter((el)=>{
            if(el.title.toLowerCase().includes(str.toLowerCase())){
                return el;
            }
        })
    }   
    loadVisits(tmp_data);
})
async function loadVisits(data) {
    const token = localStorage.getItem("token");
    if(token) {
        const show_modal = document.getElementById("show_modal");
        if(show_modal){
            show_modal.remove();
        }
        const header = document.querySelector(".header");
        header.append(create_visit);
        if(data.length > 0){
            const visit_container = document.querySelector(".visit_container");
            const no_visits = document.getElementById("no_visits");
            if(no_visits){
                no_visits.remove();
            }
            for(let i = 0; i < data.length; i++) {
                const visit = document.createElement("div");
                visit.className = "visit";
                if(data[i].doctor === "Кардіолог") {
                    const logo = document.createElement("i");
                    logo.className = "fa-solid fa-xmark";
                    logo.id = "delete_visit";
                    logo.dataset.id = data[i].id;

                    const h2  = document.createElement("h2");
                    h2.innerText = data[i].full_name;

                    const p1 = document.createElement("p");
                    p1.innerText = `Лікар: ${data[i].doctor}`;

                    const p2 = document.createElement("p");
                    p2.innerText = `Короткий опис: ${data[i].description}`;

                    const p3 = document.createElement("p");
                    p3.innerText = `Терміновість: ${data[i].terms}`;

                    const p4 = document.createElement("p");
                    p4.innerText = `Мета візиту: ${data[i].title}`;

                    const button_div = document.createElement("div");
                    button_div.id = "button_div";
                    button_div.style.display = "flex";
                    button_div.style.gap = "15px";

                    const button_edit = document.createElement("button");
                    button_edit.innerText = "Редагувати";
                    button_edit.className = "btn";
                    button_edit.id = "edit_btn";
                    button_edit.style.marginBottom = "5px";
                    button_edit.style.width = "130px";
                    button_edit.dataset.id = data[i].id;

                    const button_get = document.createElement("button");
                    button_get.innerText = "Показати більше";
                    button_get.className = "btn";
                    button_get.id = "get_btn";
                    button_get.style.marginBottom = "5px";
                    button_get.style.width = "170px";
                    button_get.dataset.id = data[i].id;

                    button_div.append(button_edit);
                    button_div.append(button_get);

                    visit.append(logo);
                    visit.append(h2);
                    visit.append(p1);
                    visit.append(p4);
                    visit.append(p2);
                    visit.append(p3);
                    visit.append(button_div);
                }
                if(data[i].doctor === "Стоматолог"){
                    const logo = document.createElement("i");
                    logo.className = "fa-solid fa-xmark";
                    logo.id = "delete_visit";
                    logo.dataset.id = data[i].id;

                    const h2  = document.createElement("h2");
                    h2.innerText = data[i].full_name;

                    const p1 = document.createElement("p");
                    p1.innerText = `Лікар: ${data[i].doctor}`;

                    const p2 = document.createElement("p");
                    p2.innerText = `Короткий опис: ${data[i].description}`;

                    const p3 = document.createElement("p");
                    p3.innerText = `Терміновість: ${data[i].terms}`;

                    const p4 = document.createElement("p");
                    p4.innerText = `Мета візиту: ${data[i].title}`;

                    const button_div = document.createElement("div");
                    button_div.id = "button_div";
                    button_div.style.display = "flex";
                    button_div.style.gap = "15px";

                    const button_edit = document.createElement("button");
                    button_edit.innerText = "Редагувати";
                    button_edit.className = "btn";
                    button_edit.id = "edit_btn";
                    button_edit.style.marginBottom = "5px";
                    button_edit.style.width = "130px";
                    button_edit.dataset.id = data[i].id;

                    const button_get = document.createElement("button");
                    button_get.innerText = "Показати більше";
                    button_get.className = "btn";
                    button_get.id = "get_btn";
                    button_get.style.marginBottom = "5px";
                    button_get.style.width = "170px";
                    button_get.dataset.id = data[i].id;

                    button_div.append(button_edit);
                    button_div.append(button_get);

                    visit.append(logo);
                    visit.append(h2);
                    visit.append(p1);
                    visit.append(p4);
                    visit.append(p2);
                    visit.append(p3);
                    visit.append(button_div);
                }
                if(data[i].doctor === "Терапевт"){
                    const logo = document.createElement("i");
                    logo.className = "fa-solid fa-xmark";
                    logo.id = "delete_visit";
                    logo.dataset.id = data[i].id;

                    const h2  = document.createElement("h2");
                    h2.innerText = data[i].full_name;

                    const p1 = document.createElement("p");
                    p1.innerText = `Лікар: ${data[i].doctor}`;

                    const p2 = document.createElement("p");
                    p2.innerText = `Короткий опис: ${data[i].description}`;

                    const p3 = document.createElement("p");
                    p3.innerText = `Терміновість: ${data[i].terms}`;

                    const p4 = document.createElement("p");
                    p4.innerText = `Мета візиту: ${data[i].title}`;

                    const button_div = document.createElement("div");
                    button_div.id = "button_div";
                    button_div.style.display = "flex";
                    button_div.style.gap = "15px";

                    const button_edit = document.createElement("button");
                    button_edit.innerText = "Редагувати";
                    button_edit.className = "btn";
                    button_edit.id = "edit_btn";
                    button_edit.style.marginBottom = "5px";
                    button_edit.style.width = "130px";
                    button_edit.dataset.id = data[i].id;

                    const button_get = document.createElement("button");
                    button_get.innerText = "Показати більше";
                    button_get.className = "btn";
                    button_get.id = "get_btn";
                    button_get.style.marginBottom = "5px";
                    button_get.style.width = "170px";
                    button_get.dataset.id = data[i].id;

                    button_div.append(button_edit);
                    button_div.append(button_get);

                    visit.append(logo);
                    visit.append(h2);
                    visit.append(p1);
                    visit.append(p4);
                    visit.append(p2);
                    visit.append(p3);
                    visit.append(button_div);
                }
                visit_container.append(visit);
            }
        }
    }
}
function close_create_window (e){
    const doctor = document.getElementById("doctor");
    doctor.value = "";
    e.preventDefault();
    modal.close_modal(create_container);
    const title_label = document.querySelector('label[for="title"]');
    const title = document.querySelector("#title");
    const description_label = document.querySelector('label[for="description"]');
    const description = document.querySelector("#description");
    const terms_label = document.querySelector('label[for="terms"]');
    const terms = document.querySelector("#terms");
    const full_name_label = document.querySelector('label[for="full_name"]');
    const full_name = document.querySelector("#full_name");
    const heart_rate_label = document.querySelector('label[for="heart_rate"]');
    const heart_rate = document.querySelector("#heart_rate");
    const body_weight_index_label = document.querySelector('label[for="body_weight_index"]');
    const body_weight_index = document.querySelector("#body_weight_index");
    const age_label = document.querySelector('label[for="age"]');
    const age = document.querySelector("#age");
    const illnesses_label = document.querySelector('label[for="illnesses"]');
    const illnesses = document.querySelector("#illnesses");
    const last_visit_label = document.querySelector('label[for="last_visit"]');
    const last_visit = document.querySelector("#last_visit");
    const status_label = document.querySelector('label[for="status"]');
    const status = document.querySelector("#status");
    title_label.style.display = "none";
    title.style.display = "none";
    description_label.style.display = "none";
    description.style.display = "none";
    terms_label.style.display = "none";
    terms.style.display = "none";
    full_name_label.style.display = "none";
    full_name.style.display = "none";
    heart_rate_label.style.display = "none";
    heart_rate.style.display = "none";
    body_weight_index_label.style.display = "none";
    body_weight_index.style.display = "none";
    age_label.style.display = "none";
    age.style.display = "none";
    illnesses_label.style.display = "none";
    illnesses.style.display = "none";
    last_visit_label.style.display = "none";
    last_visit.style.display = "none";
    status_label.style.display = "none";
    status.style.display = "none";
    create_btn.style.display = "none";
}
function close_edit_window (e){
    const edit_container = document.querySelector(".edit_container");
    const edit_doctor = document.getElementById("edit_doctor");
    edit_doctor.value = "";
    e.preventDefault();
    modal.close_modal(edit_container);
    const edit_title_label = document.querySelector('label[for="edit_title"]');
    const edit_title = document.querySelector("#edit_title");
    const edit_description_label = document.querySelector('label[for="edit_description"]');
    const edit_description = document.querySelector("#edit_description");
    const edit_terms_label = document.querySelector('label[for="edit_terms"]');
    const edit_terms = document.querySelector("#edit_terms");
    const edit_full_name_label = document.querySelector('label[for="edit_full_name"]');
    const edit_full_name = document.querySelector("#edit_full_name");
    const edit_heart_rate_label = document.querySelector('label[for="edit_heart_rate"]');
    const edit_heart_rate = document.querySelector("#edit_heart_rate");
    const edit_body_weight_index_label = document.querySelector('label[for="edit_body_weight_index"]');
    const edit_body_weight_index = document.querySelector("#edit_body_weight_index");
    const edit_age_label = document.querySelector('label[for="edit_age"]');
    const edit_age = document.querySelector("#edit_age");
    const edit_illnesses_label = document.querySelector('label[for="edit_illnesses"]');
    const edit_illnesses = document.querySelector("#edit_illnesses");
    const edit_last_visit_label = document.querySelector('label[for="edit_last_visit"]');
    const edit_last_visit = document.querySelector("#edit_last_visit");
    const edit_status_label = document.querySelector('label[for="edit_status"]');
    const edit_status = document.querySelector("#edit_status");
    edit_title_label.style.display = "none";
    edit_title.style.display = "none";
    edit_description_label.style.display = "none";
    edit_description.style.display = "none";
    edit_terms_label.style.display = "none";
    edit_terms.style.display = "none";
    edit_full_name_label.style.display = "none";
    edit_full_name.style.display = "none";
    edit_heart_rate_label.style.display = "none";
    edit_heart_rate.style.display = "none";
    edit_body_weight_index_label.style.display = "none";
    edit_body_weight_index.style.display = "none";
    edit_age_label.style.display = "none";
    edit_age.style.display = "none";
    edit_illnesses_label.style.display = "none";
    edit_illnesses.style.display = "none";
    edit_last_visit_label.style.display = "none";
    edit_last_visit.style.display = "none";
    edit_status_label.style.display = "none";
    edit_status.style.display = "none";
}