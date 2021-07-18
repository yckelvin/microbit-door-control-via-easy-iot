microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (message == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (message == "no") {
        basic.showIcon(IconNames.No)
    } else if (message == "door open") {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
    } else if (message == "door close") {
        microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    }
})
microIoT.microIoT_initDisplay()
let wifi_name = "DGINCB_WT6F"
microIoT.microIoT_WIFI(wifi_name, "20210601")
microIoT.microIoT_MQTT(
    "vkW338gnR",
    "DkZq38gnRz",
    "DanDCZznR",
    microIoT.SERVERS.English
)

microIoT.microIoT_showUserText(0, wifi_name)
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_1, "bCGskhz7R")
microIoT.microIoT_add_topic(microIoT.TOPIC.topic_2, "CU5yz2k7R")
