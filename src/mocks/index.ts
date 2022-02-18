export const IS_BROWSER = typeof window !== 'undefined'

export const setupMockServer = async () => {
  if (IS_BROWSER) {
    const { mswWorker } = await import('./mswWorker')
    const mswListening = mswWorker.start()
    console.log('Mock server listening on port', mswListening)
  } else {
    const { mswServer } = await import('./mswServer')
    const mswListening = mswServer.listen()
    console.log('Mock server listening on port', mswListening)
  }
}
