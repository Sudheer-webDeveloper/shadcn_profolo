"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="default" onClick={() => alert("done")}>Click me</Button>
    </div>
  );
}
