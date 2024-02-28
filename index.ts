#! usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const answer=await inquirer.prompt([
    {
        type:"number",
        name:"userinput",
        message:"Write your numbers in seconds",
        validate:(input)=>{
            if (isNaN(input)){
                return "Please enter valid number"
            }else if(input>60){
                return"Seconds must be in 60"
            }else{
                return true;
            }

        }
    },
]);
 let input=answer.userinput;
  function starttime(val:number){
    const inttime=new Date().setSeconds(new Date().getSeconds()+val);
    const intervaltime=new Date(inttime);
    setInterval(()=>{
        const currenttime=new Date();
        const timediff=differenceInSeconds(intervaltime,currenttime);
        if (timediff <=0){
            console.log("Timer has Expired");
            process.exit();
        }
        const min=Math.floor((timediff%(3600 * 24))/3600);
        const sec=Math.floor(timediff%60);
        console.log(`${min.toString().padStart(2,"0")}: ${sec.toString().padStart(2,"0")}`);

    },1000);
  }
starttime(input);