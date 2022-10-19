import { GetServerSidePropsContext, NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'

type Provider = {
  name: string
  id: string
}

type Props = {
  providers: Provider[]
}

const SignIn: NextPage<Props> = ({ providers }) => {
  return (
    <div>
      <h1>Sign In page</h1>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default SignIn
