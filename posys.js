import { posys } from "./module/config.js";
import POSysItemSheet from "./module/sheets/POSysItemSheet.js";

Hooks.once("init", function(){
    console.log("posys | Initialising Paranormal Order System");

    CONFIG.posys = posys;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("posys", POSysItemSheet, { makeDefault: true });
});