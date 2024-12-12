# TypeScript Tutorial Repository

A collection of TypeScript tutorials and exercises, designed for both beginners and advanced developers. This repository provides hands-on learning experiences with TypeScript, particularly focusing on its integration with React.

## 🎯 Project Overview

This repository is structured to help you:

- Learn TypeScript through practical exercises
- Understand TypeScript's integration with React
- Practice with real-world examples
- Create and share your own TypeScript lessons

This project is built in Next JS which might be over kill, but the idea is if you want to build out components, and have that visual aspect, you can easily spin up a dev server to check your work.

```
src/app/
├── Lessons/
│   ├── React/       # React-specific TypeScript lessons
│   ├── Zod/         # Zod validation library tutorials
│   └── ...          # Other categorized lessons
├── Playground/      # Area for experimentation and practice
└── ...
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/[username]/typescript-tutorial.git
```

2. Install dependencies:

```bash
pnpm i
```

3. Start the development server:

```bash
pnpm dev
```

> **Note:** Running the dev server is optional. You can explore and work with the TypeScript files directly in your code editor.

## 📚 Learning Paths

### 1. Structured Lessons

Navigate to the `Lessons` folder to find categorized tutorials. Each lesson includes:

- Clear instructions and objectives
- Starter code
- Solution files
- Additional resources and references

### 2. Self-Guided Learning

Use the `Playground` folder to:

- Experiment with new concepts
- Create test cases
- Practice TypeScript features
- Build proof-of-concepts

## 🎓 Creating Your Own Lesson

1. Create a new folder in `Lessons/[Category]/`
2. Include the following files:
   - `lesson.ts` - The exercise file
   - `solution.ts` - The solution file
   - `README.md` - Instructions and explanations (optional, instructions could also be placed in the lesson file)

Example structure:

```
Lessons/
└── YourCategory/
    └── YourLesson/
        ├── lesson.ts
        ├── solution.ts
        └── README.md
```

## 📖 Learning Resources

### Official Documentation

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript from Scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [TypeScript CheatSheet](https://www.typescriptlang.org/cheatsheets)

### Advanced Topics

- [Generics Guide](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Discriminated Unions](https://www.totaltypescript.com/discriminated-unions-are-a-devs-best-friend)
- [Type Manipulation](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)


## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new lessons
- Improve existing content
- Fix bugs
- Add more learning resources

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
