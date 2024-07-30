docker build build-tools/ -t frnt
docker run -v .:/var/app -p 3000:3000 frnt