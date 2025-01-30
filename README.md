# Next.js 15 Unhandled Error During Component Mount

This repository demonstrates a bug in Next.js 15 where an error thrown during component mount in a page component isn't handled by an error boundary, resulting in a blank page or unexpected behavior.  The issue stems from the timing of error handling relative to component mounting.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.  You'll see an error in your browser's console and a blank page.

## Solution

The solution involves restructuring the application to ensure errors during component mounting are properly handled. This might involve using a more robust error-handling mechanism or adjusting the application's structure to prevent such errors during mount.