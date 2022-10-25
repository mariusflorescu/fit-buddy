import { GetServerSidePropsContext, NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import Head from 'next/head'

type Provider = {
  name: string
  id: string
}

type Props = {
  providers: Provider[]
}

const SignIn: NextPage<Props> = ({ providers }) => {
  return (
    <>
      <Head>
        <title>FitBuddy - Sign In</title>
      </Head>
      <div className="flex h-full w-full flex-col items-center justify-center px-8">
        <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-white p-8 shadow">
          <h1 className="text-lg font-bold">FitBuddy</h1>
          <h2 className="text-2xl font-semibold">Welcome!</h2>
          <span className="h-[1px] w-full bg-gray-100" />
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <button
                  className="bg-gray-900 font-medium text-white"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: `${window.location.origin}/app/overview`
                    })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
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
