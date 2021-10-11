import { User } from "types/User";

export async function findAll() {

    return fetch('http://localhost:9001/api/clients')
        .then(data => data.json())
        .catch(_ => new Error('not found'));
}

export async function findById(id: number) {

    return fetch(`http://localhost:9001/api/clients/client?id=${id}`)
        .then(data => data.json())
        .catch(_ => new Error('not found'));
}

export async function saveOne(u: User) {

    return fetch('http://localhost:9001/api/clients/client', {headers: {"Content-Type": "application/json"}, method: 'POST', body: JSON.stringify(u)})
        .catch(_ => new Error('not found'));
}
