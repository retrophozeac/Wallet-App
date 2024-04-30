import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Warning } from "../components/Warning";

export function Signup(){
    return (
        <>  
            <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading lable={"Sign up"}></Heading>
                <SubHeading lable={"Enter your information to create an account"}></SubHeading>
                <InputBox lable={"First Name"} placeholder={"John"}></InputBox>
                <InputBox lable={"Last Name"} placeholder={"Doe"}></InputBox>
                <InputBox lable={"Email"} placeholder={"gaurav@gmail.com"}></InputBox>
                <InputBox lable={"Password"} placeholder={"123456"}></InputBox>
                <div className="pt-4">
                <Button label={"Sign up"}></Button>
                </div>
                <Warning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></Warning>
            </div>
            </div>
            </div>
        </>
    )
}