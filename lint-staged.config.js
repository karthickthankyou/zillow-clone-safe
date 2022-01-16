module.exports = {
  '*.{ts,tsx,js}': () => ['npm run format:fix', 'npm run validate'],
}
