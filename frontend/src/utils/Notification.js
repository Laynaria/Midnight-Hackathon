import { toast } from "react-toastify";

/*
For use this class:
--------------------
import Notify from "@utils/notification";
Notify.success("Success message");
Notify.error("Error message");
Notify.info("Info message");
Notify.warning("Warning message");

for adding custom parameters:
--------------------
Notify.success("Success message", {position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: false, progress: undefined, theme: "colored"});

or

const customSettings = {
  position: 'bottom-left',
  autoClose: 3000,
  theme: 'dark',
  etc...
};

Notify.success("Success message", customSettings);
*/

export default class Notify {
  // Default settings for toast
  static defaultSettings = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  };

  // Error toast (red)
  static error(content, settings) {
    toast.error(content, { ...this.defaultSettings, ...settings });
  }

  // Success toast (green)
  static success(content, settings) {
    toast.success(content, { ...this.defaultSettings, ...settings });
  }

  // Info toast (blue)
  static info(content, settings) {
    toast.info(content, { ...this.defaultSettings, ...settings });
  }

  // Warning toast (yellow)
  static warning(content, settings) {
    toast.warning(content, { ...this.defaultSettings, ...settings });
  }
}
