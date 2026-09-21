<?php
/**
 * phpMyAdmin Configuration for Dr. Arman Kabir Care
 * 
 * Generated: July 2026
 */

// ─── Blowfish Secret (used for cookie encryption) ─────────────────────────
$cfg['blowfish_secret'] = '1c311e18b263afd1c9438912429db4bebe85c6dc10542b4c049cbfd07cc74bad';

// ─── Servers ──────────────────────────────────────────────────────────────
$i = 0;

$i++;
$cfg['Servers'][$i]['verbose'] = 'Dr. Arman Kabir Care';
$cfg['Servers'][$i]['host'] = 'localhost';
$cfg['Servers'][$i]['port'] = '';
$cfg['Servers'][$i]['socket'] = '';
$cfg['Servers'][$i]['connect_type'] = 'tcp';
$cfg['Servers'][$i]['extension'] = 'mysqli';
$cfg['Servers'][$i]['compress'] = false;
$cfg['Servers'][$i]['auth_type'] = 'cookie';
$cfg['Servers'][$i]['user'] = '';
$cfg['Servers'][$i]['password'] = '';
$cfg['Servers'][$i]['AllowNoPassword'] = false;

// ─── Database settings ───────────────────────────────────────────────────
$cfg['Servers'][$i]['only_db'] = ''; // Show all databases
$cfg['Servers'][$i]['hide_db'] = 'information_schema|performance_schema|sys|mysql';
$cfg['Servers'][$i]['navigation_tree_quick_search'] = true;

// ─── Theme & Interface ─────────────────────────────────────────────────────
$cfg['ThemeDefault'] = 'pmahomme';
$cfg['MaxRows'] = 50;
$cfg['DefaultLang'] = 'en';
$cfg['ServerDefault'] = 1;
$cfg['ShowDatabasesNavigationAsTree'] = true;
$cfg['NavigationTreeEnableGrouping'] = true;
$cfg['NavigationTreeDbSeparator'] = '_';
$cfg['NavigationTreeTableSeparator'] = '__';
$cfg['NavigationTreeTableLevel'] = 1;

// ─── Security ──────────────────────────────────────────────────────────────
$cfg['LoginCookieValidity'] = 1440; // 24 minutes
$cfg['LoginCookieRecall'] = false;
$cfg['AllowUserDropDatabase'] = false;
$cfg['ShowServerInfo'] = true;
$cfg['ShowPhpInfo'] = false;
$cfg['ShowChgPassword'] = true;
$cfg['ShowCreateDb'] = false;
$cfg['SuggestDBName'] = true;

// ─── Export / Import ───────────────────────────────────────────────────────
$cfg['Export']['method'] = 'quick';
$cfg['Export']['format'] = 'sql';
$cfg['Import']['charset'] = 'utf-8';
$cfg['Import']['allow_interrupt'] = true;
$cfg['Import']['skip_queries'] = 0;

// ─── Query window ──────────────────────────────────────────────────────────
$cfg['QueryWindowDefTab'] = 'sql';
$cfg['QueryHistoryDB'] = false;
$cfg['QueryHistoryMax'] = 25;

// ─── Bookmarks & favorites ────────────────────────────────────────────────
$cfg['Bookmark'] = true;
$cfg['BrowseMarkerEnable'] = true;
$cfg['BrowsePointerEnable'] = true;

// ─── Text fields ───────────────────────────────────────────────────────────
$cfg['LimitChars'] = 100;
$cfg['TextareaCols'] = 60;
$cfg['TextareaRows'] = 15;
$cfg['LongtextDoubleTextarea'] = true;

// ─── Trusted proxies (if behind load balancer) ────────────────────────────
$cfg['TrustedProxies'] = [];

// ─── Save directory for exports (secure location) ─────────────────────────
$cfg['SaveDir'] = '/home/drarmank/server-data/exports';
$cfg['TempDir'] = '/home/drarmank/server-data/tmp';

// ─── Error reporting ───────────────────────────────────────────────────────
$cfg['SendErrorReports'] = 'never';
$cfg['ConsoleEnterExecutes'] = true;

// ─── Font size ─────────────────────────────────────────────────────────────
$cfg['FontSize'] = '12px';
