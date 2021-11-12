module.exports = {
  images: {
    domains: ["randomuser.me", "reqres.in", "lh3.googleusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
};
