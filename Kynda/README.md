# 🎓 Kynda - Decentralized Learning Platform

<div align="center">
  <img src="./home.png" alt="Kynda Platform" width="800"/>
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
</div>

## 📖 About

**Kynda** is a next-generation decentralized learning platform that connects students with tutors through blockchain technology. Our platform offers secure wallet integration, transparent payments, and personalized learning experiences powered by AI assistance.

### ✨ Key Features

- 🔐 **Wallet Integration** - Seamless cryptocurrency wallet connectivity
- 👨‍🎓 **Dual User Roles** - Separate experiences for students and tutors
- 💬 **Real-time Chat** - Direct communication between students and tutors
- 📚 **Course Management** - Browse, book, and track learning progress
- 💰 **Earnings Dashboard** - Transparent payment tracking for tutors
- 🤖 **AI Assistant** - Kynda Assistant for personalized learning support
- 📊 **Analytics & Reports** - Comprehensive performance tracking
- 🔔 **Notifications** - Stay updated with real-time alerts

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Git
- A modern web browser
- MetaMask or compatible Web3 wallet (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/ayoseun-byte/kynda.git

# Navigate to project directory
cd kynda

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗️ Project Structure
```
kynda/
├── public/              # Static assets
├── src/
│   ├── auth/           # Authentication context and logic
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   │   ├── Student/   # Student-specific pages
│   │   └── Tutor/     # Tutor-specific pages
│   ├── services/       # API and external services
│   ├── utils/          # Helper functions and utilities
│   ├── App.js          # Main application component
│   └── main.jsx        # Application entry point
├── tests/              # Test files
└── package.json
```

## 👥 User Roles

### Students
- Browse and enroll in courses
- Book sessions with tutors
- Track learning progress
- Manage wallet and payments
- Access learning resources
- Chat with tutors

### Tutors
- Create and manage courses
- Schedule teaching sessions
- Track earnings and analytics
- Communicate with students
- Upload learning resources
- Generate performance reports

## 🛣️ Main Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login` | Student login |
| `/tutor-login` | Tutor login |
| `/student-signup` | Student registration |
| `/tutor-signup` | Tutor registration |
| `/dashboard` | Student dashboard |
| `/tutor-dashboard` | Tutor dashboard |
| `/my-learning` | Student courses |
| `/tutor-courses` | Tutor course management |
| `/student-wallet` | Student wallet |
| `/tutor-wallet` | Tutor wallet |
| `/kynda-assistant` | AI learning assistant |

## 🧪 Testing
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Open test UI
npm run test:ui
```

### Test Coverage Goals
- ✅ Unit tests for utilities and services
- ✅ Component tests for UI elements
- ✅ Integration tests for key user flows
- ✅ Target: 80%+ code coverage

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=https://api.kynda.com
VITE_WALLET_NETWORK=mainnet
VITE_ENABLE_AI_ASSISTANT=true
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Guidelines
- Include tests for new features
- Update documentation as needed
- Follow existing code style
- Reference related issues

## 📋 Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:coverage # Generate coverage report
```

## 🔐 Security

- All wallet transactions are secured with blockchain encryption
- User authentication via JWT tokens
- Secure password hashing
- HTTPS-only in production
- Regular security audits

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React and Vite teams
- Web3 community
- All our contributors
- Open source projects that made this possible

## 📞 Support

- **Documentation**: [docs.kynda.com](https://docs.kynda.com)
- **Email**: support@kynda.com
- **Discord**: [Join our community](https://discord.gg/kynda)
- **Twitter**: [@KyndaPlatform](https://twitter.com/KyndaPlatform)

## 🗺️ Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Advanced AI tutor recommendations
- [ ] Group learning sessions
- [ ] NFT certificates for completed courses
- [ ] Multi-chain wallet support
- [ ] Expanded payment options
- [ ] Offline mode for course content

---

<div align="center">
  Made with ❤️ by the Kynda Team
  
  [Website](https://kynda.com) • [Documentation](https://docs.kynda.com) • [Blog](https://blog.kynda.com)
</div>