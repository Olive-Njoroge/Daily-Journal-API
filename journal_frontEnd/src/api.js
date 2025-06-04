// journalApi.js

export async function createJournalEntry(entry) {
    const response = await fetch('http://localhost:3000/journals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create journal entry');
    }
  
    return await response.json();
  }
  