# Qwalo Website

The official website for **Qwalo AI**. This repository contains the frontend source code, designed to showcase our AI solutions and platform capabilities.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

*   **Node.js** (v18.0.0 or later recommended)
*   **npm**, **yarn**, or **pnpm**
*   **Git**

### 🛠️ Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Qwalo-ai/qwalo-website.git
    cd qwalo-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables**
    Create a `.env.local` file in the root directory and add any necessary environment variables (see `.env.example` if available).

4.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
├── public/          # Static assets (images, fonts, icons)
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Application routes and pages
│   ├── styles/      # Global styles and CSS modules
│   ├── utils/       # Utility functions and helpers
│   └── hooks/       # Custom React hooks
├── .gitignore       # Files ignored by Git
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation