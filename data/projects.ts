export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];


export const plans = [
    {
        id: 1, startDate: "2024-12-01",
        endDate: "2025-12-01",
        userId: 12345,
        plan: "Free",
        price: 0,
        features: ["Email marketing", "Forms", "Live chat", "Ad management", "Mobile Optimization"]
    },
    {
        id: 2, startDate: "2024-12-01",
        endDate: "2025-12-01", userId: 12345,
        plan: "Starter",
        price: 20,
        features: ["Everything in Free", "Multiple currencies", "Email health insights", "Calls-to-action", "No Crm branding"]
    },
    {
        id: 3, startDate: "2024-12-01",
        endDate: "2025-12-01",
        userId: 12345,
        plan: "Professional",
        price: 890,
        features: ["Everything in Starter", "Campaign management", "SEO", "Predictive lead scoring", "Custom reporting"]
    },
    {
        id: 4, startDate: "2024-12-01",
        endDate: "2025-12-01",
        userId: 12345,
        plan: "Enterprise",
        price: 3600,
        features: ["Everything in Professional", "Adaptive testing", "Multuple revenue attribution", "Customer journey analytics"]
    },
]