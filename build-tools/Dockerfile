FROM node:18-slim

RUN apt-get update && apt-get install -y curl

RUN apt install zsh git -y

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

WORKDIR /var/app



ENTRYPOINT [ "sh", "build-tools/start.sh" ]
