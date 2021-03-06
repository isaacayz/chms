﻿/// <reference path="jquery-3.4.1.js" />
/// <reference path="modernizr-2.8.3.js" />
/// <autosync enabled="true" />
/// <reference path="../content/assets/apps/scripts/calendar.js" />
/// <reference path="../content/assets/apps/scripts/inbox.js" />
/// <reference path="../content/assets/apps/scripts/todo.js" />
/// <reference path="../content/assets/apps/scripts/todo-2.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/amcharts.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/funnel.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/gantt.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/gauge.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/az.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/bg.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/de.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/es.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/fi.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/fo.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/fr.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/hr.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/hu.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/id.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/is.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/it.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/lt.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/lv.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/mk.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/mn.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/mt.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/nl.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/no.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/pl.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/pt.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/ro.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/ru.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/rw.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/sk.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/so.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/th.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/lang/tr.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/pie.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/dataloader/dataloader.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/dataloader/lang/en.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/dataloader/lang/lt.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/examples/export.config.advanced.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/examples/export.config.default.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/export.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/lang/de.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/lang/en.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/lang/lt.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/lang/pl.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/blob.js/blob.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/fabric.js/fabric.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/filesaver.js/filesaver.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/jszip/jszip.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/pdfmake/pdfmake.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/pdfmake/vfs_fonts.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/export/libs/xlsx/xlsx.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/plugins/responsive/responsive.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/radar.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/serial.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/themes/black.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/themes/chalk.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/themes/dark.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/themes/light.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/themes/patterns.js" />
/// <reference path="../content/assets/global/plugins/amcharts/amcharts/xy.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/ammap.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/ammap_amcharts_extension.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/af.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/am.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/ar.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/as.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/az.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/be.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/bg.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/bn.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/bo.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/bs.js" />
/// <reference path="../content/assets/global/plugins/amcharts/ammap/lang/byn.js" />
