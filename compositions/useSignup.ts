import { Auth } from 'aws-amplify'

interface Form {
  username: string
  password: string
  email: string
  img: string
}

export const useSignup = async (form: Form): Promise<void> => {
  try {
    await Auth.signUp({
      username: form.username,
      password: form.password,
      attributes: {
        email: form.email,
        picture: form.img,
        nickname: form.username
      }
    })
  } catch (error) {
    console.log(error)
  }
}
