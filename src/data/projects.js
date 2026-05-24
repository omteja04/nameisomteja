import project1 from "../assets/UrlShortener.png";
import project2 from "../assets/sushi-shinobi.png";
import project3 from "../assets/artzen.png";
import project4 from "../assets/safesurf.png";
import project5 from "../assets/alumniconnect.png";

export const projectsData = [
    {
        img: project4,
        title: "SafeSurf",
        caption: "Asynchronous Phishing Detection & Ensemble Learning",
        description: [
            "Architected a high-throughput phishing detection API using FastAPI, integrating XGBoost and NLP ensemble models with real-time domain intelligence (WHOIS, DNS, ASN) to extract 111 structural features.",
            "Containerized the microservice backend using Docker and Gunicorn, establishing isolated environments and ensuring scalable, low-latency request handling."
        ],
        services: "FastAPI • Python • Docker • XGBoost • Scikit-Learn",
        liveDemo: "",
        repo: "https://github.com/Vishwesh2026/Optimized_Phishing_website_detector",
        overlayColor: "black",
        featured: true,
    },
    {
        img: project3,
        title: "Artzen",
        caption: "Text-to-Image SaaS App",
        description: [
            "Engineered a robust Node.js/Express backend for an AI platform, utilizing MongoDB for data persistence and implementing rate-limiting to protect core prompt-generation endpoints from abuse.",
            "Integrated Razorpay webhooks for secure, automated subscription lifecycle management, alongside JWT-based robust session handling and email-based notifications."
        ],
        services: "React.js • Tailwind CSS • Node.js • MongoDB",
        liveDemo: "https://artzen.vercel.app/",
        repo: "https://github.com/omteja04/artzen",
        overlayColor: "black",
        featured: true,
    },
    {
        img: project1,
        title: "Levi.ly",
        caption: "Serverless URL Shortener With AWS Lambda",
        description: [
            "Designed a highly available serverless URL shortener using AWS Lambda and DynamoDB, leveraging cryptographic hashes for collision-resistant 6-character short-code generation.",
            "Configured API Gateway to handle HTTP redirection (302) at scale, ensuring low-latency query resolution via optimized partition key lookups in DynamoDB."
        ],
        services:
            "AWS Services — AWS Lambda with Node.js • DynamoDB • API Gateway",
        liveDemo: "https://omteja04.github.io/levi",
        repo: "https://github.com/omteja04/levi",
        overlayColor: "white",
        featured: true,
    },
    {
        img: project2,
        title: "Sushi Shinobi",
        caption: "Frontend Landing Page of a Restaurant",
        description: [
            "Designed a comprehensive and user-friendly restaurant landing page, optimized for responsiveness and tested across multiple devices to ensure consistent and smooth performance."
        ],
        services: "HTML • CSS • JavaScript — AOS (Animate On Scroll) • Vercel",
        liveDemo: "https://sushi-shinobi.vercel.app/",
        repo: "https://github.com/omteja04/sushi-shinobi",
        overlayColor: "black",
        featured: false,
    },
    {
        img: project5,
        title: "Alumni Connect",
        caption: "Smart Job Referral System",
        description: [
            "Architected a serverless integration connecting ServiceNow workflows with a React-based frontend, enabling automated job referral tracking, real-time status updates, and seamless data flow across systems.",
            "Implemented secure identity management and role-based access control using AWS Cognito for diverse user roles."
        ],
        services: "React.js • Node.js • AWS • ServiceNow",
        liveDemo: "https://omteja04.github.io/alumniconnect/",
        repo: "https://github.com/omteja04/alumniconnect",
        overlayColor: "black",
        featured: true,
    },
    {
        title: "Subscription Tracker API",
        caption: "Production-style backend API",
        description: [
            "Engineered a production-style backend API for subscription management, featuring robust authentication flows, secure middleware, and optimized MongoDB schema design.",
            "Integrated Arcjet for enhanced API security and rate-limiting, alongside Upstash workflows to automate background cron jobs and email reminders."
        ],
        services: "Node.js • Express • MongoDB • JWT • Arcjet • Upstash",
        liveDemo: "",
        repo: "https://github.com/omteja04/subscription-tracker",
        featured: false,
    },
];
