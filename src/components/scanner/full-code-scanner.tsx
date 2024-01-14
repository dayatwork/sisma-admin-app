import { Html5QrcodeScanner } from "html5-qrcode";
import { useRef } from "react";
import { useEffectOnce } from "usehooks-ts";

interface FullCodeScannerProps {
  onResult: (result: string) => void;
  onError: (error: string) => void;
}

export const FullCodeScanner: React.FC<FullCodeScannerProps> = ({
  onResult = () => {},
  onError = () => {},
}) => {
  const scannerRef = useRef(null);

  useEffectOnce(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 2,
        rememberLastUsedCamera: true,
      },
      undefined
    );

    scanner.render(
      (result) => {
        scanner.clear();
        onResult(result);
      },
      (error) => {
        onError(error);
      }
    );
  });

  return <div id="reader" className="mt-4" ref={scannerRef}></div>;
};
