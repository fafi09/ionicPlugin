1.追加一个component tab
ng generate page tab4 -m

2.部署app
ionic cordova platform add android
ionic cordova prepare android
ionic cordova run android
修改
D:\ionicbuild\demo\platforms\android\build.gradle
project.ext {
      defaultBuildToolsVersion="26.0.2" //String
      defaultMinSdkVersion=19 //Integer - Minimum requirement is Android 4.4
      defaultTargetSdkVersion=26 //Integer - We ALWAYS target the latest by default
      defaultCompileSdkVersion=26 //Integer - We ALWAYS compile with the latest by default
    }
    
D:\ionicbuild\demo\platforms\android\project.properties
target=android-26


D:\ionicbuild\demo\platforms\android\CordovaLib\project.properties
target=android-26

3.签名打包部署出现如下错误
命令：
D:\ionicbuild\demo>ionic cordova run android --prod --release -- -- --keystore=myapp.keystore --alias=myapp

错误：
Failed to create component for 'dialog' reason: java.awt.HeadlessException

解决方法：
在D:\ionicbuild\demo\platforms\android\CordovaLib\cordova.gradle中
import groovy.swing.SwingBuilder后加入
System.setProperty('java.awt.headless', 'false')

在if (System.console() == null) { 后加入
System.setProperty('java.awt.headless', 'false')

4.插件file使用
ionic cordova plugin add cordova-plugin-file
npm install @ionic-native/file

在config.xml中加入:

    <preference name="AndroidPersistentFileLocation" value="Internal" />
    <preference name="AndroidPersistentFileLocation" value="Compatibility" />

    module中添加file作为provider，component constructor中添加file的注入

如果注入不成功检查下面
"cordova-plugin-file": {}
是否在package.json里存在


=============创建插件===============
 npm install -g plugman
 
 plugman create --name RandomReader --plugin_id com.cfcc.deptone.randomreaderplugin --plugin_version 1.0.0
 
 plugman platform add --platform_name android
 
 
=== Error:java.lang.IllegalStateException: Dex archives: setting .DEX extension only for .CLASS files===
  gradlew clean 
  
  
====常用命令=====================
  ionic cordova run android
  adb devices
  ionic info
  ionic cordova  plugin remove cordova-plugin-file
  npm uninstall @ionic-native/file
  npm uninstall randomreader
  ionic cordova  plugin remove com.cfcc.deptone.randomreaderplugin
  ionic cordova plugin add cordova-plugin-file
  ionic cordova plugin list
  npm install @ionic-native/file@5.17.0
  npm init
  npm install -g plugman
  adb start-server
  adb kill-server
  plugman create --name RandomReader --plugin_id com.cfcc.deptone.randomreaderplugin --plugin_version 1.0.0
  plugman platform add --platform_name android

  =====使用插件=====
ionic cordova plugin add D:\ionicbuild\Plugins\RandomReader