import Trend from "./components/Trend";
import { Button } from "antd"
export default function Home() {
    function onMessage() {
        window.$message.success("nihao ")
    }
    return <>
        <Button onClick={onMessage}>dddddd</Button>
        <Trend />
    </>
}