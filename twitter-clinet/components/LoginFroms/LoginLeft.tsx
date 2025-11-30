"use client"
import { graphqlClient } from "@/ApiServer/api";
import { VerifedUserGoogleTokenQuery } from "@/graphql/Query/user";
import { useCurrentUsert } from "@/hooks/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import toast from "react-hot-toast";

const LoginLeft = () => {
    const querryClient =  useQueryClient();
    const user = useCurrentUsert();

    const hnadleGoogleLogin = useCallback(async (cred: CredentialResponse) => {
            const googleToken = cred.credential
            if (!googleToken) return toast.error("Google token not found")
            const { verifedGoogleToken } = await graphqlClient.request(VerifedUserGoogleTokenQuery, { token: googleToken, })
            console.log("response",verifedGoogleToken)
            if (!verifedGoogleToken) {
                 toast.error("Token Not Found")
            }else{
                 window.localStorage.setItem("__twitter_token", verifedGoogleToken) 
                await querryClient.invalidateQueries(["current-user"])
                window.location.reload()
                toast.success("verified Success")
            }
        
    }, [querryClient])
    return !user.data?.getCurrentUser&&(
        <div className=' p-5 w-90  border-3 border-gray-500 ml-5 mt-5 rounded-3xl'>
            <h1 className='text-2xl mb-2'>New to X? </h1>
            <div className="h-[60px] w-[200px]"><GoogleLogin onSuccess={(cread) => hnadleGoogleLogin(cread)} /></div>
        </div>
    );
}

export default LoginLeft
