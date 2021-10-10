module.exports = {
  images: {
    domains: ["randomuser.me"],
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
