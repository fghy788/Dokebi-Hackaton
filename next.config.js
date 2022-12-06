/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/SMB",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/SMB.png?alt=media&token=31c9ee97-23b3-49c7-9320-2940f043a507",
            },
            {
                source: "/api/Taiyo",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/Taiyo.png?alt=media&token=15233fde-a2fe-40d8-9716-a3f124d7e6fc",
            },
            {
                source: "/api/Degod",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/Degod.png?alt=media&token=68063c26-a734-42a1-81c5-50fe012bdbae",
            },
            {
                source: "/api/Degenape",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/Degenape.png?alt=media&token=f44c94fa-cc9a-4bb3-8a4a-adf4b9933a5f",
            },
            {
                source: "/api/ComingSoon",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/SMB.avif?alt=media&token=fa722af0-91b8-4730-b289-20381dc79b1b",
            },
            {
                source: "/api/GGSG",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/GGSG.avif?alt=media&token=bcd61cb7-7962-4d99-95e9-d698b36a008e",
            },
            {
                source: "/api/FFF",
                destination:
                    "https://firebasestorage.googleapis.com/v0/b/dokebi-50281.appspot.com/o/FFF.png?alt=media&token=9648e6d4-d2d5-4bdf-9001-1b375cf31249",
            },
        ];
    },
};

module.exports = nextConfig;
