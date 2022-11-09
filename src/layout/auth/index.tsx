import type { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-full w-full items-center justify-center overflow-auto p-8">
      <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-white p-4 shadow">
        <h1 className="text-lg font-bold">FitBuddy</h1>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
