const SmeeClient = require('smee-client')
const dotenv = require('dotenv');

dotenv.config();

const smee_secret = process.env.SMEE_SECRET

const smee = new SmeeClient({
  source: `https://smee.io/${smee_secret}`,
  logger: console,
  target: 'http://localhost:9000/hooks/deploy'
})

const events = smee.start()

