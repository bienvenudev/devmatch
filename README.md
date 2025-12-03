# DevMatch

A developer matching application built with NestJS, following the [Intro to NestJS course on Scrimba](https://scrimba.com/nestjs-c0n7djgjma).

## Description

This project is a hands-on learning exercise for building backend APIs with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

## Project setup

```bash
npm install
```

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## API Endpoints

Once the server is running (`npm run start:dev`), you can test the following endpoints at `http://localhost:3000`:

### Profiles

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profiles` | Get all profiles |
| GET | `/profiles/:id` | Get a profile by ID |
| POST | `/profiles` | Create a new profile |
| PUT | `/profiles/:id` | Update a profile by ID |
| DELETE | `/profiles/:id` | Delete a profile by ID |

### Testing with cURL

**Get all profiles:**

```bash
curl http://localhost:3000/profiles
```

**Get a single profile:**

```bash
curl http://localhost:3000/profiles/1
```

**Create a new profile:**

```bash
curl -X POST http://localhost:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "title": "Software Engineer",
    "bio": "Passionate about clean code",
    "skills": ["TypeScript", "NestJS", "React"],
    "experience": 3,
    "location": "Remote",
    "github": "johndoe",
    "available": true
  }'
```

**Update a profile:**

```bash
curl -X PUT http://localhost:3000/profiles/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Senior Software Engineer",
    "experience": 5
  }'
```

**Delete a profile:**

```bash
curl -X DELETE http://localhost:3000/profiles/1
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
npm install -g @nestjs/mau
mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.
