# scripts
scripts that run on the host system, everything else will be in docker

the [smee.js -script](https://github.com/drygnet-homeserver/scripts/blob/main/smee.js) subscribes to the github webhook and forwards the request to [adnanh/webhook](https://github.com/adnanh/webhook) and checks the [config](https://github.com/drygnet-homeserver/scripts/blob/main/hooks.json)

### start
pm2 start webhook -- -hooks /hooks.json -verbose

pm2 start smee.js

webhook then runs the [deploy.sh](https://github.com/drygnet-homeserver/scripts/blob/main/deploy.sh) -script

the script removes the repo from the server and git clones it (again), and then just runs the docker compose -command
