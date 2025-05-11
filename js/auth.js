import { Modal } from "./modal.js";
const modal = new Modal();
export class Auth {
    async auth(email,password) {
        return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => response.text())
        .then(token => {
            if (token) {
                localStorage.setItem("token", token);
                return token;
            } else {
                throw new Error("Wrong token");
            }
        })
        .catch(err => {
            console.log("Auth error:", err);
            throw err;
        });
    }
}