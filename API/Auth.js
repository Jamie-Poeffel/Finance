import { apiKey, baseId } from "./config";
const tableName = 'Users';

document.addEventListener('DOMContentLoaded', async () => {
    const id = localStorage.getItem('SESSION_TOKEN_FINANCEAPP');

    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula={session_key}='${id}'`;
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        const data = await response.json();

        if (data.records.length === 0) {
            console.error('NotFond');

            window.location.href = './login.html';
            return;
        }
    } catch (error) {
        console.error('Fehler:', error);
    }
});
