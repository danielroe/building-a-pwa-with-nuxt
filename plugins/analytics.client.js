export default () => {
  window.onNuxtReady(async () => {
    const code = await import('~/data/large.json')
  })
}
