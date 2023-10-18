import * as yup from 'yup';

const loginFrom = {
  validationSchema:  yup.object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    }),
  initialValues: {
    email: 'email@email.ru',
    password: '123566',
  },
}

export default loginFrom;
