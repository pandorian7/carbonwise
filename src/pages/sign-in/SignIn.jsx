import React from 'react'

import { LoginForm } from '@/components/login-form'
import { GalleryVerticalEnd } from "lucide-react"
import earth from './earth.png'
import Logo from '@/components/Logo'

function SignIn() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-black font-['Plus_Jakarta_Sans']">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div> */}
        <Logo/>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={earth}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:grayscale"
        />
      </div>
    </div>
  )
}

export default SignIn