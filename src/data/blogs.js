// Priority Mapping for Tags (Higher number = Higher Priority)
export const TAG_PRIORITY = {
    "DATABASES": 100,
    "SYSTEM DESIGN": 90,
    "AUTH": 80,
    "BACKEND": 70,
    "DEVOPS": 60,
    "DEFAULT": 10
};

/**
 * Normalizes tags and returns the primary tag based on priority rules.
 * @param {string[]} tags - The list of tags for an article.
 * @returns {object} { primary, remainingCount }
 */
export const getTagDisplayData = (tags) => {
    if (!tags || tags.length === 0) return { primary: null, remainingCount: 0 };

    // Normalize (Uppercase) and Remove Duplicates
    const normalizedTags = [...new Set(tags.map(t => t.toUpperCase()))];

    // Sort by Priority (Highest First)
    const sortedTags = normalizedTags.sort((a, b) => {
        const priorityA = TAG_PRIORITY[a] || TAG_PRIORITY.DEFAULT;
        const priorityB = TAG_PRIORITY[b] || TAG_PRIORITY.DEFAULT;
        return priorityB - priorityA;
    });

    return {
        primary: sortedTags[0],
        remainingCount: sortedTags.length - 1
    };
};

export const allPosts = [
    {
        id: "distributed-auth",
        title: "Refresh Tokens, Load Balancers, and Distributed Auth — What Actually Happens?",
        description: "Why your authentication doesn’t break when requests hit different servers, and how real systems manage state at scale.",
        date: "April 6, 2026",
        readTime: "7 min read",
        link: "https://omteja04.hashnode.dev/how-refresh-tokens-work-with-load-balancers",
        tags: ["AUTH", "BACKEND", "SYSTEM DESIGN"],
        icon: "mdi:shield-lock",
    },
    {
        id: "sql-vs-nosql",
        title: "SQL vs NoSQL: When to Use Each in Real-World Applications",
        description: "A practical guide to understanding the differences, trade-offs, and real-world use cases of SQL and NoSQL databases.",
        date: "April 4, 2026",
        readTime: "4 min read",
        link: "https://omteja04.hashnode.dev/sql-vs-nosql-when-to-use-each",
        tags: ["DATABASES", "BACKEND", "SYSTEM DESIGN"],
        icon: "mdi:database",
    },
    // The following are currently commented out per request
    /*
    {
        id: "microservices-monolith",
        title: "Understanding Microservices vs Monoliths in 2026",
        description: "A deep dive into architecture choices, operational complexity, and when to actually use microservices.",
        date: "May 12, 2026",
        readTime: "7 min read",
        link: "#",
        tags: ["SYSTEM DESIGN", "BACKEND"],
        icon: "mdi:server-network",
    },
    {
        id: "oauth2-nodejs",
        title: "Implementing OAuth2 with Node.js and Express",
        description: "A comprehensive tutorial on securing your backend APIs using OAuth2 and JWTs.",
        date: "Feb 20, 2026",
        readTime: "6 min read",
        link: "#",
        tags: ["AUTH", "BACKEND"],
        icon: "mdi:security",
    }
    */
];
