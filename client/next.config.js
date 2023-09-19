module.exports = {
  async rewrites() {
    return [
      {
        source: "/auth/:call*",
        destination: "http://localhost:5000/auth/:call*",
      },
    ];
  }
};
