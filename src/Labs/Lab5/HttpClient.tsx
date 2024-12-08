import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
    // 点击获取数据的state
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    // 加载时获取数据的state
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    // 点击获取数据的函数
    const fetchWelcomeOnClick = async () => {
        try {
            const message = await client.fetchWelcomeMessage();
            setWelcomeOnClick(message);
        } catch (error) {
            console.error("Error fetching welcome message:", error);
            setWelcomeOnClick("Error fetching data");
        }
    };

    // 加载时获取数据的函数
    const fetchWelcomeOnLoad = async () => {
        try {
            const welcome = await client.fetchWelcomeMessage();
            setWelcomeOnLoad(welcome);
        } catch (error) {
            console.error("Error fetching welcome message:", error);
            setWelcomeOnLoad("Error fetching data");
        }
    };

    // 使用useEffect在组件加载时获取数据
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []); // 空数组表示只在组件挂载时执行一次

    return (
        <div>
            <h3>HTTP Client</h3>
            <hr />
            
            <h4>Requesting on Click</h4>
            <button 
                className="btn btn-primary me-2" 
                onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button>
            <br />
            Response from server: <b>{welcomeOnClick}</b>
            <hr />

            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />
        </div>
    );
}