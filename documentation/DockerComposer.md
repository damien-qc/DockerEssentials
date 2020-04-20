--- Docker Compose ---

-- Start a compose application --

At the root (where docker-compose.yml is located): docker-compose up

Start a compose application and rebuild images:
- Docker-compose up --build

docker-compose.yml
Version
Current version is 3. So at the top of the file, specify: version: ‘3’

Services with builds
Have a services key in the file. List out services one indent at a time.

Dependencies
Use the depends_on key and specify dependencies with a list. Each container dependency is marked by a dash, such as: -backend

