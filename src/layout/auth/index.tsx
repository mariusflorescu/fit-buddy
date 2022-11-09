import type { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8">
      <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-white p-8 shadow">
        <h1 className="text-lg font-bold">FitBuddy</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
