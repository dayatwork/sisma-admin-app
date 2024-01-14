import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";

interface CodeScannerProps {
  onResult: (result: string) => void;
  onError: (error: string) => void;
}

export const CodeScanner: React.FC<CodeScannerProps> = ({
  onResult = () => {},
  onError = () => {},
}) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const memoizedResultHandler = useRef(onResult);
  const memoizedErrorHandler = useRef(onError);

  useEffect(() => {
    memoizedResultHandler.current = onResult;
  }, [onResult]);

  useEffect(() => {
    memoizedErrorHandler.current = onError;
  }, [onError]);

  useEffect(() => {
    if (!previewRef.current) return;
    const html5QrcodeScanner = new Html5Qrcode(previewRef.current.id);
    const didStart = html5QrcodeScanner
      .start(
        { facingMode: "environment" },
        { fps: 10 },
        (_, { result }) => {
          memoizedResultHandler.current(result.text);
        },
        (_, error) => {
          memoizedErrorHandler.current(error.errorMessage);
        }
      )
      .then(() => true);
    return () => {
      didStart
        .then(() => html5QrcodeScanner.stop())
        .catch(() => {
          console.log("Error stopping scanner");
        });
    };
  }, [previewRef, memoizedResultHandler, memoizedErrorHandler]);

  return <div id="preview" ref={previewRef} />;
};
