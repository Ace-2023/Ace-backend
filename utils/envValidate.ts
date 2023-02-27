import Joi from "joi";

const envSchema = Joi.object({
  PORT: Joi.number().required(),
});
const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default envVars;
