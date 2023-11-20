// @ts-nocheck

import { getEventHandlers } from "./injects/getEventHandlers";
import { hilightClickEvents } from "./injects/hilightClickEvents";
import { printCustomEvents } from "./injects/printCustomEvents";
import { printFieldNames } from "./injects/printFieldNames";

window.frevo = {
    getEventHandlers,
    hilightClickEvents,
    printCustomEvents,
    printFieldNames,
}
