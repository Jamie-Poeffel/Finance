import { apiKey, baseId } from "./config";
const tableName = 'Users';

document
    .getElementById('login-form')
    .addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const url = `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula={username}='${username}'`;

        try {
            // Abruf von Benutzerdaten aus Airtable
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            const data = await response.json();

            if (data.records.length === 0) {
                document.getElementById('message').textContent =
                    'Benutzer nicht gefunden.';
                return;
            }

            const user = data.records[0];
            const storedPassword = user.fields.password;

            if (password === storedPassword) {
                localStorage.setItem(
                    'SESSION_TOKEN_FINANCEAPP',
                    data.records[0].fields.session_key
                );

                window.location.href = './index.html';
            } else {
                console.error('Error');
            }
        } catch (error) {
            console.error('Fehler:', error);
        }
    });
