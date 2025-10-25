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
- Start postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image
    - `docker build -t user_image .`
- Start the image 
    - `docker run -p 3000:3000 user_image`

## Docker Compose installation steps
- Install docker
- Run `docker-compose up`
