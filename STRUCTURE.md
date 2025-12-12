# React Features Playground - Project Structure

## Overview
This project provides a scalable, tab-based React application for practicing different features in isolation.

## Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── Tabs/
│   │   ├── Tabs.jsx     # Main tab navigation component
│   │   └── Tabs.css
│   ├── Card/
│   │   ├── Card.jsx     # Reusable card component
│   │   └── Card.css
│   └── Button/
│       ├── Button.jsx   # Button with variants (primary, secondary, danger)
│       └── Button.css
├── features/            # Feature-specific components
│   ├── Todo/
│   │   ├── Todo.jsx     # Todo app with CRUD operations
│   │   └── Todo.css
│   ├── InfiniteScroll/
│   │   ├── InfiniteScroll.jsx  # Infinite scroll implementation
│   │   └── InfiniteScroll.css
│   └── Carousel/
│       ├── Carousel.jsx # Image/content carousel
│       └── Carousel.css
├── App.jsx             # Main app with tab configuration
├── App.css
├── index.css           # Global styles
└── main.jsx
```

## How to Add New Features

### 1. Create Feature Folder
```bash
mkdir src/features/YourFeature
```

### 2. Create Feature Component
```jsx
// src/features/YourFeature/YourFeature.jsx
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './YourFeature.css';

const YourFeature = () => {
  return (
    <div className="your-feature-container">
      <h2>Your Feature</h2>
      <Card>
        {/* Your feature content */}
      </Card>
    </div>
  );
};

export default YourFeature;
```

### 3. Add Styles
```css
/* src/features/YourFeature/YourFeature.css */
.your-feature-container h2 {
  margin-bottom: 20px;
  color: #1f2937;
}
```

### 4. Register in App.jsx
```jsx
// Import your feature
import YourFeature from './features/YourFeature/YourFeature';

// Add to tabs array
const tabs = [
  // ... existing tabs
  {
    label: 'Your Feature',
    component: <YourFeature />
  }
];
```

## Available Components

### Tabs
- Main navigation component
- Automatically handles active state
- Easy to extend with new tabs

### Card
- Consistent container styling
- Accepts custom className for extensions

### Button
- Variants: primary, secondary, danger
- Disabled state support
- Consistent styling across features

## Styling Guidelines

- Use consistent color palette (defined in CSS files)
- Follow BEM-like naming conventions
- Keep feature styles isolated in their own CSS files
- Use the Card component for consistent containers
- Leverage existing button variants before creating custom ones

## Example Features Included

1. **Todo App**: CRUD operations, local state management
2. **Infinite Scroll**: Scroll detection, loading states, simulated API calls
3. **Carousel**: Navigation controls, indicators, responsive design

Each feature demonstrates different React patterns and can serve as a starting point for more complex implementations.