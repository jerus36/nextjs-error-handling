'use client'
import { generateError } from '@/app/lib/actions'
import Button from '@mui/material/Button';
import axios from 'axios';
import { use, useEffect, useState } from 'react';
export default function Home() {
  const [error, setError] = useState<any>(null);
  
  async function handleClick(){
    try {
      const res = await axios.post('/api/boom', { message: "AXIOS CALL ERROR" })
    } catch(e) {
      setError(e);
    }
  }
  useEffect(() => {
    if(error){
      throw error
    }
  }, [error])
  return (
    <main>
      <h1>Sample Axios Error Bubble</h1>
      <Button variant="contained" onClick={handleClick}>Test Error Bubble</Button>
          </main>
  );
}
