# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### доделать
как-то надо подключить стили единым файлом
шрифты и иконочные шрифты подключить

Шрифты:
скачать с гугл фонтс, потом конвертировать (web fonts generator) в формат woff, создадутся файлы шрифтов и файл style.css c правилом font-family, в src/assets создать папку fonts, туда файлы шрифтов, style.css перенесла в style.scss и поправила пути.

Стили: импортируем style.scss в main.js