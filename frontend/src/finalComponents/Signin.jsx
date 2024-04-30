import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Warning } from "../components/Warning";

export function Signin(){
    return (
        <>  
            <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading lable={"Sign in"}></Heading>
                <SubHeading lable={"Enter your credentials to access your account"}></SubHeading>
                <InputBox lable={"Email"} placeholder={"gaurav@gmail.com"}></InputBox>
                <InputBox lable={"Password"} placeholder={"123456"}></InputBox>
                <div className="pt-4">
                <Button label={"Sign up"}></Button>
                </div>
                <Warning label={"Don;t have an account?"} buttonText={"Sign up"} to={"/signup"}></Warning>
            </div>
            </div>
            </div>
        </>
    )
}