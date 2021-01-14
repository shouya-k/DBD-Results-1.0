import { Auth } from 'aws-amplify'

export const useConfirmSignUp = async (
  name: string,
  password: string,
  confirmCode: string
): Promise<void> => {
  try {
    await Auth.confirmSignUp(name, confirmCode)
    const user = await Auth.signIn(name, password)
    // await useCreateUser(user)
    console.log(user)
  } catch (error) {
    console.log('error confirming sign up', error)
  }
}
