module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  return res.status(200).json({
    name: "JASONBOT API",
    version: "1.0.0",
    description: "API de chatbot créée pour JASONBOT",
    endpoints: {
      chat: {
        method: "POST",
        url: "/api/ai",
        body: {
          message: "Bonjour"
        }
      },
      documentation: {
        method: "GET",
        url: "/api/doc"
      }
    }
  });
};