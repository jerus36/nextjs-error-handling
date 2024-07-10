'use client'
import { generateError } from '@/app/lib/actions'
import Button from '@mui/material/Button';
import { use, useEffect, useState } from 'react';
export default function Home() {
  const [error, setError] = useState<any>(null);
  
  async function handleClick(){
    try {
      await generateError("Root Page Error")
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
      <h1>Sample Server Actions Error Bubble</h1>
      <Button variant="contained" onClick={handleClick}>Test Error Bubble</Button>
    </main>
  );
}
