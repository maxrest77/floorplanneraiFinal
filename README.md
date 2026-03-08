# Floor Plan AI

Floor Plan AI is a modern, full-stack web application that leverages AI to analyze, visualize, and manage building floor plans. Built with React Router v7, it provides an interactive platform for users to create, edit, and collaborate on floor plan designs with real-time AI assistance.

## ✨ Features

- 🤖 **AI-Powered Floor Plan Generation** - Generate floor plans using Google Colab AI integration
- 🎨 **Interactive Canvas** - Drag, rotate, scale, and erase floor plan elements
- 🔐 **Secure Authentication** - Firebase Auth with Email/Password and Google Sign-In
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🎯 **Real-time Collaboration** - WebSocket-based real-time updates
- 💳 **Premium Features** - Stripe integration for subscription management
- 📊 **Data Visualization** - Interactive charts and analytics with Recharts
- 🗺️ **Google Maps Integration** - Location-based features
- 📄 **PDF Export** - Generate and download floor plan PDFs
- 🎭 **3D Visualization** - Three.js powered 3D floor plan views
- 🔄 **State Management** - Efficient state handling with Zustand and React Query

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **React Router v7** - Full-stack routing with SSR support
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### UI Components & Libraries
- **Chakra UI** - Accessible component library
- **Shadcn UI** - Modern, customizable components
- **Lucide React** - Beautiful icon library
- **Recharts** - Composable charting library
- **React Markdown** - Markdown rendering
- **Three.js** - 3D graphics and animations
- **Motion** - Smooth animations and transitions

### State Management & Data
- **Zustand** - Lightweight state management
- **TanStack React Query** - Powerful data synchronization
- **React Hook Form** - Performant forms with validation
- **Yup** - Schema validation

### Backend & Database
- **Hono** - Fast, lightweight web framework
- **Neon Database** - Serverless PostgreSQL
- **Node.js** - Runtime environment
- **WebSockets** - Real-time communication

### Authentication & Security
- **Firebase Auth** - Authentication and user management
- **@auth/core** - Authentication framework
- **Argon2** - Secure password hashing

### Integrations
- **Stripe** - Payment processing
- **Google Colab API** - AI/ML integration
- **Firebase Hosting** - Deployment platform
- **Google Maps** - Location services

### Development & Testing
- **Vitest** - Fast unit testing
- **Testing Library** - Component testing utilities
- **JSDOM** - DOM environment for testing
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Environment Setup

You'll need to set up the following services:

1. **Firebase Project**
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password and Google providers
   - Set up Firebase Hosting
   - Get your Firebase config credentials

2. **Neon Database**
   - Create a Neon account at [https://neon.tech/](https://neon.tech/)
   - Create a new database
   - Get your database connection string

3. **Stripe Account** (for payments)
   - Create a Stripe account at [https://stripe.com/](https://stripe.com/)
   - Get your API keys

4. **Google Colab** (for AI features)
   - Set up your Colab notebook
   - Get the API endpoint URL

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maxrest77/floorplanneraiFinal.git
   cd floorplanneraiFinal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory with the following variables:

   ```env
   # Database
   DATABASE_URL=postgresql://username:password@hostname/database

   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_secret_key

   # AI Configuration
   NEXT_PUBLIC_COLAB_API_ENDPOINT=https://colab.research.google.com/drive/your_notebook_id

   # Other
   NEXT_PUBLIC_APP_URL=http://localhost:4000
   ```

4. **Database Setup**

   The application uses Neon PostgreSQL. Make sure your database is set up with the required tables. Check the `__create/` directory for database schema and migration files.

## 🏃‍♂️ Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:4000`

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (if not done)**
   ```bash
   firebase init
   ```

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

Your app will be available at: `https://your-project-id.web.app`

### Other Deployment Options

The application can also be deployed to:
- Vercel
- Netlify
- Railway
- Render
- AWS/GCP/Azure

## 📁 Project Structure

```
floorplanneraiFinal/
├── __create/                 # Custom framework utilities
│   ├── adapter.ts           # Database adapter
│   ├── index.ts             # Server entry point
│   └── route-builder.ts     # API route utilities
├── plugins/                 # Vite plugins
│   ├── addRenderIds.ts
│   ├── layouts.ts
│   └── ...
├── src/
│   ├── app/                 # Application pages and layouts
│   │   ├── api/            # API routes
│   │   ├── components/     # Reusable components
│   │   └── ...
│   ├── client-integrations/ # Third-party integrations
│   ├── components/         # Main UI components
│   ├── config/            # Configuration files
│   └── utils/             # Utility functions
├── test/                   # Test files
├── package.json
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure TypeScript types are properly defined
- Test on multiple browsers and devices


## 👥 Team

- **Karthikeyan S** - Development
- **Derwin** - Development
- **Rithic** - Development
- **Meganath** - Development
- **Zeeshan** - Development

## 🙏 Acknowledgments

- React Router team for the amazing full-stack framework
- Vercel for the inspiration behind the framework architecture
- All contributors and open-source maintainers

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy floor planning! 🏠✨**
