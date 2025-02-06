const { getNumberProperties, getFunFact } = require("../services/numberService");

async function classifyNumber(req, res) {
  try {
    let numberString = req.query.number; // Keep input as string for validation

    // Validate: Must be a whole number (integer) with optional negative sign
    if (!/^-?\d+$/.test(numberString)) {
      return res.status(400).json({
        number: "alphabet",
        error: true,
      });
    }

    let number = parseInt(numberString, 10); // Convert string to integer safely

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
