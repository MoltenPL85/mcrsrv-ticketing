# Ticketing-app with microservices

#### For development:

- chrome command: thisisunsafe

- ingress-nginx: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.46.0/deploy/static/provider/cloud/deploy.yaml

- add to host: 127.0.0.1 ticketing.dev

- create secret: kubectl create secret generic jwt-secret --from-literal=jwt=something
