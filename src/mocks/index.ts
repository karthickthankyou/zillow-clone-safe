export const IS_BROWSER = typeof window !== 'undefined'

export const setupMockServer = async () => {
  if (IS_BROWSER) {
    const { mswWorker } = await import('./mswWorker')
    mswWorker.start()
    window.msw = {
      worker: mswWorker,
    }
  } else {
    const { mswServer } = await import('./mswServer')
    mswServer.listen()
    window.msw = {
      worker: mswServer,
    }
  }
}
