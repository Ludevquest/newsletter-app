import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"

export function useSendMail(){
    const { mutate, isSuccess, isError }  = useMutation({
        mutationFn: (data: { email: string }) => {
          return axios.post('https://nvpz7ma67tamjlpilmdcjvewii0ejein.lambda-url.sa-east-1.on.aws/', data)
        },
        onSuccess: () => {
            toast("Assinatura Confirmada! 🚀" ,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
              })
            }
    })

    return {
        isSuccess,
        mutate,
        isError
    }
}