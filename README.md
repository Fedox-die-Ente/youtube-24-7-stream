# YouTube Live Streaming with FFmpeg

## Description
This script allows you to continuously stream multiple video files to YouTube Live using FFmpeg. The script automatically restarts if FFmpeg crashes to ensure an uninterrupted stream.

## Prerequisites
- Node.js installed
- FFmpeg installed and added to system path
- A YouTube Live Stream key

## Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/Fedox-die-Ente/youtube-24-7-stream
   cd youtube-24-7-stream
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file (or rename `.env.example` to `.env`) and add your YouTube stream key:
   ```env
   YOUTUBE_URL=rtmp://a.rtmp.youtube.com/live2
   YOUTUBE_KEY=your-stream-key-here
   ```

4. Update `videoFiles` in `stream.js` with your video filenames.

## Usage
Run the script with:
```sh
node stream.js
```

The script will start streaming the videos to YouTube Live and will automatically restart if FFmpeg crashes.

## Notes
- Ensure your video files are in the same directory as the script or provide full paths.
- The script uses FFmpeg with looping enabled to create an infinite stream.
- Adjust FFmpeg parameters as needed to match your streaming requirements.

## License
This project is licensed under the MIT License.
