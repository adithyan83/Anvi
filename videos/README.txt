Drop your video files here.
Recommended formats: MP4 (H.264) with .mp4 extension. Optionally add WebM (.webm) for extra browser support.

For each video, add a poster image (thumbnail) named like: myvideo.mp4 => myvideo.jpg

Recommended encoding (ffmpeg example):
ffmpeg -i input.mov -vf scale=-2:720 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k output.mp4

Keep file names simple (no spaces) for best compatibility.
