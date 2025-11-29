"use client"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { useCallback, useState } from "react";

const LoginLeft = () => {
    const hnadleGoogleLogin = useCallback((cred: CredentialResponse) => {

    }, [])
    return (
        <div className=' p-5 w-90  border-3 border-gray-500 ml-5 mt-5 rounded-3xl'>
            <h1 className='text-2xl mb-2'>New to X? </h1>
            <div className="h-[60px] w-[200px]"><GoogleLogin onSuccess={(cread) => hnadleGoogleLogin(cread.credential)} /></div>
        </div>
    )
}

export default LoginLeft
