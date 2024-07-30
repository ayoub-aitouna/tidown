FROM node:18-slim

RUN apt-get update && apt-get install -y curl

# Update package lists and install dependencies separately to identify issues
RUN apt-get update && apt-get install -y \
    libgobject-2.0-0 \
    || echo "Failed to install libgobject-2.0-0" \
    && apt-get install -y \
    libnss3 \
    || echo "Failed to install libnss3" \
    && apt-get install -y \
    libatk-bridge2.0-0 \
    || echo "Failed to install libatk-bridge2.0-0" \
    && apt-get install -y \
    libcups2 \
    || echo "Failed to install libcups2" \
    && apt-get install -y \
    libdrm2 \
    || echo "Failed to install libdrm2" \
    && apt-get install -y \
    libxkbcommon0 \
    || echo "Failed to install libxkbcommon0" \
    && apt-get install -y \
    libxcomposite1 \
    || echo "Failed to install libxcomposite1" \
    && apt-get install -y \
    libxrandr2 \
    || echo "Failed to install libxrandr2" \
    && apt-get install -y \
    libgbm1 \
    || echo "Failed to install libgbm1" \
    && apt-get install -y \
    libpango-1.0-0 \
    || echo "Failed to install libpango-1.0-0" \
    && apt-get install -y \
    libasound2 \
    || echo "Failed to install libasound2" \
    && apt-get install -y \
    fonts-liberation \
    || echo "Failed to install fonts-liberation" \
    && apt-get install -y \
    libappindicator3-1 \
    || echo "Failed to install libappindicator3-1" \
    && apt-get install -y \
    libxshmfence1 \
    || echo "Failed to install libxshmfence1" \
    && apt-get install -y \
    libpangocairo-1.0-0 \
    || echo "Failed to install libpangocairo-1.0-0" \
    && apt-get install -y \
    libatspi2.0-0 \
    || echo "Failed to install libatspi2.0-0" 


RUN apt install zsh git -y

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

WORKDIR /var/app



ENTRYPOINT [ "sh", "build-tools/start.sh" ]
