const pool = require("../db");

// CREATE ISSUE
exports.createIssue = async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const image = req.file ? req.file.filename : null;

    await pool.query(
      "INSERT INTO issues (title, description, location, image) VALUES ($1,$2,$3,$4)",
      [title, description, location, image]
    );

    res.status(201).json({ message: "Issue created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ISSUES
exports.getIssues = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM issues ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
