module.exports = {
  images: {
    domains: ["randomuser.me", "reqres.in"],
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
