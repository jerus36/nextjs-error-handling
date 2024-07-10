'use client' // Error components must be Client Components
 
import Button from '@mui/material/Button'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h1>This is the Root Error</h1>
      <h2>Something went wrong! {error.message}</h2>
      <h3></h3>
      <Button variant="contained"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}