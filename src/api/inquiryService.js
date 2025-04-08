import webId from '../config/static.js';

export const saveInquiry = async (inquiry) => {
  const response = await fetch('/api/inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inquiry),
  });

  if (!response.ok) {
    throw new Error('Failed to save inquiry');
  }

  return await response.json();
}