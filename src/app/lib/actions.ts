'use server'
export async function generateError( message: string ) {
    throw new Error(`BOOM! ${message}`)
}