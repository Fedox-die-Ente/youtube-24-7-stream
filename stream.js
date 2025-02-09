import { spawn } from "child_process"
import dotenv from "dotenv"

dotenv.config()

const YOUTUBE_URL = process.env.YOUTUBE_URL
const YOUTUBE_KEY = process.env.YOUTUBE_KEY

if (!YOUTUBE_URL || !YOUTUBE_KEY) {
    console.error("Make sure to set YOUTUBE_URL and YOUTUBE_KEY in your .env file")
    process.exit(1)
}

const videoFiles = ["video1.mp4", "video2.mp4", "video3.mp4"]

const ffmpegArgs = [
    "-re",
    "-stream_loop",
    "-1",
    "-i",
    `concat:${videoFiles.join("|")}`,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-b:v",
    "650k",
    "-maxrate",
    "650k",
    "-bufsize",
    "1300k",
    "-pix_fmt",
    "yuv420p",
    "-g",
    "50",
    "-c:a",
    "aac",
    "-b:a",
    "96k",
    "-ar",
    "44100",
    "-f",
    "flv",
    `${YOUTUBE_URL}/${YOUTUBE_KEY}`,
]

function startStream() {
    const ffmpeg = spawn("ffmpeg", ffmpegArgs)

    ffmpeg.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`)
    })

    ffmpeg.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`)
    })

    ffmpeg.on("close", (code) => {
        console.log(`Exited ffmpeg with code: ${code}`)
        console.log("Restarting stream...")
        startStream()
    })
}

console.log("Starting stream...")
startStream()