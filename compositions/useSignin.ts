import { Auth } from 'aws-amplify'

export const useSignin = async (username: string, password: string): Promise<void> => {
  await Auth.signIn(username, password)
  await Auth.currentAuthenticatedUser()
}
