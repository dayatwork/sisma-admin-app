import { Html5QrcodeScanner } from "html5-qrcode";
import { useRef, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
// import { CodeScanner } from "@/components/code-scanner";

export default function Dashboard() {
  const [scanResult, setScanResult] = useState("");
  const [scanError, setScanError] = useState("");
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
        setScanResult(result);
      },
      (error) => {
        setScanError(error);
      }
    );
  });

  return (
    <div className="px-6 py-3">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div id="reader" className="mt-4" ref={scannerRef}></div>
      <div className="mt-4 p-5 rounded-xl border flex flex-col gap-4">
        <dl className="text-xl flex gap-2">
          <dt className="w-[80px]">Result</dt>
          <span>:</span>
          <dd className="font-semibold">{scanResult}</dd>
        </dl>
        <dl className="text-xl flex gap-2">
          <dt className="w-[80px]">Error</dt>
          <span>:</span>
          <dd className="font-semibold text-red-600">{scanError}</dd>
        </dl>
      </div>
    </div>
  );
}
// export default function Dashboard() {
//   const [result, setResult] = useState("");
//   const [, setError] = useState("");

//   return (
//     <div className="px-6 py-3">
//       <h1 className="text-2xl font-semibold">Dashboard</h1>
//       <CodeScanner
//         onResult={(v) => setResult(v)}
//         onError={(e) => setError(e)}
//       />
//       <p>Result: {result}</p>
//     </div>
//   );
// }
