import { ZodError } from "zod";

const validateUser = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error during validation",
      error: error.message || "Unknown error",
    });
  }
};

export { validateUser };
