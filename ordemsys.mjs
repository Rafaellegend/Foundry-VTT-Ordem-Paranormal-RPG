import { ordemsys } from "./module/config.mjs";
import OrdemSysItemSheet from "./module/sheets/OrdemSysItemSheet.mjs";

Hooks.once("init", function(){
    console.log("ordemsys | Initialising Ordem Paranormal RPG System");

    CONFIG.ordemsys = ordemsys;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ordemsys", OrdemSysItemSheet, { makeDefault: true });
});
