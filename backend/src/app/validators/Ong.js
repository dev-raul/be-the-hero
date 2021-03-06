import * as Yup from "yup";

export const OngStore = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      whatsapp: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string()
        .min(2)
        .max(2)
        .required()
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Validator fails!", error: err.inner });
  }
};
