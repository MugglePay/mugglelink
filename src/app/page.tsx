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
    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-10 mx-4 md:mx-auto w-[95%] md:w-[80%] my-32 sm:my-56 tracking-wide">
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start w-full text-white">
      <h1 className="text-4xl md:text-6xl mb-10 font-bold">MuggleLink</h1>
        <div className="flex justify-center items-center gap-2 flex-row">
          <h3 className="text-xl md:text-3xl">
            Accept crypto on 
          </h3>
          <AnimatedText/>
        </div>
        <ul className="list-disc list-inside ml-4 md:ml-10 my-8 text-base md:text-xl">
            <li> Accept crypto on telegram and universal Social Platform.</li>
            <li>Exchange Everything with an escrow payment protocol.</li>
            <li>The future of social marketplace</li>
        </ul>
        <div className="flex items-center justify-center"> {/* Parent container */}
        <a className="text-xl md:text-3xl" style={{ fontSize: "1.20rem", fontWeight: "normal" }}>
          Stay tuned and be part of our journey from the very beginning!
        </a>
      </div>
        <div className="flex flex-col gap-4 items-center justify-center ml-2 md:ml-10 mt-s4 md:mt-10 text-base md:text-xl font-semibold">
        <a href="https://forms.gle/S27vjTi9G2FM4KEa6" target="_blank" rel="noopener noreferrer" className="py-2 px-6 md:px-20 bg-white rounded-full font-semibold md:font-bold text-[#8c52ff] hover:bg-[#8c52ff] hover:text-white">
        Join the waiting list!
        </a>
          
          <h1 className="">Accept Crypto in 1 min!</h1>
          
    </div>
    {/* Powered by MuggleLink and Telegram icon */}
    <div className="flex items-center justify-center mt-8">
          <h3 className="text-base md:text-xl font-semibold">Powered by MuggleLink!</h3>
          <a href="https://t.me/MuggleLink1" target="_blank" rel="noopener noreferrer">
            <Image
              src="./telegram.png"
              width={32}
              height={32}
              alt="Telegram"
            />
          </a>
        </div>



      </div>
      <div className="flex w-full mt-6 px-4 sm:mt-0 sm:px-0">
        <Card className="w-full md:w-[400px] rounded-3xl">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <h1>AI Future Inc.</h1>
              <FerrisWheel />
            </CardTitle>
            <CardDescription>
              <h1 className="text-xl font-semibold text-[#8c52ff] mb-4">
                $160
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
            <Card className="p-0 bg-[#f8f6f7] rounded-lg">
              <CardHeader className="p-4">
                <CardTitle className="flex justify-between">
                  <h1 className=" text-sm sm-text-base tracking-wide font-medium text-gray-600">
                    Pay with crypto
                  </h1>
                  <div className="flex gap-1">
                  <div className="h-6 w-auto">
                      <Image
                        src={"./Arbitrum.png"}
                        width={24}
                        height={24}
                        alt="arbitrum"
                        objectFit="contain"
                      />
                    </div>
                    <div className="h-6 w-auto">
                      <Image
                        src={"./eth.png"}
                        width={24}
                        height={24}
                        alt="eth"
                        objectFit="contain"
                      />
                    </div>
                    <div className="h-6 w-auto">
                      <Image
                        src={"./tron.png"}
                        width={24}
                        height={24}
                        alt="tron"
                        objectFit="contain"
                      />
                    </div>
                  
                    <div className="h-6 w-auto">
                      <Image
                        src={"./USDT.png"}
                        width={24}
                        height={24}
                        alt="usdt"
                        objectFit="contain"
                      />
                    </div>
                    <div className="h-6 w-auto">
                      <Image
                        src={"./usdc.png"}
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
                    <div className="py-4 px-10 border bg-white rounded"></div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">E-mail</Label>
                      <div className="py-4 px-10 border bg-white rounded"></div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </CardContent>
          <CardFooter className="flex justify-center">
          <button className="py-2 px-20 bg-[#8c52ff] rounded-full font-bold text-white hover:bg-[#7846d6]">Pay</button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
