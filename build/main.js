"use strict";const{app:e,BrowserWindow:o}=require("electron"),i=require("path");require("electron-squirrel-startup")&&e.quit();const r=()=>{const t=new o({width:800,height:600,autoHideMenuBar:!0,webPreferences:{preload:i.join(__dirname,"preload.js"),webviewTag:!0}});t.setAlwaysOnTop(!0,"screen"),t.loadURL("http://localhost:5173")};e.on("ready",r);e.on("window-all-closed",()=>{process.platform!=="darwin"&&e.quit()});e.on("activate",()=>{o.getAllWindows().length===0&&r()});
