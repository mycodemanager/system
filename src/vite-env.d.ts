import {MessageInstance,NotificationInstance} from "antd"
/// <reference types="vite/client" />
export {

}

declare global {
    interface Window {
        $message: MessageInstance;
        $notification: NotificationInstance;
        $modal: ModalType;
    }
}