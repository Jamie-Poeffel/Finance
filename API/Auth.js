const apiKey =
    'patLWKKgBwq4fHn4M.47c838648d46a5cb0d3fc8a7e2423d59214d46a4030b16b0390874bd0311a875';
const baseId = 'appOu5rHbNZ9bIQFC';
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
