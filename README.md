# Notes Maker App

A simple Notes application built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- Add new notes with a title and content.
- Edit existing notes.
- Delete notes.
- List all notes.
- Responsive UI with interactive elements.

## Technologies Used

- **Frontend:**
  - React.js
  - CSS
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **Miscellaneous:**
  - Cors
  - Body-Parser

## Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (or use MongoDB Atlas for a cloud-based solution)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/notes-app.git
    cd notes-app
    ```

2. Install dependencies:

    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd frontend
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `backend` directory and add your MongoDB URI:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_uri
    ```

## Running the Application

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

By default, the frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## API Endpoints

- **GET /api/notes**: Retrieve all notes.
- **POST /api/notes**: Add a new note.
- **PUT /api/notes/:id**: Edit an existing note by ID.
- **DELETE /api/notes/:id**: Delete a note by ID.

## Usage

### Adding a Note

- Navigate to the "Add Note" section.
- Enter the title and content of the note.
- Click "Add Note".

### Editing a Note

- Click the "Edit" button next to the note you want to edit.
- Update the title and content in the prompt dialogs.
- Click "OK" to save changes.

### Deleting a Note

- Click the "Delete" button next to the note you want to delete.
- Confirm the deletion in the prompt dialog.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the open-source community for the tools and resources that make projects like this possible.
