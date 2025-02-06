const { getNumberProperties, getFunFact } = require("../services/numberService");

async function classifyNumber(req, res) {
  try {
    const number = req.params.number ? parseInt(req.params.number) : 371;

    if (isNaN(number) || !Number.isInteger(number)) {
      return res.status(400).json({
        number: req.query.number,
        error: true,
      });
    }

    const properties = getNumberProperties(number);
    const funFact = await getFunFact(number);

    res.json({
      number,
      ...properties,
      fun_fact: funFact,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      number: req.query.number,
      error: true,
    });
  }
}

module.exports = { classifyNumber };
