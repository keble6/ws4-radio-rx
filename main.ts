// Combine the 3 radio messages into 1 line of text
radio.onReceivedString(function (receivedString) {
    // Detect the 1st message
    if (receivedString.charAt(0) == "*") {
        count = 0
        list = []
        // Strip off the leading * and add the message to list
        // Strip off the leading * and add the message to list
        list[0] = receivedString.substr(1, 16)
        // Send ACK to weather station 
        radio.sendString("ACK")
    } else {
        // Add the 2nd and 3rd mesages
        list.push(receivedString)
        count += 1
        // Now send the messages to USB as 1 line of text
        if (count == 2) {
            for (let index = 0; index <= 2; index++) {
                serial.writeString("" + list[index] + ",")
            }
            serial.writeLine("")
        }
        radio.sendString("ACK")
    }
})
let list: string[] = []
let count = 0
radio.setGroup(1)
