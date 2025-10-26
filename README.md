## Manual Installation 
 - Install nodejs locally ()
 - Clone the repo
 - Install Dependenceis (npm install)
 - Start the DB locally 
    - docker run -e POSTGRES_PASSWORD = mysecretpassword -d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new DB

- Change the .env file and update your DB credentials
- npx prisma migrate
- npx prisma generate
- npm run build 

## Docker installation
- Install docker
- Clone the repo
- Create a network
    - `docker network create doc-comp-net`
- Start postgres
    - `docker run --network doc-comp-net --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
- Build the image
    - `docker build --network=host -t doc-comp-proj .`
- Start the image 
    - `docker run -e DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres" --network doc-comp-net -p 3000:3000 doc-compose-bckend`

## Docker Compose installation steps
- clone the repo
- Install docker
- Run `docker-compose up`
