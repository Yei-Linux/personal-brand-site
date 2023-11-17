---
storyReadTime: 10 min read
storyPublishDate: Aug 29
storyImage: https://miro.medium.com/v2/resize:fit:640/0*SX_gLD_3I02mwzxZ.png
storyTitle: building youtube mixer with nextjs streams epress ytdl and ffmpeg part i searching and
---

Building a YouTube Mixer Application with NextJS, Streams,SocketIO, Express, YTDL-core and FFMPEG 🤓\[Part I — Searching and Downloading modules\]
==================================================================================================================================================

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*SX_gLD_3I02mwzxZ.png)

As a music lover I like to get all my favorite music that I usually listen on Youtube, and as a content creator beginner I would like to generate a reel based on the original video generating the video, audio and the whole video.

So I thought … why not create an application where I can mix my favorite music, download it and in case of videos as a content creator beginner I would like to add a module to summarize the video and generate reels based on the video that user typed.

This would be the base of the platform, we can restrict the daily usage limit and add free plan, pro plan and business plan for example. Also, add new modules related to mix songs , create music as DJs and more useful features as a Youtuber content creator.

The search module, downloading module, and progress bar feature will be the focus of our discussion in this post. To take into account we are using nextjs13, expressjs, typescript, socketIO, streams and ytdl-core with ffmpeg libraries.

1.  **Learning about ytdl library and FFMPEG library 🤓**
2.  **Creating the Searching Feature 🙃**
3.  **Learning about Streams and Buffer** 🤓
4.  **Creating the Downloading Feature with socketIO and streams😁**
5.  **Conclusion and what is next of our learning? 😅**

**Learning about ytdl-core library 🤓**
=======================================

Ytdl-core is a Youtube downloader library using streams. We are going to use for getting meta information and download video filtering by itag(Youtube video format codes).

The response, when we get the information, has a format field. The next objects displayed are formats available related with the video information:

```
...{  
    "mimeType": "video/webm; codecs=\\"vp9\\"",  
    "qualityLabel": "2160p",  
    "bitrate": 17672286,  
    "audioBitrate": null,  
    "itag": 313, ---> Field used to filter  
    "width": 3840,  
    "height": 2160,  
    "initRange": {  
      "start": "0",  
      "end": "220"  
    },  
    "indexRange": {  
      "start": "221",  
      "end": "1108"  
    },  
    "lastModified": "1613517410462477",  
    "contentLength": "547880430",  
    "quality": "hd2160",  
    "fps": 24,  
    "projectionType": "RECTANGULAR",  
    "averageBitrate": 17508851,  
    "colorInfo": {  
      "primaries": "COLOR\_PRIMARIES\_BT709",  
      "transferCharacteristics": "COLOR\_TRANSFER\_CHARACTERISTICS\_BT709",  
      "matrixCoefficients": "COLOR\_MATRIX\_COEFFICIENTS\_BT709"  
    },  
    "approxDurationMs": "250333",  
    "url": "https://rr4---sn-uqx2-aphel.googlevideo.com/videoplayback?expire=1693281373&ei=\_RftZN2kDbyc-LAPr4S\_uA4&ip=200.37.39.138&id=o-AFBAgL-HIdd2miIU79g5bZ8o1hzUuFjdFScmvgLi6Ve5&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=w\_&mm=31%2C29&mn=sn-uqx2-aphel%2Csn-nja7sner&ms=au%2Crdu&mv=m&mvi=4&pl=19&initcwndbps=642500&spc=UWF9fyyL3BTumbNwUXOpmH9fcm368Kwsu4-VKSRfPA&vprv=1&svpuc=1&mime=video%2Fwebm&ns=0A6X3HWyNfBZ7ND9iIWWC0MP&gir=yes&clen=547880430&dur=250.333&lmt=1613517410462477&mt=1693259343&fvip=1&keepalive=yes&fexp=24007246%2C51000023&c=WEB&txp=5532432&n=gSTsychukfMQqQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C\_xAwRAIgbUo2n5ihaCvPr6Qk5\_R1sl3yql6MwWoa7ETYsyCFT5gCIGrUvT5qZ-QEknpH1MNUMKS5B9MALUcTg\_uVU4MToavp&sig=AOq0QJ8wRQIgZLYSCBVoFYhy9hujpobPkViSeY-PNmAwSVvwykbRNuACIQCpFlDWxxOL6EzwEhiM1vb-hJ0ikt1H4nwcezbXqTjo1Q%3D%3D",  
    "hasVideo": true, ---> Field used to filter  
    "hasAudio": false, ---> Field used to filter  
    "container": "webm",  
    "codecs": "vp9",  
    "videoCodec": "vp9",  
    "audioCodec": null,  
    "isLive": false,  
    "isHLS": false,  
    "isDashMPD": false  
  },  
  {  
    "itag": 401, ---> Field used to filter  
    "mimeType": "video/mp4; codecs=\\"av01.0.12M.08\\"",  
    "bitrate": 11829305,  
    "width": 3840,  
    "height": 2160,  
    "initRange": {  
      "start": "0",  
      "end": "700"  
    },  
    "indexRange": {  
      "start": "701",  
      "end": "1296"  
    },  
    "lastModified": "1619713845247877",  
    "contentLength": "365013893",  
    "quality": "hd2160",  
    "fps": 24,  
    "qualityLabel": "2160p",  
    "projectionType": "RECTANGULAR",  
    "averageBitrate": 11664906,  
    "colorInfo": {  
      "primaries": "COLOR\_PRIMARIES\_BT709",  
      "transferCharacteristics": "COLOR\_TRANSFER\_CHARACTERISTICS\_BT709",  
      "matrixCoefficients": "COLOR\_MATRIX\_COEFFICIENTS\_BT709"  
    },  
    "approxDurationMs": "250333",  
    "url": "https://rr4---sn-uqx2-aphel.googlevideo.com/videoplayback?expire=1693281373&ei=\_RftZN2kDbyc-LAPr4S\_uA4&ip=200.37.39.138&id=o-AFBAgL-HIdd2miIU79g5bZ8o1hzUuFjdFScmvgLi6Ve5&itag=401&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=w\_&mm=31%2C29&mn=sn-uqx2-aphel%2Csn-nja7sner&ms=au%2Crdu&mv=m&mvi=4&pl=19&initcwndbps=642500&spc=UWF9fyyL3BTumbNwUXOpmH9fcm368Kwsu4-VKSRfPA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=0A6X3HWyNfBZ7ND9iIWWC0MP&gir=yes&clen=365013893&dur=250.333&lmt=1619713845247877&mt=1693259343&fvip=1&keepalive=yes&fexp=24007246%2C51000023&c=WEB&txp=5532434&n=gSTsychukfMQqQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C\_xAwRQIhAOlIBaBTMoIux9WewO4fEFjl5SDtLZph06-yjil0QuDIAiAWLPM33cJPCfbm-O\_VxkrKo6ESIcOgkEqgpzrsp5fOCw%3D%3D&sig=AOq0QJ8wRgIhAK2jMUqetz7JZnXrZ7j2iSzlAiTNKVz5\_xqOflcihTPFAiEAs0ZBzi52I7g7LPAOLyb5Z2u5GufLDwjQjOjcAefXRhE%3D",  
    "hasVideo": true, ---> Field used to filter  
    "hasAudio": false, ---> Field used to filter  
    "container": "mp4",   
    "codecs": "av01.0.12M.08",  
    "videoCodec": "av01.0.12M.08",  
    "audioCodec": null,  
    "isLive": false,  
    "isHLS": false,  
    "isDashMPD": false  
  },  
  {  
    "mimeType": "video/webm; codecs=\\"vp9\\"",  
    "qualityLabel": "1440p",  
    "bitrate": 6530340,  
    "audioBitrate": null,  
    "itag": 271, ---> Field used to filter  
    "width": 2560,  
    "height": 1440,  
    "initRange": {  
      "start": "0",  
      "end": "219"  
    },  
    "indexRange": {  
      "start": "220",  
      "end": "1104"  
    },  
    "lastModified": "1613517147483909",  
    "contentLength": "185667788",  
    "quality": "hd1440",  
    "fps": 24,  
    "projectionType": "RECTANGULAR",  
    "averageBitrate": 5933465,  
    "colorInfo": {  
      "primaries": "COLOR\_PRIMARIES\_BT709",  
      "transferCharacteristics": "COLOR\_TRANSFER\_CHARACTERISTICS\_BT709",  
      "matrixCoefficients": "COLOR\_MATRIX\_COEFFICIENTS\_BT709"  
    },  
    "approxDurationMs": "250333",  
    "url": "https://rr4---sn-uqx2-aphel.googlevideo.com/videoplayback?expire=1693281373&ei=\_RftZN2kDbyc-LAPr4S\_uA4&ip=200.37.39.138&id=o-AFBAgL-HIdd2miIU79g5bZ8o1hzUuFjdFScmvgLi6Ve5&itag=271&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401&source=youtube&requiressl=yes&mh=w\_&mm=31%2C29&mn=sn-uqx2-aphel%2Csn-nja7sner&ms=au%2Crdu&mv=m&mvi=4&pl=19&initcwndbps=642500&spc=UWF9fyyL3BTumbNwUXOpmH9fcm368Kwsu4-VKSRfPA&vprv=1&svpuc=1&mime=video%2Fwebm&ns=0A6X3HWyNfBZ7ND9iIWWC0MP&gir=yes&clen=185667788&dur=250.333&lmt=1613517147483909&mt=1693259343&fvip=1&keepalive=yes&fexp=24007246%2C51000023&c=WEB&txp=5532432&n=gSTsychukfMQqQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C\_xAwRAIgR7nTSQeeGDQph5nDWGMspFUt5ewUH\_49phfKoGvOg1kCIACn6bGdxRvirV1xwO4a2ndUEtIWYEQZtlf97zvwl7tY&sig=AOq0QJ8wRQIhAIuyliKTSzLQx8gkroRJHPfDcK83UxsemqGSiZL76liFAiAmCHlkDcT2MihlYZR7cjyDVx3Q4-iJ9hARner9UIVrPg%3D%3D",  
    "hasVideo": true, ---> Field used to filter  
    "hasAudio": false, ---> Field used to filter  
    "container": "webm",  
    "codecs": "vp9",  
    "videoCodec": "vp9",  
    "audioCodec": null,  
    "isLive": false,  
    "isHLS": false,  
    "isDashMPD": false  
  },...
```

hasAudio and hasVideo indicates if that video format(for example a video with 360p resolution) has audio or video available, both or one of them.And the itag is a format code, every itag has a different resolution. If you want to learn more about itags see this gist:

**For getting meta video information we are using .getInfo()** method and passing the youtube video url. The response is the meta information.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*SMCWGRaeV8kEF3wA76Zi3g.png)

**For Downloading video by format code we are calling the ytdl main method**. This receive the link and options. In the options parameter we are passing a filter callback.This filter callback is executed and validate it by itag, hasAudio and hasVideo. If match video so is found it and downloaded.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*XNWED-BYU80pCk_63Av6ew.png)

In the code above we can see the **filterYTDLVideo** method is applying currying: “A process that allows you to transform a function with multiple arguments into a sequence of nesting functions…”.

The first function of filterYTDLVideo aims to get the moreOptions and the second function aims to get the format when the callback passed is executed by ytdl.

Finally as we can see we have **filterByExtension** object. This object aims to get the condition to apply by extension. For example if we want to get only the audio of the video and an specific quality we will execute the mp3 value from filterByExtension object. The condition says: “If video hasAudio and dont have video and itag is equal to the parameter passed so match it!”

**Creating the Searching Feature 🙃**
=====================================

We have this UI(**Frontend Side**) for our searching module:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*8D_BCMs0MAgKy-YhxEHGbQ.png)

In the input will be typed youtube video url. Below of the input and search button are the thumbnail , title and video duration. For example let’s see what happened if we search the next video:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*bR-VcQ_lnfI6aZzWqEMPQw.png)

As we can see we have the main information.

Ok Let see how we can implement this feature! So the first step is building the UI. This is the main code of this feature(if you want to take a look all the code , at the end of the post I’ll put the github link)

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*1Ly3X6DpI445biyBfeMTtw.png)

This **searchYtdlVideo** method aims to call search endpoint.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*YOZzvVLoQqWmgFQIfH6MBg.png)

This **useYoutubeSearch** **hook** aims to get from the store the metaInfo, saved after get the info from the backend, search the video by the url and save it to the store.

As we can see we get the value from the input first with the FormData(this is **uncontrolled form that means we are not saving any value changed in a state**), after that is validated and if is valid calls to search endpoint.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*UbbHQclC6KHolLY-zuXSgQ.png)

And this is our TSX.

In the backend side we have this endpoint:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*Vj7MaGRChe2tVCUH_kcV6Q.png)

In the code above first we are getting youtube video info.After that we are getting thumbnail, video duration and formats grouped by extension. Finally we are returning the response.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*qe6Q5bhL6Ec0jvmVU_8MgQ.png)

The **groupFormatsByExtension** method aims to group every format and resolution by extension.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*BNvTNjrQBXtbeQdVjmAEfg.png)

And finally the **getYtInfo method** for getting youtube video information as we mentioned before.

**Learning about Streams and Buffer** 🤓
========================================

NodeJS uses an event-driven, non-blocking I/O model. This allows us to create robust and scalable applications. Some of the main concepts that we can find are streams and buffers.

So what are Streams? … Is a way to process large mounts of data efficiently that enable reading and writing data in chunks instead of loading entire files into memory.

There are four different types of streams:

*   **Readable streams** : To create a stream of data for reading (reading a large file in chunks).

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*Uzv8cIJLHE3oIYNDvRYExA.png)
We want to read the file content of test.txt so first we need to create a read stream passing file path. Then was added the event listeners: open, data, end. Open Event to detect when the file was open to start reading, Data Event for getting every chunk read. Finally we have the End Event to detect when the content was read and it proceed to end the process.

*   **Writable streams :** To create a stream of data for writing (writing a large amount of data to a file).

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*d0xdJnmdLFGUSRvA9hIyWA.png)
In this example we are creating write stream.Then we use the .pipe method, this method allows transfer the data to the write stream created. So process.stdin.pipe transfers the input data from the terminal to the file stream. After that test.txt will have the input terminal.![Alt text](https://miro.medium.com/v2/resize:fit:640/1*zE-LzBk45PY_-pYyhb6RfA.png)
In this case we create a read stream for reading the file content and write stream for writting data. We use on(“data”) for getting each chunk and writting to the file by each one

*   **Duplex streams :** To create a stream that is both readable and writable at the same time. We can read and write to a duplex stream (a socket connection between a client and a server).

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*UAimP8MbDzRmK-BMCwsfqQ.png)
In this example we create a tunnel with new PassThrough() ,this class allows pass the input bytes across to the output. This tunnel get the data passed from the file2 to the file.Also in the piping chain is added the throttle. As you can see, this Throttle extends from Duplex, overriding the write method adding the setTimeout.So the final process would be: first read the test2.txt file, then was added a throttling in the write process, after that when data arrives is saved, the amount of bytes processed.Finally is written the file content from test2.txt to test.txt![Alt text](https://miro.medium.com/v2/resize:fit:640/1*q7FQ1W3MTw44NVr3TpAY8g.png)
This graphic shows how duplex works. In two channels , both are independent and each have separate internal buffer. That’s the reason why you don’t get what you write.Because was sent to another source.

*   **Transform streams :** To create a stream that is readable and writable, but the data can be modified while reading and writing to the stream ( compressing data by the client and server before while requesting).

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*U21lqZhYZoIBJygdcL0kPw.png)
In this example we are using Transform for transforming the data read for writting to the file.In this case in the transform method we are adding .toUpperCase() to transform each word from the file.So the process would be: First read the file, add the uppercase transformer and finally is written to file with the text transformed.![Alt text](https://miro.medium.com/v2/resize:fit:640/1*WqVJc9q8-5EpBRxHQxDI8A.png)
In this case we are using only one channel. So the text read manipulated is the same that we are writting.

We learned about streams but what about buffer? Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte.

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*Pk7i9A4Y0-P3NSJf.png)

**Creating the Downloading Feature** with socketIO and Streams **😁**
=====================================================================

We took a look into streams and buffer. So now we can start checking the downloading feature.

First take a look the downloader endpoint:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*ByYGYuk7gm6mu-ne1eWZ4g.png)

So in this method first we are setting the parameters got and the socket instance initialized by a user.

Also set the ytdlUserPath and downloadUserPath for saving temporally the file in those directories.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*8z1yYxDb5faTwfabndC0jA.png)

After that we are validating if any parameter or variable is empty or invalid.

Then we get the youtube info by url and the filter callback(as we explained at the beginning of the post). Then we proceed to pipe the readable content to the ytdlUserPath file.That means the youtube video content will be saved into a new file.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*4UHGQe1tkTACMcIJ2qn0zw.png)

The next method executed is this one. This method aims to read the file created before and transform this file with the extension that we want with ffmpeg(FFMPEG is library that allows to convert and stream audio and video) and save it into new file.

As you can see, we are emitting a message to the web socket connection. This message has the progress percent, progress time, status and operationId of the conversion process. This takes a place when FFMPEG is transforming our file.

Finally , at the end of the controller we are reading the file generated after ffmpeg conversion and it will pipe the file content to the response.

Before to move to the frontend side I would like to show you the socketIO initialization in the backend side:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*KYAZGQuMPvS0fLRXedqOww.png)

As you can see, it was added the connection event. When the client request, the websocket connection will be executed the connectInit event and passed the sessionId by the client. So this sessionId and the socketId will be saved in the socket object and this socket object will be set in the app.

Finally in the frontend side take a look the download feature:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*Bfm5B6GlT-yvxTnLtra7ug.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*Qy8eSv0sydAgjOuQXFhMQg.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*7K8r65zAFaAAlDtvJzJ41A.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*s302GrmTiqbaXetljbQHAQ.png)

This is the download flow. User can select MP4,MP3 and MP4 without audio. Also can download it.

The websocket is working when the status is updated while the audio and video are transforming.

The streaming is working when the file is got from Youtube, FFMPEG transform the file and it is downloaded to the client side.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*9ty-NaN9epwyqrW5cSOuIQ.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*TuQjVxPkvanGA09cwdA1oA.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*AO82_ATGDr9-qO8V5tLliQ.png)

The code above is related to the download feature. The useYoutubeDownload hook aims to download from the server and after that the blob is created into URL. This URL is saved into the a link element and click it to download in the browser. Finally, the link element is deleted.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*vtAkjpRTSQbCytkvUsBetA.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*ZrpdtPSO7qm5VDfBhUDpVQ.png)

To take into account the operationId is retrieved from the server to difference from every download action.

The useProgress hook aims to handle the message of uploadProgress to update the progress bar in the UI through websocket connection.

Github Repo: [https://github.com/Yei-Linux/youtube-mixer](https://github.com/Yei-Linux/youtube-mixer)

**Conclusion and what is next of our learning? 😅**
===================================================

Streams , buffers, ffmpeg, socketIO and YTDL-core are super interesting tools and libraries. I tried to show you the theory and the practice part. I know that is missing more cases , more theory and more things but take the things that are more interesting for you and start coding!

In this post we developed a YouTube manager platform, but we are at the beginning of the development more interesting things coming such as: summarize ,generate a reel, mixing of videos and more.Don’t miss the next post where we are going to continue building this tool!

See you soon in the next post!

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*k8KK06J1dTlkoAQ4.png)