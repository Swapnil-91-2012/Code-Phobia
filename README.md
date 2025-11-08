# Castify: Stream Your Story Risk-Free

This repository contains the full-stack codebase for Castify, a modern video streaming platform.

## Project Structure

- `/backend`: Node.js, Express, and TypeScript backend.
- `/frontend`: React and Tailwind CSS frontend.
- `/contracts`: Solidity smart contracts for creator payouts.
- `/uploads`: Directory for storing uploaded video files (in development).
- `/logs`: Directory for application logs.

## Getting Started (Windows)

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### 1. Initial Setup

**1.1. Copy Logo & Create Folders:**

Run the bootstrap script to copy the logo and create necessary directories. Open PowerShell and execute:

```powershell
./bootstrap_copy_logo.ps1
```

**1.2. Install Dependencies:**

Install dependencies for all workspaces (root, backend, frontend, contracts):

```bash
npm run install:all
```

### 2. Environment Configuration

Copy the example environment file and fill in your secrets:

```bash
copy .env.example .env
```

Now, open the `.env` file and add your credentials for:
- `JWT_SECRET` and `JWT_REFRESH_SECRET` (generate strong random strings)
- SMTP provider (e.g., SendGrid, Mailgun)
- Twilio (for SMS OTP)
- Infura/Alchemy (for blockchain interaction)

### 3. Database Setup

The backend uses Knex.js for database migrations and seeding.

**Run Migrations:**
This will create the necessary tables in your SQLite database.

```bash
npm run migrate:latest --workspace=backend
```

**Seed Database (Optional):**
This will populate the database with initial sample data.

```bash
npm run seed:run --workspace=backend
```

### 4. Running the Application

**Development Mode:**

This command will start both the frontend and backend servers in development mode with hot-reloading.

```bash
npm run dev
```

- Frontend will be available at `http://localhost:5173`
- Backend will be available at `http://localhost:4000`

### 5. Running Tests

**Backend Tests (Jest):**

```bash
npm test --workspace=backend
```

**Smart Contract Tests (Hardhat):**

```bash
npm test --workspace=contracts
```

## Security Notes

- **NEVER** commit your `.env` file or any real API keys to version control.
- Use strong, unique secrets for JWTs.
- The current setup uses an in-memory store for OTPs and local file storage for videos. For production, switch to a persistent store like Redis for OTPs and a cloud storage solution like AWS S3 for videos.
- Rate limiting and other security middleware should be enhanced for production environments.
- The provided Solidity contract is a simplified example. For a real-world application, ensure it is thoroughly audited.
