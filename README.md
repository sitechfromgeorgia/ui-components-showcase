# 🎨 UI Components Showcase

> Beautiful UI components from MVPBlocks, OriginUI, and Kibo libraries - Created with Marathon MCP Servers

![UI Components Showcase](https://img.shields.io/badge/UI-Components-purple?style=for-the-badge&logo=react)
![Marathon MCP](https://img.shields.io/badge/Marathon-MCP-blue?style=for-the-badge)
![Made in Georgia](https://img.shields.io/badge/Made%20in-Georgia%20🇬🇪-red?style=for-the-badge)

## ✨ Overview

This project showcases the power of integrating multiple open-source UI component libraries into a cohesive, beautiful web application. Built using **Marathon MCP Servers** to demonstrate modern development workflows.

### 🧱 Featured Libraries

| Library | Description | Showcase Component |
|---------|-------------|-------------------|
| **[MVPBlocks](https://blocks.mvp-subha.me)** | Beautiful, copyable blocks for rapid MVP development | Gradient Hero Section |
| **[OriginUI](https://originui.com)** | Advanced React hooks and modern UI components | File Upload with useFileUpload hook |
| **[Kibo UI](https://kibo-ui.com)** | Accessible components built on shadcn/ui primitives | Button Components System |

## 🚀 Live Demo

```bash
# Clone the repository
git clone https://github.com/sitechfromgeorgia/ui-components-showcase.git

# Install dependencies
cd ui-components-showcase && npm install

# Start development server
npm run dev
```

## 🛠️ Built With

### Core Technologies
- **React 18** + TypeScript for robust development
- **Vite** for lightning-fast builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations

### Marathon MCP Servers Used
- 🏃‍♂️ **Marathon MCP Tool** - Core functionality
- 💻 **GitHub MCP** - Repository management
- 📚 **MVPBlocks Docs** - Component documentation
- 🎨 **OriginUI Docs** - React hooks documentation  
- ⚡ **Kibo Docs** - shadcn/ui component docs

## 🎯 Featured Components

### 1. 🌈 Gradient Hero (MVPBlocks Inspired)
```tsx
import GradientHero from './components/GradientHero';

<GradientHero />
```
- Stunning gradient backgrounds with radial effects
- Smooth Framer Motion animations
- Interactive showcase cards
- Responsive design

### 2. 📁 File Upload (OriginUI Inspired)
```tsx
const { files, isDragging, errors } = useFileUpload({
  multiple: true,
  maxFiles: 5,
  accept: 'image/*,application/pdf'
});
```
- Advanced React hook for file handling
- Drag & drop functionality
- File validation and previews
- Error handling with animations

### 3. 🔘 Button Showcase (Kibo UI Inspired)
```tsx
<AdvancedButton 
  variant="default"
  isLoading={loading}
  leftIcon="📤"
>
  Upload File
</AdvancedButton>
```
- Multiple variants and sizes
- Loading states with spinners
- Button groups and animations
- Full accessibility support

## 📊 Project Structure

```
src/
├── components/
│   ├── GradientHero.tsx     # MVPBlocks inspired hero
│   ├── FileUpload.tsx       # OriginUI file upload hook
│   └── ButtonShowcase.tsx   # Kibo UI button components
├── utils/
│   └── cn.ts               # Tailwind class utility
├── App.tsx                 # Main application
└── main.tsx                # Entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradients (`#8B5CF6`, `#A855F7`)
- **Background**: Dark slate (`#0F172A`, `#1E293B`)
- **Accents**: Blue, Green, Red variants

### Animation Principles
- Subtle entrance effects (fade + slide)
- Interactive hover states
- Smooth page transitions
- Loading state animations

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌟 Key Features

- ✅ **Multi-library integration** - Three different UI libraries working together
- ✅ **TypeScript support** - Full type safety and better DX
- ✅ **Responsive design** - Works perfectly on all devices
- ✅ **Dark theme** - Beautiful dark mode with gradients
- ✅ **Smooth animations** - Framer Motion powered interactions
- ✅ **Accessibility** - WCAG compliant components
- ✅ **Modern React** - Hooks, functional components, and best practices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

## 📚 Learning Resources

### Component Libraries
- [📱 MVPBlocks Documentation](https://blocks.mvp-subha.me)
- [🎨 OriginUI Documentation](https://originui.com)
- [⚡ Kibo UI Documentation](https://kibo-ui.com)

### Technologies
- [⚛️ React Documentation](https://react.dev)
- [🎯 TypeScript Handbook](https://www.typescriptlang.org)
- [🎨 Tailwind CSS](https://tailwindcss.com)
- [🔄 Framer Motion](https://www.framer.com/motion)

## 🏃‍♂️ Marathon MCP Ecosystem

This project was built using the **Marathon MCP (Model Context Protocol)** ecosystem:

- **17 Total Servers** available
- **14 Active Servers** (82% success rate)
- **Multi-domain integration** (Development, Infrastructure, AI, Business)

Learn more about Marathon MCP and how it enables powerful development workflows.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### UI Libraries
- **MVPBlocks** team for beautiful component blocks
- **OriginUI** team for advanced React patterns  
- **Kibo UI** team for accessible shadcn/ui components

### Technologies
- React team for the amazing framework
- Tailwind team for utility-first CSS
- Framer team for Motion library
- Vite team for fast build tooling

---

<div align="center">

**🇬🇪 Made with love in Batumi using Marathon MCP Servers**

[⭐ Star this repo](https://github.com/sitechfromgeorgia/ui-components-showcase) | [🐛 Report Bug](https://github.com/sitechfromgeorgia/ui-components-showcase/issues) | [💡 Request Feature](https://github.com/sitechfromgeorgia/ui-components-showcase/issues)

</div>