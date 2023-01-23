# About this project

Hi!
This is a simple POC to prove my learning of the TypeScript language.
It is a simple To-Do list with basic CRUD operations.
For more information about the API, see the [documentation](#documentation).

## Installation

1. Run <code>npm install</code> to install all dependencies.
2. Create the database with your prefered name.
3. Create the .env file in according to the [.env.example](.env.example) file.
4. Run the prisma migration with: <code>npx prisma migrate dev --name init</code>.
5. To start the API, run <code>npm run dev</code>.

## Documentation

<pre>
<code>
GET: "/tasks/all"

GET: "/tasks/:id"

POST: "/tasks
Body: {
    "taskName": string with 3 characters minimum. Required.
    "taskDescription": string with 30 characters maximum. Optional.
    "dueTo": date formated string. Optional.
    "createdAt": date formated string, Forbidden. (to be used by the database)
}

PATCH: "/tasks/:id"
Body: {
    "taskName": string with 3 characters minimum. Required.
    "taskDescription": string with 30 characters maximum. Optional.
    "dueTo": date formated string. Optional.
    "createdAt": date formated string, Forbidden. (to be used by the database)
}

DELETE: "/tasks/:id"
</code>
</pre>
