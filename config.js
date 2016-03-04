var config = {
    // Lenguage for the mirror (currently not implemented)
    language : "en",
    layout: "icesnow",
    dateFormat: {
        time: "hh:mm a",
        date: "EEEE, MMMM d yyyy",
    },

    greeting : [""], // An array of greetings to randomly choose from
    //you can also use timebased greetings
    //greeting : {
    //    night: ["Bed?", "zZzzZz", "Time to sleep"],
    //    morning: ["Good Morning"],
    //    midday: ["Hey!", "Hello"],
    //    evening: ["Good evening"]
    //}, // An array of greetings to randomly choose from


    //use this only if you want to change the weather location
    //geo_position: {
    //    latitude: 78.23423423,
    //    longitude: 13.123124142
    //},

    sleep_timer: {
            start: 23,
            end: 06,
    },//automatic "good night" mod
    // forcast.io
    forcast : {
        key : "f1679a2e02bf9a7c0fe3a67f5fe570f6", // Your forcast.io api key
        language : "en",
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Philips Hue
    hue : {
        ip : "192.168.1.119", // The IP address of your hue base
        username : "669c85a67cff5a0c3b3b2f713bc5b6ca", // The username used to control your hue
        group : "0", // The group you'd like the mirror to control (0 is all hue lights connected to your hub)
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/mkkerfoot%40gmail.com/private-c6393f41359e0ba8e0cc87862ce16a4e/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    // Giphy
    giphy: {
      key : "dc6zaTOxFJmzC" // Your Gliphy API key
    },
    traffic: {
      key : "AuFKTapiwLn8_6DzzDNXWNzUWxNGu45yd5RFrusSGccPsadvBtiRcf_5N9HzAelL", // Bing Maps API Key
      mode : "Driving", // Possibilities: Driving / Transit / Walking
      origin : "2901 Hillsboro Avenue North New Hope, MN 55427", // Start of your trip. Human readable address.
      destination : "6110 Golden Hills Drive Golden Valley, MN 55416", // Destination of your trip. Human readable address.
      name : "work", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    }
}