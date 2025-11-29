"use client"
import { graphqlClient } from "@/ApiServer/api";
import { VerifedUserGoogleTokenQuery } from "@/graphql/Query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { useCallback } from "react";
import toast from "react-hot-toast";

const LoginLeft = () => {
    const hnadleGoogleLogin = useCallback(async (cred: CredentialResponse) => {
        try {
            const googleToken = cred.credential
            console.log(googleToken)
            if (!googleToken) return toast.error("Google token not found")
            const { verifedGoogleToken } = await graphqlClient.request(VerifedUserGoogleTokenQuery, { token: googleToken, })
            if (verifedGoogleToken) {
                window.localStorage.setItem("__twitter_token", verifedGoogleToken)
            }
            toast.success("verified Success")
        } catch (error) { 
            toast.error("Server is Not Responed!")
        }
    }, [])
    return (
        <div className=' p-5 w-90  border-3 border-gray-500 ml-5 mt-5 rounded-3xl'>
            <h1 className='text-2xl mb-2'>New to X? </h1>
            <div className="h-[60px] w-[200px]"><GoogleLogin onSuccess={(cread) => hnadleGoogleLogin(cread)} /></div>
        </div>
    )
}

export default LoginLeft
