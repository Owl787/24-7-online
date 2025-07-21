// status can be "online", "idle", "dnd", or "invisible" or "offline"

export default [

    {

        channelId: "1365777368102207513",

        serverId: "1365777367397826692",

        token: process.env.token1,

        selfDeaf: false,

        autoReconnect: {

            enabled: true,

            delay: 5, // ثواني

            maxRetries: 5,

        },

        presence: {

            status: "idle",

        },

        selfMute: true,

    },

];
