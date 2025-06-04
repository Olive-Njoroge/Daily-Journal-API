import { useState } from 'react';
import { createJournalEntry } from './api.js';

function JournalForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const newEntry = await createJournalEntry({ title, content });
      console.log('Created:', newEntry);
      setTitle('');
      setContent('');
      setStatus('Journal entry created successfully!');
    } catch (err) {
      console.error(err);
      setStatus('Failed to create journal entry.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Title" 
        required 
      />
      <textarea 
        value={content} 
        onChange={e => setContent(e.target.value)} 
        placeholder="Content" 
        required 
      />
      <button type="submit">Add Journal</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default JournalForm;
