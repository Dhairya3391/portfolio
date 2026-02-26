export const navLinks = [
    {
        title: 'about',
        url: '/',
    },
    {
        title: 'projects',
        url: '/projects',
    },
];

export const projects = [
    {
        name: 'Aarambh',
        description:
            'Full-stack Learning Management System built on Clean Architecture. 40+ RESTful API endpoints with JWT auth, RBAC, global exception handling, and standardized responses. EF Core migrations, SQL Server schema, and a responsive Next.js dashboard.',
        github: 'https://github.com/Dhairya3391/Aarambh',
        website: 'https://aarambh.noobokay.me',
        tags: ['.NET 8', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Next.js', 'React', 'TypeScript'],
    },
    {
        name: 'continuum',
        description:
            'Distributed real-time life-simulation where personality-driven particles interact in a shared digital universe. Six .NET 10 microservices powering physics ticks, RabbitMQ events, SignalR live updates, and a React frontend.',
        github: 'https://github.com/Dhairya3391/continuum',
        website: '',
        tags: ['.NET 10', 'C#', 'Microservices', 'RabbitMQ', 'Redis', 'SignalR', 'Hangfire'],
    },
    {
        name: 'labforge',
        description:
            'Browser-based coding environment for academic lab assignments—full IDE with syntax highlighting, automated code evaluation via Judge0, canvas visualization tools, plagiarism detection, and real-time collaboration. Designed for 200+ concurrent users.',
        github: 'https://github.com/Dhairya3391/labforge',
        website: '',
        tags: ['Next.js', 'TypeScript', 'Judge0', 'PostgreSQL', 'Redis', 'Socket.io', 'Academic'],
    },
    {
        name: 'MatterMind',
        description: 'Physics sandbox for your inner mad scientist. Toss, bounce, and break stuff—cat style.',
        github: 'https://github.com/Dhairya3391/MatterMind',
        website: 'https://mattermind.noobokay.me',
        tags: ['SvelteKit', 'Matter.js', 'Physics', 'Sandbox'],
    },
    {
        name: 'chat-app-next',
        description:
            'Real-time chat app with admin powers, bans, and a sprinkle of nya~ magic. Built with Next.js & Socket.IO.',
        github: 'https://github.com/Dhairya3391/chat-app-next',
        website: '',
        tags: ['Next.js', 'Socket.IO', 'React', 'Fun'],
    },
    {
        name: 'lumen',
        description:
            'Frontend for a cardiovascular disease detector—connects to an ML inference backend, feeds patient data through a form flow, and visualizes risk predictions. the backend does the heavy lifting; this just makes it look nice.',
        github: 'https://github.com/Dhairya3391/frontend2-lumen',
        website: 'https://lumen.noobokay.me',
        tags: ['TypeScript', 'Next.js', 'Healthcare'],
    },
    {
        name: 'stock-pattern-scanner',
        description:
            'CLI tool that scans stock charts for candlestick patterns and trend signals using classical algorithms and lightweight ML models. runs quietly, outputs fast—like a cat spotting movement before you do.',
        github: 'https://github.com/Dhairya3391/stock-pattern-scanner',
        website: 'https://stock-pattern-detector.vercel.app',
        tags: ['Python', 'ML', 'Finance', 'CLI'],
    },
    {
        name: 'wallyzer',
        description:
            'self-hosted wallpaper manager with a backend that scores and organizes your collection. because even a cat deserves a curated desktop. nya~',
        github: 'https://github.com/Dhairya3391/wallyzer',
        website: '',
        tags: ['TypeScript', 'Next.js', 'Wallpapers'],
    },
    {
        name: 'QuizApplication',
        description: 'Quiz master for the curious cats. Create, manage, and ace quizzes with style.',
        github: 'https://github.com/Dhairya3391/QuizApplication',
        website: '',
        tags: ['ASP.NET', 'Quiz', 'WebApp'],
    },
];

export const skills = [
    // languages
    { name: 'TypeScript', link: 'https://github.com/Dhairya3391/Aarambh', icon: 'simple-icons:typescript' },
    { name: 'C#', link: 'https://github.com/Dhairya3391/continuum', icon: 'simple-icons:csharp' },
    {
        name: 'JavaScript',
        link: 'https://github.com/making-something/ArtIcon',
        icon: 'simple-icons:javascript',
    },
    { name: 'Python', link: 'https://github.com/Dhairya3391/stock-pattern-scanner', icon: 'simple-icons:python' },
    { name: 'Java', link: 'https://www.oracle.com/java/', icon: 'simple-icons:openjdk' },
    { name: 'Go', link: 'https://github.com/Dhairya3391/Sophos-Auto-Login', icon: 'simple-icons:go' },
    { name: 'Shell/Bash', link: 'https://github.com/pystardust/ani-cli', icon: 'simple-icons:gnubash' },
    // backend
    { name: 'ASP.NET', link: 'https://github.com/Dhairya3391/Aarambh', icon: 'simple-icons:dotnet' },
    { name: 'NestJS', link: 'https://nestjs.com/', icon: 'simple-icons:nestjs' },
    { name: 'Express', link: 'https://expressjs.com/', icon: 'simple-icons:express' },
    // frontend
    { name: 'Next.js', link: 'https://github.com/Dhairya3391/labforge', icon: 'simple-icons:nextdotjs' },
    { name: 'HTML/CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'simple-icons:html5' },
    // databases
    { name: 'SQL Server', link: 'https://github.com/Dhairya3391/Aarambh', icon: 'simple-icons:microsoftsqlserver' },
    { name: 'PostgreSQL', link: 'https://github.com/Dhairya3391/labforge', icon: 'simple-icons:postgresql' },
    { name: 'MongoDB', link: 'https://www.mongodb.com/', icon: 'simple-icons:mongodb' },
    { name: 'Redis', link: 'https://github.com/Dhairya3391/continuum', icon: 'simple-icons:redis' },
    // ml
    { name: 'PyTorch', link: 'https://pytorch.org/', icon: 'simple-icons:pytorch' },
    { name: 'TensorFlow', link: 'https://www.tensorflow.org/', icon: 'simple-icons:tensorflow' },
    { name: 'scikit-learn', link: 'https://github.com/Dhairya3391/stock-pattern-scanner', icon: 'simple-icons:scikitlearn' },
    // tools
    { name: 'Docker', link: 'https://www.docker.com/', icon: 'simple-icons:docker' },
    { name: 'Git', link: 'https://github.com/Dhairya3391', icon: 'simple-icons:git' },
    { name: 'Linux', link: 'https://kernel.org/', icon: 'simple-icons:linux' },
];

export const experiences = {
    'alter ego': [
        {
            company: 'Dhairya',
            role: 'backend dev by trade, curious tinkerer by nature. if there\'s a system to design or an API to structure, i\'m probably already thinking about it.',
            img: 'mylogo.jpg',
        },
    ],
    heartwork: [
        {
            company: 'Open Source',
            role: 'contributing tools and scratching itches in public. if it solved my problem, it might solve yours too. nya~',
            img: 'github.svg',
        },
    ],
    'professional hustles': [
        {
            company: 'Multiicon',
            role: 'Software Engineer Intern — REST APIs, JWT auth, authorization middleware. joined after winning their hackathon. nya~',
            year: 'Sep 2025 – Jan 2026',
            img: 'multiicon.svg',
        },
    ],
    'student diaries': [
        {
            company: 'Darshan University',
            role: 'B.Tech CSE, 6th Sem — CGPA 8.11/10',
            year: '2024 – 26',
            img: 'college.svg',
        },
        {
            company: 'Kalyan Polytechnic',
            role: 'Diploma in Computer Science — First Class with Distinction',
            year: '2023',
            img: 'gtu.png',
        },
    ],
};
