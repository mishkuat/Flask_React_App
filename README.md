
# Flask React Full Stack Application

A full-stack web application built using Flask for the backend and React for the frontend.

## Getting Started

### Prerequisites

Before you start, ensure that you have the following installed on your system:

- **Python 3.x** (for the Flask backend)
- **Node.js** (with npm) (for the React frontend)

### Backend Setup (Flask API)

1. **Navigate to the project directory**:
   ```bash
   cd /flask_server
   ```

2. **Install required Python dependencies**:
   The backend requires Flask and `flask-cors` to be installed. You can easily install these via pip:
   ```bash
   pip install flask flask-cors
   ```

3. **Run the Flask server**:
   Once the dependencies are installed, you can start the backend server using the following command:
   ```bash
   python server.py
   ```

   This will start the Flask server, which will handle the backend API requests.

### Frontend Setup (React App)

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install React dependencies:
   Ensure that you have **Node.js** installed on your system. Then, run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   After installing all dependencies, you can start the React application with the following command:
   ```bash
   npm run start
   ```

   This will launch the React development server, and the frontend will be able to communicate with the backend APIs.

### How It Works

- The **Flask** backend exposes APIs that the **React** frontend interacts with.
- **CORS** is handled using the `flask-cors` library to allow cross-origin requests from the React frontend.
- The frontend sends requests to the Flask backend, and the backend responds with the appropriate data or actions.


