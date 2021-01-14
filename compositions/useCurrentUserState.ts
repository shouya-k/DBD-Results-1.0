import { Auth } from 'aws-amplify'

export const useCurrentUserState = (context: any) => {
  const router = context.root.$router

  const currentUserState = async (): Promise<void> => {
    try {
      await Auth.currentAuthenticatedUser()
    } catch (error) {
      console.log(error)
      router.push('/signin')
    }
  }

  return { router, currentUserState }
}
