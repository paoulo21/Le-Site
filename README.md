# Le-Site
Un site sur le quel je fais un peu n'importe quoi

## Project Structure

This is a full-stack web application with:
- **Frontend**: React application with client-side routing (React Router)
- **Backend**: Spring Boot REST API

The application features multiple pages accessible via a top navigation menu, with smooth transitions and no page reloads when navigating between pages.

## Technologies

### Frontend
- React 18.2.0
- React Router DOM 6.20.0
- React Scripts 5.0.1

### Backend
- Spring Boot 3.2.0
- Java 17
- Maven

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- Maven (or use the included Maven wrapper)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will start on `http://localhost:3000`

## Features

- **Client-Side Routing**: Navigate between pages without full page reloads
- **Top Navigation Menu**: Easy access to all pages
- **Multiple Pages**:
  - Home: Welcome page with backend connection test
  - About: Information about the project and technologies
  - Projects: Showcase of current and planned projects
  - Contact: Contact information and navigation demo
- **REST API**: Backend API endpoints accessible from the frontend
- **Responsive Design**: Works on different screen sizes

## API Endpoints

- `GET /api/hello` - Returns a welcome message
- `GET /api/status` - Returns backend status and version

## Development

Both frontend and backend support hot-reload during development:
- React's development server automatically reloads when you make changes
- Spring Boot DevTools can be added for automatic backend reloading

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
mvn clean package
```

The JAR file will be created in `backend/target/`
