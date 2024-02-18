import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator"

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
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">1</span>
              </div>
            </ResizablePanel>

            <ResizableHandle disabled />

            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">2</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle disabled />

        <ResizablePanel defaultSize={90}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={33.33}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">1</span>
              </div>
            </ResizablePanel>

            <ResizableHandle disabled />

            <ResizablePanel defaultSize={33.33}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">2</span>
              </div>
            </ResizablePanel>
            <ResizableHandle disabled />

            <ResizablePanel defaultSize={33.34}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">3</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}
