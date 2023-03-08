# 図書館の蔵書をひたすらスキャンしてリストアップできるツール

## Requirements

- node v12.x
- Python 3.x

開発は下記環境で行いました。

```console
$ node --version
v12.22.12
$ python --version
Python 3.10.9
$ cat /etc/os-release 
NAME="AlmaLinux"
VERSION="8.7 (Stone Smilodon)"
ID="almalinux"
ID_LIKE="rhel centos fedora"
VERSION_ID="8.7"
PLATFORM_ID="platform:el8"
PRETTY_NAME="AlmaLinux 8.7 (Stone Smilodon)"
ANSI_COLOR="0;34"
LOGO="fedora-logo-icon"
CPE_NAME="cpe:/o:almalinux:almalinux:8::baseos"
HOME_URL="https://almalinux.org/"
DOCUMENTATION_URL="https://wiki.almalinux.org/"
BUG_REPORT_URL="https://bugs.almalinux.org/"

ALMALINUX_MANTISBT_PROJECT="AlmaLinux-8"
ALMALINUX_MANTISBT_PROJECT_VERSION="8.7"
REDHAT_SUPPORT_PRODUCT="AlmaLinux"
REDHAT_SUPPORT_PRODUCT_VERSION="8.7"
```

## Setup & Run

```console
$ git clone <repository url> list_books
$ cd list_books
$ pip install -r requirements.txt
$ npm ci # If this fails, try npm install
$ npm run build
$ mkdir tmp
$ wget -O - https://github.com/caddyserver/caddy/releases/download/v2.6.4/caddy_2.6.4_linux_amd64.tar.gz > tmp/caddy.tar.gz
$ tar -C tmp/ -zxvf  tmp/caddy.tar.gz
$ sudo ./tmp/caddy reverse-proxy --from 192.168.11.9:443 --to :8080
$ python app.py
```
