# Contributing Guidelines

## 🤝 Contributing to LexiCore

We welcome contributions to LexiCore! This guide will help you get started.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contribution Types](#contribution-types)
- [Guidelines](#guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Review Process](#code-review-process)
- [Community Guidelines](#community-guidelines)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 8+
- Git and GitHub account
- Basic knowledge of React, TypeScript, and Vite
- Familiarity with React Router and Tailwind CSS

### Quick Start

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/parthivrawat/lexicore.git
   cd lexicore
   ```

2. **Set up development environment**
   ```bash
   npm install
   npm run dev
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes and test**
   ```bash
   npm run build
   npm run lint
   npm run type-check
   ```

5. **Submit a pull request**

## 🛠️ Development Setup

### Environment Configuration

```bash
# Copy environment template
cp .env.example .env.local

# Add your configuration
VITE_APP_URL=http://localhost:3000
```

### IDE Configuration

#### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

#### Recommended Extensions

Install these VS Code extensions:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-react",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 📝 Contribution Types

### 🐛 Bug Reports

#### Reporting Bugs

1. **Search existing issues** to avoid duplicates
2. **Use the bug report template** with detailed information
3. **Include reproduction steps** and expected vs actual behavior
4. **Add screenshots** if applicable

#### Bug Report Template

```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Screenshots
If applicable, add screenshots

## Environment
- OS: [e.g. Windows 11, macOS 13.0]
- Browser: [e.g. Chrome 108, Firefox 107]
- Version: [e.g. v1.0.0]

## Additional Context
Add any other context about the problem
```

### ✨ Feature Requests

#### Requesting Features

1. **Check existing feature requests**
2. **Use the feature request template**
3. **Describe the use case** and benefits
4. **Consider implementation complexity**

#### Feature Request Template

```markdown
## Feature Description
Brief description of the feature

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
What other approaches did you consider?

## Additional Context
Add any other context about the feature
```

### 📚 Documentation

#### Documentation Contributions

- **Fix typos and grammar**
- **Improve explanations**
- **Add examples**
- **Update outdated information**
- **Translate documentation**

#### Documentation Areas

- Component usage examples
- API documentation
- Development guides
- Deployment instructions
- Architecture documentation

### 🎨 Design and UI

#### Design Contributions

- **UI improvements**
- **Accessibility enhancements**
- **Responsive design fixes**
- **Visual design updates**
- **User experience improvements**

#### Design Guidelines

- Follow existing design patterns
- Maintain consistency with Tailwind CSS
- Ensure accessibility (WCAG compliance)
- Test on multiple screen sizes
- Consider color contrast and readability

### 🌐 Internationalization

#### Language Contributions

- **Add new language datasets**
- **Translate UI text**
- **Improve existing translations**
- **Add locale-specific features**

#### Language Data Format

```typescript
// src/data/roots/[language].ts
export const roots[Lang]: WordRoot[] = [
  {
    id: 'unique-id',
    root: 'root-word',
    type: 'prefix' | 'suffix' | 'base',
    languageOrigin: 'Language Name',
    meaning: 'Meaning in English',
    examples: [
      {
        word: 'example-word',
        meaning: 'Example meaning',
        sentence: 'Example sentence in the language'
      }
    ],
    relatedRootIds: ['related-root-id']
  }
];
```

## 📋 Guidelines

### Code Standards

#### TypeScript

- **Use strict TypeScript** configuration
- **Prefer explicit types** over implicit any
- **Use interfaces** for object shapes
- **Leverage union types** for variants
- **Add JSDoc comments** for complex functions

#### React

- **Use functional components** with hooks
- **Follow hooks rules** (only call at top level)
- **Use TypeScript** for props
- **Prefer composition** over inheritance
- **Add proper key props** for lists

#### CSS/Tailwind

- **Use Tailwind classes** instead of custom CSS
- **Organize classes logically** (layout, typography, colors)
- **Use responsive prefixes** (sm:, md:, lg:)
- **Follow mobile-first approach**
- **Maintain consistency** with existing styles

#### File Organization

- **Use descriptive file names**
- **Group related files** in directories
- **Use barrel exports** for clean imports
- **Keep files focused** on single responsibility
- **Follow naming conventions**

### Testing Guidelines

#### Unit Tests

- **Test component behavior** not implementation
- **Use meaningful test descriptions**
- **Test edge cases** and error conditions
- **Mock external dependencies**
- **Maintain test coverage** above 80%

#### Test Structure

```typescript
describe('ComponentName', () => {
  describe('when props have value X', () => {
    it('should render Y', () => {
      // Test implementation
    });
  });

  describe('when user does action Z', () => {
    it('should trigger callback W', () => {
      // Test implementation
    });
  });
});
```

### Performance Guidelines

#### Optimization

- **Use React.memo** for expensive components
- **Implement useCallback** for event handlers
- **Use useMemo** for expensive calculations
- **Lazy load** heavy components
- **Optimize images** and assets

#### Bundle Size

- **Tree-shake unused imports**
- **Use dynamic imports** for large libraries
- **Monitor bundle size** regularly
- **Optimize critical rendering path**
- **Use code splitting** appropriately

## 🔄 Pull Request Process

### Before Submitting

1. **Run tests locally**
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

2. **Update documentation**
   - Update README if needed
   - Add API documentation for new features
   - Update component documentation

3. **Test your changes**
   - Manual testing in browser
   - Test on different screen sizes
   - Test accessibility

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Accessibility tested
- [ ] Performance tested

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
- [ ] Build successful
- [ ] Linting passes
- [ ] Type checking passes

## Screenshots
If applicable, add screenshots

## Additional Notes
Any additional information about the changes
```

### PR Best Practices

- **Keep PRs focused** on single feature or fix
- **Write clear commit messages** following conventional commits
- **Include tests** for new functionality
- **Update documentation** for API changes
- **Respond to feedback** promptly

## 👀 Code Review Process

### Review Guidelines

#### For Reviewers

1. **Check functionality** - Does it work as intended?
2. **Review code quality** - Is it clean and maintainable?
3. **Check performance** - Any performance concerns?
4. **Verify accessibility** - Is it accessible?
5. **Test edge cases** - Are edge cases handled?
6. **Check documentation** - Is documentation updated?

#### For Authors

1. **Address feedback** promptly and respectfully
2. **Explain complex logic** in comments
3. **Provide test cases** for edge cases
4. **Update documentation** as requested
5. **Consider suggestions** but maintain code quality

### Review Checklist

- [ ] Functionality works as expected
- [ ] Code follows project standards
- [ ] Tests are adequate and passing
- [ ] Documentation is updated
- [ ] Performance is acceptable
- [ ] Accessibility is maintained
- [ ] Security considerations are addressed
- [ ] Error handling is appropriate

## 🌍 Community Guidelines

### Code of Conduct

#### Our Pledge

- **Be respectful** and inclusive
- **Welcome newcomers** and help them learn
- **Focus on what's best** for the community
- **Show empathy** towards other community members

#### Expected Behavior

- **Use welcoming and inclusive language**
- **Respect different viewpoints and experiences**
- **Gracefully accept constructive criticism**
- **Focus on what's best** for the community
- **Show empathy** towards other community members

#### Unacceptable Behavior

- **Harassment** or discriminatory language
- **Personal attacks** or insults
- **Public or private harassment**
- **Publishing private information**
- **Any other unprofessional conduct**

### Communication

#### GitHub Issues

- **Be respectful** and constructive
- **Provide context** and details
- **Search before** creating new issues
- **Use appropriate labels** and templates

#### Pull Requests

- **Be open to feedback** and suggestions
- **Explain your changes** clearly
- **Respond to reviews** in a timely manner
- **Help others understand** your code

#### Discussions

- **Stay on topic** and relevant
- **Be respectful** of different opinions
- **Provide helpful** and constructive feedback
- **Follow community guidelines**

## 🏆 Recognition

### Contributors

All contributors are recognized in:

- **README.md** - Contributor list
- **CHANGELOG.md** - Feature attributions
- **Release notes** - Contribution acknowledgments

### Types of Contributions

We value all types of contributions:

- **Code** - Features, fixes, improvements
- **Documentation** - Guides, examples, API docs
- **Design** - UI/UX improvements, accessibility
- **Content** - Language data, examples, translations
- **Community** - Support, feedback, reviews
- **Infrastructure** - CI/CD, deployment, tools

## 📞 Getting Help

### Resources

- **Documentation**: `/docs` directory
- **API Reference**: `/docs/API.md`
- **Development Guide**: `/docs/DEVELOPMENT.md`
- **Architecture**: `/docs/ARCHITECTURE.md`

### Support Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and discussions
- **Code Reviews**: For feedback and improvements

### Contact Maintainers

For urgent issues or questions:

- **Create an issue** with the "question" label
- **Tag maintainers** in the issue
- **Provide detailed information** about your question

## 🚀 Future Contributions

### Roadmap Items

We're looking for contributions in these areas:

- **Multi-language support** - Add new languages and datasets
- **Interactive features** - Quizzes, flashcards, progress tracking
- **Performance optimizations** - Bundle size, loading speed
- **Accessibility improvements** - Screen readers, keyboard navigation
- **Mobile app** - React Native implementation
- **Backend integration** - API development, database design

### Advanced Contributions

For experienced contributors:

- **Architecture improvements** - System design, patterns
- **Tooling** - Build tools, development utilities
- **Testing infrastructure** - Test frameworks, CI/CD
- **Documentation tools** - Auto-generated docs, examples
- **Performance monitoring** - Analytics, metrics

## 📚 Learning Resources

### Recommended Reading

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Best Practices

- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [React Router Best Practices](https://reactrouter.com/en/main/route/route#concepts)
- [Vite Best Practices](https://vitejs.dev/guide/)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [Accessibility Best Practices](https://www.w3.org/WAI/WCAG21/quickref/)

Thank you for contributing to LexiCore! Your contributions help make this project better for everyone. 🎉
