import { apiKey, baseId } from "./config";

const tableName = 'Users';

document
    .getElementById('create-account-form')
    .addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const sessionkey = generateUUID();

        const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: {
                        username: username,
                        password: password,
                        email: email,
                        session_key: sessionkey,
                    },
                }),
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = './login.html';
            } else {
                console.error('Error');
            }
        } catch (error) {
            console.error('Fehler beim Erstellen des Kontos:', error);
        }
    });

function generateUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
}
