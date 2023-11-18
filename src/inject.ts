// @ts-nocheck

import { getEventHandlers } from "./injects/getEventHandlers";
import { hilightClickEvents } from "./injects/hilightClickEvents";
import { printCustomEvents } from "./injects/printCustomEvents";

window.frevo = {
    getEventHandlers,
    hilightClickEvents,
    printCustomEvents,
}
