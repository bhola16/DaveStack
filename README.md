# Dev Stack Builder

**Dev Stack Builder** is a responsive React application that helps developers explore different technologies and build a personalized development stack.

The application provides a collection of frontend, backend, database, programming language, styling, and DevOps technologies. Users can explore technology details, add technologies to their stack, remove individual technologies, or clear the entire stack.

## 🚀 Live Demo

**Vercel:** https://dave-stack.vercel.app/

**Netlify:** https://davestackbhola.netlify.app/

## 📂 GitHub Repository

**GitHub:** https://github.com/bhola16/DaveStack

---

## ✨ Features

### 1. Explore Development Technologies

Users can explore a collection of technologies with useful information including:

- Technology name
- Category
- Description
- Technology icon
- Rating
- Difficulty level
- Badge

The technology data is loaded dynamically from a JSON file.

### 2. Build Your Own Development Stack

Users can create their own development stack by selecting technologies from the available technology cards.

The selected technologies are displayed in the **Your Stack** section, where users can:

- View selected technologies
- Remove individual technologies
- Remove all selected technologies
- See the total number of selected technologies

### 3. Duplicate Selection Prevention

A technology cannot be added to the stack more than once.

When a user attempts to add an already selected technology, the application displays a warning notification.

### 4. Responsive User Interface

The application is designed to work across different screen sizes.

- 📱 Mobile: One technology card per row
- 📱 Tablet: Two technology cards per row
- 💻 Desktop: Three technology cards per row

The navigation bar also provides different layouts for desktop, tablet, and mobile devices.

### 5. Toast Notifications

**React-Toastify** is used to provide feedback for stack actions.

Notifications are displayed when:

- A technology is added
- A duplicate technology is attempted
- A technology is removed
- The entire stack is cleared

### 6. Loading State

The technology data is loaded asynchronously from the local JSON file, and a loading indicator is displayed while the data is being loaded.

### 7. Modern UI Design

The application uses a clean and modern interface with:

- Responsive layouts
- Gradient highlights
- Rounded cards
- Hover effects
- Technology badges
- Rating indicators
- Responsive navigation
- Responsive footer

---

## 🛠️ Technologies Used

- **React** – UI development
- **TypeScript** – Type-safe JavaScript
- **Vite** – Development and build tool
- **Tailwind CSS** – Styling and responsive design
- **React Icons** – Icons used throughout the application
- **React-Toastify** – Toast notifications
- **JSON** – Local technology data

---

## 📊 Available Technologies

The application contains 12 technologies covering different areas of development.

| Technology   | Category |
| ------------ | -------- |
| React        | Frontend |
| Vue.js       | Frontend |
| Svelte       | Frontend |
| Next.js      | Frontend |
| Node.js      | Backend  |
| PostgreSQL   | Database |
| Redis        | Database |
| JavaScript   | Language |
| TypeScript   | Language |
| Java         | Language |
| Tailwind CSS | Styling  |
| Docker       | DevOps   |

---

## 📁 Project Structure

```text
DaveStack/
├── public/
│   └── datafile.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Banner.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   │
│   │   └── technology/
│   │       ├── AvailavleTechs.tsx
│   │       ├── TechnologyCard.tsx
│   │       ├── TechnologyGrid.tsx
│   │       ├── YourStack.tsx
│   │       └── YourStackCard.tsx
│   │
│   ├── type/
│   │   └── Type.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/bhola16/DaveStack.git
```

### 2. Navigate to the project directory

```bash
cd DaveStack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

### 5. Build the project

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## 📱 Responsive Design

The application follows a responsive-first approach using Tailwind CSS.

### Mobile

- One technology card per row
- Mobile navigation with hamburger menu
- Centered logo
- Responsive authentication buttons
- Stacked banner layout

### Tablet

- Two technology cards per row
- Tablet-specific navigation
- Responsive spacing and typography

### Desktop

- Three technology cards per row
- Full navigation menu
- Technology section and stack displayed in a 9/3 layout
- Expanded footer layout

---

## 🔄 Application Flow

```text
User opens application
        ↓
Navbar + Banner displayed
        ↓
Technology data loaded from datafile.json
        ↓
Technology cards displayed
        ↓
User selects a technology
        ↓
Technology added to "Your Stack"
        ↓
Toast notification displayed
        ↓
User can remove individual technology
        ↓
OR
        ↓
User can remove the entire stack
```

---

## 📦 Data Source

Technology information is stored separately in:

```text
public/datafile.json
```

Each technology contains:

```text
id
name
category
description
icon
rating
difficulty
badge
```

Keeping the technology data in a separate JSON file makes the application easier to maintain and extend.

---

## 👨‍💻 Author

**Bholanath Bala**

**GitHub:** https://github.com/bhola16

---

## 📄 License

This project was created for educational purposes as part of the Programming Hero Web Development course.
