import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from 'react-router-dom'
import Header from './Header.jsx'
import '../assets/Css/styles.css'
import '../assets/Css/webapp.css'
import Footer from './Footer.jsx'

// for yolo
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
import Loader from "./webapp/Loader.jsx";
import ButtonHandler from "./webapp/Handle-Button.jsx";
import { detect, detectVideo } from "./webapp/webUtils/detect.js";
import Stats from "./webapp/Stats.jsx";



function Webapp() {
    const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
    const [model, setModel] = useState({
        net: null,
        inputShape: [1, 0, 0, 3],
    }); // init model & input shape

    // references
    const imageRef = useRef(null);
    const cameraRef = useRef(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // model configs
    const modelName = "yolov8s";

    useEffect(() => {
        let baseUrl = window.location.href;
        if (baseUrl.includes("/webapp")) {
            // Remove "webapp" segment from the URL
            baseUrl = baseUrl.replace("/webapp", "");
        }
        tf.ready().then(async () => {
            const yolov8 = await tf.loadGraphModel(
                `${baseUrl}/${modelName}_web_model/model.json`,
                {
                    onProgress: (fractions) => {
                        setLoading({ loading: true, progress: fractions }); // set loading fractions
                    },
                }
            ); // load model

            // const weights = yolov8.getWeights();
            // const firstWeightTensor = weights[0];
            // console.log(firstWeightTensor.dtype);

            // warming up model
            const dummyInput = tf.ones(yolov8.inputs[0].shape);
            const warmupResults = yolov8.execute(dummyInput);

            setLoading({ loading: false, progress: 1 });
            setModel({
                net: yolov8,
                inputShape: yolov8.inputs[0].shape,
            }); // set model & input shape

            tf.dispose([warmupResults, dummyInput]); // cleanup memory
        });
    }, []);





    return (
        <div>
            {loading.loading &&  <Loader>{(loading.progress * 100).toFixed(0)}%</Loader> }
            
           
           {!loading.loading &&  
           <div className="mainContainer">

           
            <Header />
           <div className="web-container">
                    <div className="VandG">
                        <div className="outVideo">
                            <div className="content">
                                <img
                                    src="#"
                                    ref={imageRef}
                                    onLoad={() => detect(imageRef.current, model, canvasRef.current)}
                                />
                                <video
                                    autoPlay
                                    muted
                                    ref={cameraRef}
                                    onPlay={() => detectVideo(cameraRef.current, model, canvasRef.current)}
                                />
                                <video
                                    autoPlay
                                    muted
                                    ref={videoRef}
                                    onPlay={() => detectVideo(videoRef.current, model, canvasRef.current)}
                                />
                                <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
                            </div>
    
                        </div>
                        <div className="webMenu">
                            <ButtonHandler imageRef={imageRef} cameraRef={cameraRef} videoRef={videoRef} />
                        </div>
                        <div className="graph"></div>
                    </div>
                    <Stats/>
    
                </div>
                </div>


            }
<Footer/>   
            



        </div>
    )
}

export default Webapp