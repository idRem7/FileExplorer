# FileExplorer
 Test task for Infinity Solutions

Срок - до 27.10, включительно.

Задача: Разработать компонент для отображения древовидной структуры файловой системы

Требования:
* Экран делится на две части, в левой находится список папок с файлами (неограниченная вложенность), в правой - предпросмотр (можно просто вывести имя выбранного файла/папки)
* При клике по папке она либо раскрывается либо закрывается в зависимости от текущего состояния
* Если папка пуста, то сделать ее полупрозрачной и запретить клик
* У компонента должен быть внешний API для того, чтобы другие компоненты могли раскрывать папки (по полному пути), выбирать файлы и т.п.
* Приложение должно поддерживать маршрутизацию (в качестве маршрута используется путь до выбранного элемента), чтобы при перезагрузке страницы последний выбранный элемент остался виден на странице
* Над деревом должно быть поле поиска, где можно выполнить поиск по подстроке (название папки или файла). Если папка или файл не попадают под фильтр, их необходимо скрыть (древовидную структуру сохранить). Плюсом будет передача строки поиска в адресную строку для сохранения контекста
* В качестве входных данных для отображения структуры задать свой json

Инструменты: Идеально, если будет использоваться Angular 8 (TypeScript). Можно на Vue.js (TypeScript или JavaScript) или React.js
Выполненное задание опубликовать на GitHub (или в любой другой публичный репозиторий)
