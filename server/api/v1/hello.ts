export default defineEventHandler((event) => {
  return {
    hello: 'world',
    event: event.handled
  }
})
