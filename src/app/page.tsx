import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FerrisWheel } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="flex justify-between items-center gap-10 mx-72 my-56 tracking-wide">
      <div className="flex flex-col items-start justify-start w-full text-white">
        <h1 className="text-6xl  mb-10">MuggleLink</h1>
        <div className="flex justify-center items-center gap-4">
          <h3 className="text-3xl">
            crypto on 
          </h3>
          <AnimatedText/>
        </div>
        <ul className="list-disc list-inside ml-10 my-8 text-xl font-semibold">
          <li>Universal Social Platform Integration</li>
          <li>No-code, start in minutes</li>
          <li>Web3 Subscription & Escrow</li>
          <li>1% fee, settle immediately</li>
        </ul>

        <div className="flex flex-col gap-4 items-center justify-center ml-10 mt-10 text-xl font-semibold">
          <button className="bg-white text-blue-600 border rounded-full py-2 px-20">
            Start for Free
          </button>
          <h1 className="">Accept Crypto in 1 min!</h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Card className="w-[400px] rounded-3xl">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <h1>AI Future Inc.</h1>
              <FerrisWheel />
            </CardTitle>
            <CardDescription>
              <h1 className="text-xl font-semibold text-blue-600 mb-4">
                USDT $160
              </h1>
              <div className="flex justify-between text-gray-600 my-2">
                <span>Monthly Subscription Fee</span>
                <span>$160</span>
              </div>
              <p className="border-b border-gray-400"></p>
              <div className="flex justify-between text-gray-600 my-2">
                <span>Total</span>
                <span>$160</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Card className="p-0 bg-yellow-800/10 rounded-lg">
              <CardHeader className="p-4">
                <CardTitle className="flex justify-between">
                  <h1 className=" text-base tracking-wide font-medium text-gray-600">
                    Pay with crypto
                  </h1>
                  <div className="flex gap-1">
                    <div className="h-6 w-auto">
                      <Image
                        src={"/tron.png"}
                        width={24}
                        height={24}
                        alt="tron"
                        objectFit="contain"
                      />
                    </div>
                    <div className="h-6 w-auto">
                      <Image
                        src={"/eth.png"}
                        width={24}
                        height={24}
                        alt="eth"
                        objectFit="contain"
                      />
                    </div>
                    <div className="h-6 w-auto">
                      <Image
                        src={"/USDT.png"}
                        width={24}
                        height={24}
                        alt="usdt"
                        objectFit="contain"
                      />
                    </div>
                    <div className="h-6 w-auto">
                      <Image
                        src={"/usdc.png"}
                        width={24}
                        height={24}
                        alt="usdc"
                        objectFit="contain"
                      />
                    </div>
                 
                  </div>
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" autoComplete="off" placeholder="Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" className="outline-none" autoComplete="off" placeholder="something@gmail.com" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button className="py-2 px-20 bg-blue-600 rounded-full font-bold text-white hover:bg-blue-500">Pay</button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
