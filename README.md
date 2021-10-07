# api-escolas-aps


Projeto com a finalidade de varrer o site escolasaps e pegar os dados e transformar em uma api 

#### Dependências Debian (e.g. Ubuntu) 64bits

```bash
  sudo apt-get update \
	&& apt-get upgrade -y \
	&& apt-get install -y \
	git \
	curl \
	yarn \
	gcc \
	g++ \
	make \
	libgbm-dev \
	wget \
	unzip \
	fontconfig \
	locales \
	gconf-service \
	libasound2 \
	libatk1.0-0 \
	libc6 \
	libcairo2 \
	libcups2 \
	libdbus-1-3 \
	libexpat1 \
	libfontconfig1 \
	libgconf-2-4 \
	libgdk-pixbuf2.0-0 \
	libglib2.0-0 \
	libgtk-3-0 \
	libnspr4 \
	libpango-1.0-0 \
	libpangocairo-1.0-0 \
	libstdc++6 \
	libx11-6 \
	libx11-xcb1 \
	libxcb1 \
	libxcomposite1 \
	libxcursor1 \
	libxdamage1 \
	libxext6 \
	libxfixes3 \
	libxi6 \
	libxrandr2 \
	libxrender1 \
	libxss1 \
	libxtst6 \
	ca-certificates \
	fonts-liberation \
	libnss3 \
	lsb-release \
	xdg-utils \
	ca-certificates \
	fonts-liberation \
	libasound2 \
	libatk-bridge2.0-0 \
	libatk1.0-0 \
	libc6 \
	libcairo2 \
	libcups2 \
	libdbus-1-3 \
	libexpat1 \
	libfontconfig1 \
	libgbm1 \
	libgcc1 \
	libglib2.0-0 \
	libgtk-3-0 \
	libnspr4 \
	libnss3 \
	libpango-1.0-0 \
	libpangocairo-1.0-0 \
	libstdc++6 \
	libx11-6 \
	libx11-xcb1 \
	libxcb1 \
	libxcomposite1 \
	libxcursor1 \
	libxdamage1 \
	libxext6 \
	libxfixes3 \
	libxi6 \
	libxrandr2 \
	libxrender1 \
	libxss1 \
	libxtst6 \
	lsb-release \
	libu2f-udev \
	wget \
	xdg-utils
```

#### Dependências CentOS 7/8 64bits (Validar)

```bash
yum install -y \
alsa-lib.x86_64 \
atk.x86_64 \
cups-libs.x86_64 \
gtk3.x86_64 \
ipa-gothic-fonts \
libXcomposite.x86_64 \
libXcursor.x86_64 \
libXdamage.x86_64 \
libXext.x86_64 \
libXi.x86_64 \
libXrandr.x86_64 \
libXScrnSaver.x86_64 \
libXtst.x86_64 \
pango.x86_64 \
xorg-x11-fonts-100dpi \
xorg-x11-fonts-75dpi \
xorg-x11-fonts-cyrillic \
xorg-x11-fonts-misc \
xorg-x11-fonts-Type1 \
xorg-x11-utils
```

#### Dependências Alpine 64bits (Validar)

```bash
# replacing default repositories with edge ones
echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" > /etc/apk/repositories \
echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
echo "http://dl-cdn.alpinelinux.org/alpine/v3.9/main" >> /etc/apk/repositories \
echo "http://dl-cdn.alpinelinux.org/alpine/v3.9/community" >> /etc/apk/repositories \
apk update \
apk upgrade \
# Add the packages
apk add --update --no-cache dumb-init curl make gcc g++ linux-headers binutils-gold gnupg libstdc++ nss chromium chromium-chromedriver git vim curl yarn nodejs nodejs-npm npm python python3 dpkg wget
```

#### Instale o Chromium Debian (e.g. Ubuntu) 64bits

```bash
sudo apt install -y chromium
```

#### Instale o Google Chrome Debian (e.g. Ubuntu) 64bits

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

sudo apt install ./google-chrome-stable_current_amd64.deb
```

#### Instale o Google Chrome CentOS 7/8 64bits

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm

sudo yum install ./google-chrome-stable_current_*.rpm
```

#### Instale o Google Chrome Alpine 64bits

```bash
apk add chromium chromium-chromedriver
```

#### Instale o NodeJs Debian (e.g. Ubuntu)

###### Instalar

```bash
# Ir para seu diretório home
cd ~

# Recuperar o script de instalação para sua versão de preferência
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

# Execute o script
sudo bash nodesource_setup.sh

# Instalar o pacote Node.js
sudo apt install -y git nodejs yarn gcc g++ make

# Remover pacotes que não são mais necessários
sudo apt autoremove -y
```

#### Instale o NodeJs CentOS 7/8 64bits

###### Instalar

```bash
# Ir para seu diretório home
cd ~

# Recuperar o script de instalação para sua versão de preferência
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -

# Execute o script
sudo yum install nodejs

# Instalar o pacote Node.js
sudo yum install -y git nodejs yarn gcc g++ make gcc-c++ tar

# Remover pacotes que não são mais necessários
sudo yum autoremove -y
```

#### Instale o NodeJs Alpine 64bits

###### Instalar

```bash
# Ir para seu diretório home
cd ~

# Instalar o pacote Node.js
apk add --update nodejs nodejs-npm
```


## Rodando a aplicação

```bash
# Ir para seu diretório home
cd ~

# Clone este repositório
git clone https://github.com/ihuri/api-escolas-aps.git 

# Acesse a pasta do projeto no terminal/cmd
cd api-escolas-aps

# Instale as dependências
npm install

# Execute a aplicação
npm start

# Manter os processos ativos a cada reinicialização do servidor
npm install pm2 -g

pm2 start server.js --name api-escolas-aps --watch

pm2 save

pm2 startup


# Para remover do init script
pm2 unstartup systemd

# O servidor iniciará na porta:3000

## Dockerfile

```bash
# Ir para seu diretório home
cd ~

# Clone este repositório
git clone https://github.com/ihuri/api-escolas-aps.git

# Acesse a pasta do projeto no terminal/cmd
$ cd api-escolas-aps

# Processando o arquivo Dockerfile
$ docker build -t ihuri/api-escolas-aps .

# Criar um contêiner
docker container run --name ihuri/api-escolas-aps -p 47776:3000 -d ihuri/api-escolas-aps:1.0
```

