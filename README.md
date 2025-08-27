# Vite React Template with ShadcnUI, MobX, and TanStack Router

This template provides a modern, efficient starting point for React applications using Vite as the build tool, enhanced with ShadcnUI components, MobX for state management, and TanStack Router for file-based routing.

## Features

- ⚡️ **Vite** - Lightning fast development server and build tool
- ⚛️ **React 19** - The latest version of React with all its new features
- 🎨 **ShadcnUI** - Beautiful, accessible UI components built with Radix UI and Tailwind CSS
- 🔄 **MobX** - Simple, scalable state management
- 🧭 TanStack Router - Type-safe, file-based routing with automatic route generation
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🛠️ **TypeScript** - Type safety for your project
- 📦 **ESLint & Prettier** - Code quality and formatting
- 🧩 **Absolute Imports** - Clean import paths

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn or pnpm

### Installation

1. Clone this repository or use it as a template:

```bash
# Clone the repository
git clone https://github.com/Theo-flux/vsm-template
```

2. Install dependencies:

```bash
cd my-new-project
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # UI components
│   ├── ui/              # ShadcnUI components
│   └── custom/          # Custom project components
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
├── lib/                 # Utilities and configurations
├── routes/              # TanStack Router file-based routes
│   ├── _app.tsx         # Root layout component
│   ├── index.tsx        # Home page route
│   └── $paramName/      # Dynamic route directories
│       └── index.tsx    # Dynamic route components
├── stores/              # MobX stores
│   ├── RootStore.ts     # Main store that combines all stores
│   └── [FeatureStore].ts # Feature-specific stores
├── styles/              # Global styles
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Main App component with router setup
└── main.tsx             # Entry point
```

## State Management with MobX

This template uses MobX for state management with a centralized store architecture. The stores are organized as follows:

- `RootStore`: The main store that combines all feature stores
- Feature-specific stores: Separate stores for different features or domains (AppConfig, Auth, Catalog, etc.)

### Store Structure

The store is set up with a root store that contains all feature stores:

```tsx
// src/stores/index.ts
import { createContext, useContext } from "react";
import AppConfigStore from "./AppConfig";
import { configure } from "mobx";
import AuthStore from "./AuthStore";
import CatalogStore from "./CatalogStore";
// ... other store imports

configure({
  enforceActions: "observed",
  computedRequiresReaction: true,
});

export class RootStore {
  AppConfigStore: AppConfigStore;
  AuthStore: AuthStore;
  CatalogStore: CatalogStore;
  // ... other stores

  constructor() {
    this.AppConfigStore = new AppConfigStore(this);
    this.AuthStore = new AuthStore(this);
    this.CatalogStore = new CatalogStore(this);
    // ... initialize other stores
  }
}

export const Stores = new RootStore();

const StoreContext = createContext<RootStore>(Stores);

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <StoreContext.Provider value={Stores}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
```

### Adding a New Store

To add a new feature store:

1. Create a new store file (e.g., `NewFeatureStore.ts`)
2. Import it in the RootStore file
3. Add it as a property in the RootStore class
4. Initialize it in the constructor

### Using Stores in Components

Example usage:

```tsx
// In a component
import { useStore } from "@/stores";
import { observer } from "mobx-react-lite";

const MyComponent = observer(() => {
  const {
    AuthStore: { user, updateUserProfile },
  } = useStore();

  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <button onClick={() => updateUserProfile({ name: "New Name" })}>
        Update Name
      </button>
    </div>
  );
});
```

## UI Components with ShadcnUI

This template uses ShadcnUI components, which are built on top of Radix UI and styled with Tailwind CSS.

Example usage:

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MyForm = () => {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </div>
  );
};
```

## Adding New ShadcnUI Components

You can add more ShadcnUI components as needed:

```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
# etc.
```

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### File-Based Routing with TanStack Router

This template uses TanStack Router for file-based routing. The routing structure follows conventions:

Files in the src/routes directory automatically become routes
index.tsx files represent the route for their directory
Files/directories with `# Vite React Template with ShadcnUI, MobX, and TanStack Router

This template provides a modern, efficient starting point for React applications using Vite as the build tool, enhanced with ShadcnUI components, MobX for state management, and TanStack Router for file-based routing.

### Adding Stores

1. Create a new store file in the `src/stores` directory
2. Add the store to the `RootStore`
3. Update the `useStores` hook if necessary

## Scripts

- `dev`: Start the development server
- `build`: Build for production
- `preview`: Preview the production build locally
- `lint`: Run ESLint
- `format`: Format code with Prettier

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [ShadcnUI](https://ui.shadcn.com/)
- [MobX](https://mobx.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
