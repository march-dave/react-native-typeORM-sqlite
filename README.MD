## 설치 순서


## 안드로이드 에서 link 하기

1. Define the react-native-maps project in android/settings.gradle:
경로: android/settings.gradle

제일 아래쪽에 추가 하기
include ':react-native-sqlite-storage'
project(':react-native-sqlite-storage').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-sqlite-storage/src/android')

2. Add the react-native-maps as an dependency of your app in android/app/build.gradle:
경로: android/app/build.gradle
...
dependencies {
  ...
  라인 번호: 144
    implementation project(':react-native-sqlite-storage')
}


3. android/app/src/main/java/com/deleteme2/MainApplication.java
경로: android/app/src/main/java/com/프로젝트이름/MainApplication.java

import org.pgsqlite.SQLitePluginPackage;

라인 넘버: 26
new SQLitePluginPackage(),   // register SQLite Plugin here