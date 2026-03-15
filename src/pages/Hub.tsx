import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Hub() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/hub/UploadPage");
  }, []);
  return null;
}
