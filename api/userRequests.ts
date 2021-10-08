export async function findAll() {

    return fetch('http://localhost:9001/api/users')
        .then(data => data.json())
        .catch(_ => new Error('not found'));
}
