import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";

import travelImage from "@/assets/images/travel.jpg";
import gadgetImage from "@/assets/images/gadgets.jpg";
import shoppingImage from "@/assets/images/shopping.jpg";
import jwelleryImage from "@/assets/images/jwellery.jpg";
import otherImage from "@/assets/images/other.jpg";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="flex w-full justify-center items-center p-3">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-lg border min-h-[400px]"
      >
        <ResizablePanel defaultSize={90}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <Link href={"/explore/travel"}>
                <div className="flex h-full items-center justify-center relative">
                  <Image src={travelImage} alt="" fill className="z-[1]" />
                  <div
                    style={{
                      background:
                        "radial-gradient(rgba(0,0,0,0.3),transparent)",
                    }}
                    className="w-full h-full relative z-[2] grid place-items-center"
                  >
                    <p className="text-xl text-gray-100 font-medium">Travel</p>
                  </div>
                </div>
              </Link>
            </ResizablePanel>

            <ResizableHandle disabled />

            <ResizablePanel defaultSize={25}>
              <Link href={"/explore/travel"}>
                <div className="flex h-full items-center justify-center relative">
                  <Image src={gadgetImage} alt="" fill className="z-[1]" />
                  <div
                    style={{
                      background:
                        "radial-gradient(rgba(0,0,0,0.3),transparent)",
                    }}
                    className="w-full h-full relative z-[2] grid place-items-center"
                  >
                    <p className="text-xl text-gray-100 font-medium">Gadgets</p>
                  </div>
                </div>
              </Link>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle disabled />

        <ResizablePanel defaultSize={90}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={33.33}>
              <Link href={"/explore/travel"}>
                <div className="flex h-full items-center justify-center relative">
                  <Image src={shoppingImage} alt="" fill className="z-[1]" />
                  <div
                    style={{
                      background:
                        "radial-gradient(rgba(0,0,0,0.3),transparent)",
                    }}
                    className="w-full h-full relative z-[2] grid place-items-center"
                  >
                    <p className="text-xl text-gray-100 font-medium">
                      Shopping
                    </p>
                  </div>
                </div>
              </Link>
            </ResizablePanel>

            <ResizableHandle disabled />

            <ResizablePanel defaultSize={33.33}>
              <Link href={"/explore/travel"}>
                <div className="flex h-full items-center justify-center relative">
                  <Image src={jwelleryImage} alt="" fill className="z-[1]" />
                  <div
                    style={{
                      background:
                        "radial-gradient(rgba(0,0,0,0.3),transparent)",
                    }}
                    className="w-full h-full relative z-[2] grid place-items-center"
                  >
                    <p className="text-xl text-gray-100 font-medium">
                      Jwellery
                    </p>
                  </div>
                </div>
              </Link>
            </ResizablePanel>
            <ResizableHandle disabled />

            <ResizablePanel defaultSize={33.34}>
              <Link href={"/explore/travel"}>
                <div className="flex h-full items-center justify-center relative">
                  <Image src={otherImage} alt="" fill className="z-[1]" />
                  <div
                    style={{
                      background:
                        "radial-gradient(rgba(0,0,0,0.3),transparent)",
                    }}
                    className="w-full h-full relative z-[2] grid place-items-center"
                  >
                    <p className="text-xl text-gray-100 font-medium">Others</p>
                  </div>
                </div>
              </Link>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}
