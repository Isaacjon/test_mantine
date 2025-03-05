
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/notifications/styles.css';
import "./App.css";

import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout";
import { Catalog } from "./pages/catalog";
import { Cart } from "./pages/cart";
import { Profile } from "./pages/profile";
import { Checkout } from "./pages/checkout";
import { Notifications } from "@mantine/notifications";
import { ShoppingList } from "./pages/shopping-list";
import { Auth } from "./pages/auth";
import { ProductDetails } from "./pages/product-details";
import { Shop } from "./pages/shop";

import React, { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";
import { Html5QrcodeScanner } from "html5-qrcode";


function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  
  async function openGallery() {
    try {
      const handles = await window.showOpenFilePicker({
        types: [{ description: "Images", accept: { "image/*": [".png", ".jpg", ".jpeg"] } }],
        multiple: true,
      });
  
      const files = await Promise.all(handles.map((handle) => handle.getFile()));
      displayImages(files);
    } catch (error) {
      console.log("User canceled or not supported", error);
      alert("error" + error)
    }
  }


  function displayImages(files) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
  
    files.forEach((file) => {
      const imgUrl = URL.createObjectURL(file);
      const img = document.createElement("img");
      img.src = imgUrl;
      img.classList.add("gallery-item");
      gallery.appendChild(img);
    });
  }

  const [qrCode, setQrCode] = useState("");


  return (
    <>
        <div style={{color:'black'}}>
    <input type="file" name="file" id="file" accept="image/*"  capture="environment" /> 

            <h2>Scan QR Code</h2>
            <HTMLQRScanner onScanSuccess={(code) => setQrCode(code)} />
            <QRScanner onScanSuccess={(code) => setQrCode(code)} />
            {qrCode && <p>Scanned QR Code: {qrCode}</p>}
        </div>

    {/* <button onClick={openGallery}>upload</button>
    <input type="file" name="file" id="file" accept="image/*"  capture="user" />
    <br />
    <input type="file" name="file" id="file" accept="image/*"  capture="environment" /> */}
    {/* <div id="gallery" style={{color:'black'}}>
      <pre>
        {JSON.stringify(Object.keys(window))}
      </pre>
    </div> */}
    
    </>
    // <MantineProvider theme={theme} >
    //     <BrowserRouter>
    //       <Routes>
    //         {/* */}
    //         <Route path="/" element={<Layout />}>
    //           <Route index element={<Home />} />
    //           <Route path="shopping-list" element={<ShoppingList/>} />
    //           <Route path="shop" element={<Shop />} />
    //           <Route path="auth" element={<Auth />} />
    //           <Route path="cart" element={<Cart />} />
    //           <Route path="catalog" element={<Catalog />} />
    //           <Route path="checkout" element={<Checkout />} />
    //           <Route path="product/:id" element={<ProductDetails />} />
    //         </Route>
            
    //       </Routes>
    //     </BrowserRouter>
    //     <Notifications />
    // </MantineProvider>
  );
}

export default App;

const QRScanner = ({ onScanSuccess }) => {
    const videoRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);
    let stream;

    const codeReader = new BrowserQRCodeReader();

    const requestCameraPermission = async () => {
      try {
          // Ask for camera permission
          const permission = await navigator.permissions.query({ name: "camera" });

          if (permission.state === "granted") {
              console.log("Camera access granted");
              startScan();
          } else if (permission.state === "prompt") {
              console.log("Camera permission needed");
              startScan();
          } else {
              alert("Camera access is blocked. Please allow it in your browser settings.");
              openSettings(); // Open settings if permission is denied
          }
      } catch (error) {
          console.error("Error requesting camera permission:", error);
          alert("Your browser does not support camera access.");
      }
  };

  const openSettings = () => {
    // Try to open settings directly (Works on Android)
    window.open("chrome://settings/content/camera", "_blank");
};


    const startScan = async () => {
        try {
            setIsScanning(true);
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: {exact: "environment"} },
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }

            codeReader.decodeFromVideoDevice(undefined, videoRef.current, (result) => {
                if (result) {
                    onScanSuccess(result.text);
                    stopScan(); // Stop scanning after detecting a QR code
                }
            });
        } catch (error) {
            console.error("Camera access error:", error);
            alert("Failed to access camera. Make sure to allow permissions.");
            setIsScanning(false);
        }
    };

    const stopScan = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        setIsScanning(false);
    };

    const test = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
          // Handle the camera stream
      })
      .catch(error => console.error("Error accessing camera", error));
    }

    return (
        <div>
            {!isScanning ? (
                <button onClick={test}>Scan QR Code</button>
            ) : (
                <>
                    <video autoPlay playsInline ref={videoRef} style={{ width: "100%", borderRadius: "10px" }} />
                    <button onClick={stopScan}>Stop Scanning</button>
                </>
            )}
        </div>
    );
};




const HTMLQRScanner = ({ onScanSuccess }) => {
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        let scanner;
        if (isScanning) {
            scanner = new Html5QrcodeScanner("reader", {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            });

            scanner.render(
                (decodedText) => {
                    onScanSuccess(decodedText);
                    scanner.clear(); // Stop scanning after successful detection
                    setIsScanning(false);
                },
                (errorMessage) => {
                    console.warn("QR Scan Error:", errorMessage);
                }
            );
        }

        return () => {
            if (scanner) scanner.clear(); // Clean up scanner on unmount
        };
    }, [isScanning]);

    return (
        <div>
            {!isScanning ? (
                <button onClick={() => setIsScanning(true)}>Scan QR Code</button>
            ) : (
                <div id="reader" />
            )}
        </div>
    );
};

