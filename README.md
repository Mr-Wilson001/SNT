# SNT
# Note-Taking API

This is a simple note-taking API built with Node.js, Express, and TypeScript. It allows users to create, retrieve, update, and delete notes.

## Features

- Create a new note
- Retrieve all notes
- Retrieve a specific note by ID
- Delete a note by ID

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB (with Mongoose)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/note-taking-api.git
   ```

2. Navigate to the project directory:

   ```
   cd note-taking-api
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

1. Set up your MongoDB database and update the connection string in `src/app.ts`.

### Running the API

1. Start the server:

   ```
   npm run start
   ```

2. The API will be running on `http://localhost:3000`.

## API Endpoints

- **GET** `/api/notes` - List all notes
- **GET** `/api/notes/:id` - Get a specific note
- **POST** `/api/notes` - Create a new note
- **DELETE** `/api/notes/:id` - Delete a note

## Testing the API

You can test the API using Postman or any other API testing tool. Make sure to set the appropriate HTTP method and URL for each request.

## License

This project is licensed under the MIT License.