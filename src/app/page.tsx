'use client'
import { generateError } from '@/app/lib/actions'
import { Card, Paper, Typography } from '@mui/material';
import { use, useEffect, useState } from 'react';
export default function Home() {
  const [error, setError] = useState<any>(null);

  async function handleClick() {
    try {
      await generateError("Root Page Error")
    } catch (e) {
      setError(e);
    }
  }
  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])
  return (
    <>
      <Paper sx={{ width: '50%', alignSelf: "center" }}>
        <h1>Hello, Here are some error handling examples.</h1>
        <Typography>Click an example in the menu to see it work.</Typography>
      </Paper>
    </>
  );
}
