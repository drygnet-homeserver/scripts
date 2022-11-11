const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/{smee_secret}',
  logger: console,
  target: 'http://localhost:9000/hooks/deploy'
})

const events = smee.start()

